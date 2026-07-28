/**
 * lib/meta/fbq.d.ts
 *
 * TypeScript ambient type declarations for the Meta Pixel global (`fbq`).
 *
 * This file augments the global Window interface so that `window.fbq` is
 * fully typed throughout the codebase without any imports.
 *
 * Sections:
 *   1. FbqEventParameters  — typed payload for standard events
 *   2. FbqAdvancedMatching — optional customer data for Advanced Matching (prep only)
 *   3. FbqFunction         — all supported fbq() call signatures
 *   4. Window augmentation — merges fbq into the global Window
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. Event Parameters
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Standard and extended parameters accepted by Meta Pixel events.
 *
 * All fields are optional. Include only what is relevant to each event.
 *
 * References:
 *   https://developers.facebook.com/docs/meta-pixel/reference
 *   https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
 */
export interface FbqEventParameters {
  // ── Standard event parameters ──────────────────────────────────────────────

  /** Monetary value associated with the event. */
  value?: number;
  /** ISO 4217 currency code, e.g. 'USD', 'NGN'. Required if value is set. */
  currency?: string;
  /** Human-readable name of the content or page. */
  content_name?: string;
  /** Category of the content or page. */
  content_category?: string;
  /** Array of content IDs (for product catalogs). */
  content_ids?: string[];
  /** Type of content, e.g. 'product', 'article'. */
  content_type?: string;
  /** Predicted lifetime value of the user. */
  predicted_ltv?: number;
  /** Number of items (e.g. seats booked). */
  num_items?: number;
  /** Completion status — used in CompleteRegistration. */
  status?: boolean | string;
  /** Search query string — used in Search events. */
  search_string?: string;

  // ── Custom / internal parameters ───────────────────────────────────────────

  /**
   * Unique event identifier for browser-CAPI deduplication.
   * Should be a UUID v4. When mirroring with Conversions API, pass the same
   * event_id on both sides. Meta will deduplicate automatically.
   * See: https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
   */
  eventID?: string;

  /** Source identifier — internal label for where in the app the event fired. */
  source?: string;

  // ── Automatic metadata — populated by buildEventPayload() in pixel.ts ──────
  // Do not pass these manually; they are injected automatically.

  /** Full URL of the page when the event fired. */
  page_location?: string;
  /** document.title at the time of the event. */
  page_title?: string;
  /** pathname + hash segment of the URL. */
  page_path?: string;
  /** document.referrer at the time of the event. */
  referrer?: string;

  /** Arbitrary additional key/value pairs for custom metadata. */
  [key: string]: unknown;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Advanced Matching (preparation — not yet implemented)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Hashed customer information for Meta Advanced Matching.
 *
 * DO NOT pass raw PII. Meta requires SHA-256 hashed values.
 * When Advanced Matching is activated, pass this object as the third
 * argument to fbq('init', pixelId, advancedMatching).
 *
 * Reference: https://developers.facebook.com/docs/meta-pixel/advanced/advanced-matching
 */
export interface FbqAdvancedMatching {
  /** SHA-256 hashed lowercase email address. */
  em?: string;
  /** SHA-256 hashed phone number (digits only, E.164 without +). */
  ph?: string;
  /** SHA-256 hashed lowercase first name. */
  fn?: string;
  /** SHA-256 hashed lowercase last name. */
  ln?: string;
  /** SHA-256 hashed date of birth (YYYYMMDD). */
  db?: string;
  /** SHA-256 hashed gender ('m' or 'f'). */
  ge?: string;
  /** SHA-256 hashed city (lowercase, no spaces). */
  ct?: string;
  /** SHA-256 hashed ISO 3166-2 state code (lowercase). */
  st?: string;
  /** SHA-256 hashed postal/ZIP code. */
  zp?: string;
  /** ISO 3166-1 alpha-2 country code (lowercase, NOT hashed). */
  country?: string;
  /** External user ID from your system (NOT hashed). */
  external_id?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. fbq Function Type
// ─────────────────────────────────────────────────────────────────────────────

/**
 * All supported fbq() call signatures.
 *
 * Add new overloads here when new Meta Pixel commands are needed.
 * Current Meta Pixel command set: init, track, trackCustom, set, consent.
 */
type FbqFunction = {
  /** Initialise the pixel without Advanced Matching. */
  (command: 'init', pixelId: string): void;
  /**
   * Initialise the pixel with Advanced Matching data.
   * Activate when you are ready to pass hashed customer data.
   */
  (command: 'init', pixelId: string, advancedMatching: FbqAdvancedMatching): void;
  /** Fire a standard Meta event (e.g. PageView, Lead, Contact). */
  (command: 'track', eventName: string, parameters?: FbqEventParameters): void;
  /** Fire a custom (non-standard) Meta event. */
  (command: 'trackCustom', eventName: string, parameters?: FbqEventParameters): void;
  /**
   * Set user properties. Used to pass Advanced Matching after init.
   * @example fbq('set', 'autoConfig', false, pixelId);
   */
  (command: 'set', property: string, value: unknown, pixelId?: string): void;
  /** Manage consent state (GDPR / privacy compliance). */
  (command: 'consent', action: 'grant' | 'revoke'): void;

  // Internal queue properties injected by the Pixel base code shim
  callMethod?: (...args: unknown[]) => void;
  queue?:      unknown[];
  push?:       (...args: unknown[]) => void;
  loaded?:     boolean;
  version?:    string;
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. Global Window augmentation
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    /** Meta Pixel tracking function — available after the CDN script loads. */
    fbq:  FbqFunction;
    /** Internal alias maintained by the Pixel base code. */
    _fbq: FbqFunction;
  }
}

// Required to make this file a TypeScript module (global augmentation rule)
export {};
