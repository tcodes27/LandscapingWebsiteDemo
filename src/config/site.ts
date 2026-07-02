/**
 * ============================================================================
 * SITE-LEVEL CONFIGURATION
 * ============================================================================
 *
 * The only value you need to change to wire up the contact form to your own
 * Google Sheet + Gmail notification is `GOOGLE_APPS_SCRIPT_URL`.
 *
 * See GOOGLE_LEAD_SETUP.md at the project root for step-by-step setup.
 * ============================================================================
 */

/**
 * Paste your deployed Google Apps Script Web App URL here.
 * It should look like:
 *   https://script.google.com/macros/s/AKfycb.../exec
 *
 * Leave as an empty string to run the form in demo mode (no network call).
 */
export const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyvWo9Ik1li7IGc8_WRasTvPH5bvYjOVuGro4K41BaP35a9QjmvpLuO_UOhlGhTo-ZPUw/exec";

/** Where lead notification emails are sent (also shown as mailto: on the site). */
export const CONTACT_EMAIL = "HerDigitalPath@gmail.com";
