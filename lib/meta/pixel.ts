/**
 * lib/meta/pixel.ts
 *
 * Core Meta Pixel analytics module for Qasberry Tech.
 *
 * Design principles:
 *   - Every fbq() call is encapsulated here. No other file touches the global directly.
 *   - All functions are pure (no side effects beyond the fbq call), reusable, and typed.
 *   - Ad blocker / missing script scenarios degrade silently — never throw.
 *   - Automatic metadata is attached to every event (page_location, page_title, etc.)
 *     without requiring callers to pass it manually.
 *   - Every function has a clearly marked CAPI_HOOK comment showing exactly where
 *     to add server-side mirroring when the Conversions API is implemented.
 *
 * Usage:
 *   import { trackLead } from '@/lib/meta/pixel';
 *   trackLead({ content_name: 'AI Consultation Request', source: 'home_hero' });
 *
 * Advanced Matching (future):
 *   When ready, pass FbqAdvancedMatching data to initPixel() and update the
 *   fbq('init') call. No other changes are needed.
 *
 * Conversions API (future):
 *   Each function has a CAPI_HOOK comment. Uncomment the fetch() call and
 *   point it at your serverless function. The eventID field on FbqEventParameters
 *   handles browser ↔ server deduplication automatically.
 */

import { META_PIXEL_ID, META_PIXEL_ENABLED } from './config';
import type { FbqEventParameters } from './fbq.d';

// Re-export so callers can import types from this module without touching fbq.d.ts
export type { FbqEventParameters };
export type { FbqAdvancedMatching } from './fbq.d';

// ─────────────────────────────────────────────────────────────────────────────
// Internal helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns true when window.fbq is available and callable.
 * Guards against: ad blockers, missing script, server-side contexts.
 */
function isFbqReady(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

/**
 * Assembles the automatic metadata payload that is merged into every event.
 *
 * Automatic fields:
 *   page_location — full URL (window.location.href)
 *   page_title    — document.title
 *   page_path     — pathname + hash (e.g. "/#/contact")
 *   referrer      — document.referrer (empty string when there is none)
 *
 * These fields improve attribution accuracy in Meta Events Manager and make
 * CAPI deduplication more reliable without requiring callers to pass them manually.
 */
function buildEventPayload(params?: FbqEventParameters): FbqEventParameters {
  const automatic: FbqEventParameters = {
    page_location: window.location.href,
    page_title:    document.title,
    page_path:     window.location.pathname + window.location.hash,
    referrer:      document.referrer || undefined,
  };
  // Caller-supplied params take precedence over automatic values so that
  // callers can override (e.g. pass a canonical page_title when needed).
  return { ...automatic, ...params };
}

/**
 * Central dispatch function — the single point through which all fbq() calls flow.
 *
 * Benefits of centralising here:
 *   - Eliminates the duplicated guard + try/catch boilerplate from every function.
 *   - Ensures automatic metadata is consistently attached to every event.
 *   - Provides a single place to add global event interception (e.g. consent checks).
 *   - CAPI mirroring can be added here as an optional second layer without touching
 *     individual tracking functions (global hook), or at each call site (per-event hook).
 *
 * @param command   - 'track' for standard events, 'trackCustom' for custom events.
 * @param eventName - The Meta event name (e.g. 'PageView', 'Lead').
 * @param params    - Optional event parameters merged with automatic metadata.
 * @returns true if the event was dispatched successfully.
 */
function dispatch(
  command: 'track' | 'trackCustom',
  eventName: string,
  params?: FbqEventParameters
): boolean {
  if (!META_PIXEL_ENABLED) return false;
  if (!isFbqReady())       return false;

  try {
    const payload = buildEventPayload(params);
    // TypeScript cannot resolve overloads from a union type; the conditional
    // below narrows to a single, unambiguous overload signature at each branch.
    if (command === 'trackCustom') {
      window.fbq('trackCustom', eventName, payload);
    } else {
      window.fbq('track', eventName, payload);
    }
    return true;
  } catch {
    // Silent in production. Only log in development.
    if (import.meta.env.DEV) {
      console.warn(`[Meta Pixel] Failed to dispatch event "${eventName}".`);
    }
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Initialisation
// ─────────────────────────────────────────────────────────────────────────────

/** Module-level flag — guarantees initPixel() is idempotent across all call sites. */
let pixelInitialised = false;

/**
 * Initialises the Meta Pixel.
 *
 * Idempotent: safe to call multiple times — subsequent calls are no-ops.
 * StrictMode safe: the module-level flag survives React's double-invoke
 * of useEffect in development.
 *
 * Called internally by MetaPixelScript; application code should not call this.
 *
 * Advanced Matching (future):
 *   When ready, import FbqAdvancedMatching and update the signature to:
 *   export function initPixel(advancedMatching?: FbqAdvancedMatching): boolean
 *   Then pass it as: window.fbq('init', META_PIXEL_ID, advancedMatching)
 *
 * @returns true if the pixel was initialised successfully.
 */
export function initPixel(): boolean {
  if (pixelInitialised)  return true;
  if (!META_PIXEL_ID)    return false;   // env var missing — fail gracefully
  if (!isFbqReady())     return false;   // fbq not yet available

  try {
    window.fbq('init', META_PIXEL_ID);
    // CAPI_HOOK (init): no server-side call needed for init — only for events.
    pixelInitialised = true;
    return true;
  } catch {
    if (import.meta.env.DEV) {
      console.warn('[Meta Pixel] Initialisation failed. Check that the Pixel ID is valid.');
    }
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Standard Events
// All functions delegate to dispatch() to avoid duplicated boilerplate.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fires a PageView event.
 *
 * Called automatically on every route change via usePageTracking().
 * Rarely needs to be called directly from application code.
 *
 * Automatic metadata included: page_location, page_title, page_path, referrer.
 *
 * @returns true if the event was dispatched successfully.
 */
export function trackPageView(): boolean {
  const ok = dispatch('track', 'PageView');
  // CAPI_HOOK: void sendCapiEvent({ event_name: 'PageView', event_source_url: window.location.href, eventID: generateEventId() });
  return ok;
}

/**
 * Fires a Lead event.
 *
 * When to call: after a user expresses intent — CTA click, form start, inquiry.
 *
 * @example
 * trackLead({ content_name: 'AI Consultation Request', source: 'home_hero' });
 *
 * @param params - Optional Lead event parameters.
 * @returns true if the event was dispatched successfully.
 */
export function trackLead(params?: FbqEventParameters): boolean {
  const ok = dispatch('track', 'Lead', params);
  // CAPI_HOOK: void sendCapiEvent({ event_name: 'Lead', ...params, event_source_url: window.location.href, eventID: params?.eventID ?? generateEventId() });
  return ok;
}

/**
 * Fires a Contact event.
 *
 * When to call: after a contact form is submitted successfully.
 *
 * @example
 * trackContact({ source: 'contact_page_form' });
 *
 * @param params - Optional Contact event parameters.
 * @returns true if the event was dispatched successfully.
 */
export function trackContact(params?: FbqEventParameters): boolean {
  const ok = dispatch('track', 'Contact', params);
  // CAPI_HOOK: void sendCapiEvent({ event_name: 'Contact', ...params, event_source_url: window.location.href, eventID: params?.eventID ?? generateEventId() });
  return ok;
}

/**
 * Fires a ViewContent event.
 *
 * When to call: when a user views a high-value page — industry solution,
 * case study, or downloadable resource.
 *
 * @example
 * trackViewContent({ content_name: 'Oil & Gas AI Solutions', content_category: 'Solutions' });
 *
 * @param params - Optional ViewContent event parameters.
 * @returns true if the event was dispatched successfully.
 */
export function trackViewContent(params?: FbqEventParameters): boolean {
  const ok = dispatch('track', 'ViewContent', params);
  // CAPI_HOOK: void sendCapiEvent({ event_name: 'ViewContent', ...params, event_source_url: window.location.href, eventID: params?.eventID ?? generateEventId() });
  return ok;
}

/**
 * Fires a Schedule event.
 *
 * When to call: AFTER the API confirms a booking — not on button click.
 * Firing on API confirmation eliminates false positives from abandoned bookings.
 *
 * @example
 * trackSchedule({ content_name: '1:1 Strategy Session', value: 0, currency: 'USD' });
 *
 * @param params - Optional Schedule event parameters.
 * @returns true if the event was dispatched successfully.
 */
export function trackSchedule(params?: FbqEventParameters): boolean {
  const ok = dispatch('track', 'Schedule', params);
  // CAPI_HOOK: void sendCapiEvent({ event_name: 'Schedule', ...params, event_source_url: window.location.href, eventID: params?.eventID ?? generateEventId() });
  return ok;
}

/**
 * Fires a CompleteRegistration event.
 *
 * When to call: when a user finishes a registration or enrollment flow.
 * For future use with the Qasberry Academy or any gated portal.
 *
 * @example
 * trackCompleteRegistration({ content_name: 'Academy Enrollment', status: true });
 *
 * @param params - Optional CompleteRegistration event parameters.
 * @returns true if the event was dispatched successfully.
 */
export function trackCompleteRegistration(params?: FbqEventParameters): boolean {
  const ok = dispatch('track', 'CompleteRegistration', params);
  // CAPI_HOOK: void sendCapiEvent({ event_name: 'CompleteRegistration', ...params, event_source_url: window.location.href, eventID: params?.eventID ?? generateEventId() });
  return ok;
}

// ─────────────────────────────────────────────────────────────────────────────
// Custom Events
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fires a custom (non-standard) Meta Pixel event.
 *
 * Only use this when no standard Meta event covers the action. Standard events
 * benefit from Meta's built-in optimisation signals; custom events do not.
 *
 * @example
 * trackCustomEvent('RoadmapBuilderStarted', { industry: 'Oil & Gas' });
 * trackCustomEvent('ResourceDownloaded',    { content_name: 'AI Readiness Guide' });
 *
 * @param eventName - PascalCase event name. Must be non-empty.
 * @param params    - Optional event parameters.
 * @returns true if the event was dispatched successfully.
 */
export function trackCustomEvent(
  eventName: string,
  params?: FbqEventParameters
): boolean {
  if (!eventName) {
    if (import.meta.env.DEV) {
      console.warn('[Meta Pixel] trackCustomEvent() called with an empty event name.');
    }
    return false;
  }
  const ok = dispatch('trackCustom', eventName, params);
  // CAPI_HOOK: void sendCapiEvent({ event_name: eventName, ...params, event_source_url: window.location.href, eventID: params?.eventID ?? generateEventId() });
  return ok;
}
