/**
 * lib/meta/config.ts
 *
 * Single source of truth for all Meta analytics configuration.
 *
 * Design principles:
 *   - No credentials are ever hardcoded in application logic.
 *   - Missing env vars degrade gracefully in production and warn loudly in dev.
 *   - Future Conversions API credentials are added here — nowhere else.
 *
 * Required environment variables:
 *   VITE_META_PIXEL_ID   — your pixel ID from Meta Events Manager → Data Sources
 *
 * Optional environment variables:
 *   VITE_META_PIXEL_ENABLED — set to "true" to force-enable in local dev
 *
 * On Vercel:
 *   Add VITE_META_PIXEL_ID in Project Settings → Environment Variables.
 *   Production mode is detected automatically; VITE_META_PIXEL_ENABLED is not needed.
 *
 * Future — Conversions API:
 *   export const META_CAPI_ACCESS_TOKEN = import.meta.env.VITE_META_CAPI_ACCESS_TOKEN ?? '';
 *   export const META_CAPI_DATASET_ID   = META_PIXEL_ID;
 *   export const META_CAPI_API_VERSION  = 'v20.0';
 */

// ─────────────────────────────────────────────────────────────────────────────
// Internal: read and validate env vars once at module load time
// ─────────────────────────────────────────────────────────────────────────────

const _rawPixelId: string = import.meta.env.VITE_META_PIXEL_ID ?? '';

/**
 * Validate the Pixel ID at startup (development only).
 * A missing or malformed ID silently degrades tracking — warn developers early
 * so misconfiguration is caught before reaching production.
 */
if (import.meta.env.DEV) {
  if (!_rawPixelId) {
    console.warn(
      '[Meta Pixel] VITE_META_PIXEL_ID is not set.\n' +
      'Add it to your .env.local file:\n' +
      '  VITE_META_PIXEL_ID=your_pixel_id_here\n' +
      'Pixel events will be silently dropped until this is resolved.'
    );
  } else if (!/^\d{15,16}$/.test(_rawPixelId)) {
    console.warn(
      `[Meta Pixel] VITE_META_PIXEL_ID="${_rawPixelId}" does not look like a valid Pixel ID.\n` +
      'Meta Pixel IDs are 15–16 digit numbers. Verify in Meta Events Manager.'
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The Meta Pixel ID for Qasberry Tech.
 * Sourced exclusively from the VITE_META_PIXEL_ID environment variable.
 * Empty string when the variable is not set — `initPixel()` will return false
 * rather than initialising with a blank ID.
 */
export const META_PIXEL_ID: string = _rawPixelId;

/**
 * Master kill-switch for all pixel events.
 *
 * Enabled automatically in production (import.meta.env.PROD).
 * Disabled in development unless explicitly overridden via VITE_META_PIXEL_ENABLED=true
 * in .env.local — this prevents local development from polluting real event data.
 */
export const META_PIXEL_ENABLED: boolean =
  Boolean(META_PIXEL_ID) && (
    import.meta.env.PROD === true ||
    import.meta.env.VITE_META_PIXEL_ENABLED === 'true'
  );
