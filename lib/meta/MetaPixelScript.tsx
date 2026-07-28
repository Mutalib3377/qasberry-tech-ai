/**
 * lib/meta/MetaPixelScript.tsx
 *
 * Side-effect component that injects the Meta Pixel CDN script into <head>
 * exactly once, after React hydration, without blocking rendering.
 *
 * Lifecycle:
 *   1. Component mounts — useEffect fires (client-side only).
 *   2. Module-level `initialised` flag blocks any re-execution.
 *   3. The fbq queue shim is installed synchronously (no network wait).
 *      Any fbq() call made before the CDN script arrives is queued and replayed.
 *   4. The CDN script is appended as <script async> — non-blocking.
 *   5. initPixel() calls fbq('init', pixelId) — goes into the queue.
 *   6. trackPageView() fires the initial PageView — also queued if needed.
 *   7. When fbevents.js loads, the queue is drained in order.
 *   8. Subsequent PageViews are fired by RouterPageTracker → usePageTracking().
 *
 * StrictMode safety:
 *   React StrictMode double-invokes useEffect in development. The module-level
 *   `initialised` flag (not a ref — refs reset on remount) ensures the CDN
 *   script and init call execute exactly once regardless of double-invocation.
 *
 * Performance:
 *   - Returns null — zero DOM output, zero re-renders.
 *   - Script is loaded with `async` — never on the critical rendering path.
 *   - No state, no subscriptions, no timers, no memory leaks.
 *
 * Error handling:
 *   - Script load failures (ad blockers, network) produce a dev-only warning.
 *   - Production remains completely silent; isFbqReady() guards prevent crashes.
 *
 * Placement:
 *   Render once inside <Router> in App.tsx (required so useLocation works
 *   in the sibling RouterPageTracker component).
 *
 * @example
 * // App.tsx — inside <Router>
 * <MetaPixelScript />
 * <RouterPageTracker />
 */

import { useEffect } from 'react';
import { META_PIXEL_ENABLED } from './config';
import { initPixel, trackPageView } from './pixel';

/**
 * Module-level guard — survives React StrictMode's double useEffect invocation.
 * A component ref would be reset on remount; a module-level variable is not.
 */
let initialised = false;

export default function MetaPixelScript(): null {
  useEffect(() => {
    if (!META_PIXEL_ENABLED || initialised) return;
    initialised = true;

    // ── Step 1: Install the fbq queue shim ─────────────────────────────────
    // Mirrors the official Meta Pixel base code (minified).
    // Calls to fbq() before the CDN script loads are queued here and replayed
    // once fbevents.js evaluates — no tracking calls are ever lost.
    (function installFbqShim() {
      if (typeof window.fbq === 'function') return; // guard: shim already present

      const shim = function (...args: unknown[]) {
        const typed = shim as Window['fbq'];
        if (typed.callMethod) {
          (typed.callMethod as (...a: unknown[]) => void).apply(typed, args);
        } else {
          (typed.queue ??= []).push(args);
        }
      } as unknown as Window['fbq'];

      window.fbq  = shim;
      window._fbq = shim;

      shim.push    = shim;
      shim.loaded  = true;
      shim.version = '2.0';
      shim.queue   = [];
    })();

    // ── Step 2: Inject the CDN script ──────────────────────────────────────
    // Using a plain <script async> keeps this framework-agnostic and avoids
    // any dependency on Vite-specific or React-specific script helpers.
    const SCRIPT_ID = 'meta-pixel-sdk';
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id    = SCRIPT_ID;
      script.async = true;
      script.src   = 'https://connect.facebook.net/en_US/fbevents.js';

      script.onerror = () => {
        // Warn in development only — ad blocker interference is expected
        // in some environments and must not pollute production logs.
        if (import.meta.env.DEV) {
          console.warn(
            '[Meta Pixel] CDN script failed to load (possible ad blocker). ' +
            'Pixel events will be silently dropped.'
          );
        }
      };

      // Insert before the first existing script — standard Pixel placement
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript?.parentNode?.insertBefore(script, firstScript);
    }

    // ── Step 3: Initialise and fire the initial PageView ───────────────────
    // initPixel() calls fbq('init', pixelId); trackPageView() fires 'PageView'.
    // Both calls go into the shim queue if fbevents.js hasn't loaded yet,
    // and are replayed in order once it does — guaranteeing correct sequencing.
    if (initPixel()) {
      trackPageView();
    }

  }, []); // ← empty deps: run exactly once on mount

  return null;
}
