/**
 * lib/meta/usePageTracking.ts
 *
 * React hook that fires a Meta Pixel PageView event on every client-side
 * route change, excluding the initial page load.
 *
 * Why "excluding the initial page load":
 *   MetaPixelScript fires the first PageView immediately after fbq('init').
 *   If this hook also fired on mount, every visitor would receive two PageView
 *   events for the landing page — doubling reported traffic in Meta Events Manager.
 *   The `isMounted` ref pattern ensures the initial render is skipped while
 *   every genuine navigation fires exactly one PageView.
 *
 * Why useRef and not useState for the mounted flag:
 *   useState would trigger a re-render when toggled, which is unnecessary.
 *   useRef mutates in place with zero re-renders or memory allocation overhead.
 *
 * StrictMode safety:
 *   In React StrictMode, useEffect runs twice on mount in development.
 *   The isMounted ref is set to true on the first execution; the second
 *   execution sees isMounted.current === true and fires trackPageView() —
 *   this is the correct behaviour in StrictMode (the second call is the real one).
 *   In production, useEffect runs exactly once, so behaviour is identical.
 *
 * When to use:
 *   Mount once, inside a component that is a child of <Router>.
 *   In this project that is RouterPageTracker in App.tsx.
 *   Do NOT call it in individual page components — that causes duplicate events.
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './pixel';

/**
 * Fires trackPageView() on every client-side route change.
 * Skips the initial mount to prevent a double PageView with MetaPixelScript.
 */
export function usePageTracking(): void {
  const location  = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      // First execution: mark as mounted, do NOT fire PageView.
      // The initial PageView is handled by MetaPixelScript after fbq('init').
      isMounted.current = true;
      return;
    }

    // Subsequent executions: a genuine route change has occurred.
    trackPageView();

  }, [location.pathname, location.hash]);
}
