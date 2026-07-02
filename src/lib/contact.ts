import { GOOGLE_APPS_SCRIPT_URL } from "@/config/site";
import type { ContactSubmission, ContactSubmitResult } from "@/types/contact";

/**
 * Submit a contact form entry to the configured Google Apps Script Web App.
 *
 * Uses `no-cors` mode so the browser doesn't require CORS headers back from
 * Apps Script — the row still lands in the Sheet and the notification email
 * still fires. If no URL is configured, we short-circuit into demo mode.
 */
export async function submitContact(
  data: ContactSubmission,
): Promise<ContactSubmitResult> {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    // Demo mode — pretend it succeeded so the UI can be showcased.
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, demo: true };
  }

  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
    });
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}