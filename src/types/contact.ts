/**
 * Shape of the data submitted from the contact form on the site,
 * and forwarded to the Google Apps Script Web App endpoint.
 */
export interface ContactSubmission {
  name: string;
  business: string;
  email: string;
  phone: string;
  businessType: string;
  services: string;
  timeline: string;
  message: string;
}

export interface ContactSubmitResult {
  ok: boolean;
  demo?: boolean;
  error?: string;
}