# Google Lead Setup

This site's contact form sends every inquiry to a free Google workflow:

```
Visitor → Website → Google Apps Script → Google Sheet → Gmail Notification → You
```

No Supabase. No Firebase. No paid form services. Everything runs on free
Google tools you already have.

You only need to change **one value** in the project:

```ts
// src/config/site.ts
export const GOOGLE_APPS_SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
```

Follow the steps below once and you're done.

---

## 1. Create a Google Sheet

1. Go to <https://sheets.new>.
2. Rename the file to something like **"Website Leads"**.

## 2. Name the worksheet

1. Double-click the tab at the bottom (default `Sheet1`).
2. Rename it to **`Leads`**.
3. In row 1, paste these headers (one per column, in order):

```
Timestamp | Name | Business | Email | Phone | Business Type | Services | Timeline | Message | Lead Status | Notes
```

> The Apps Script below writes rows in this exact order.

## 3. Open the Apps Script editor

1. In your Sheet, go to **Extensions → Apps Script**.
2. Delete any placeholder code in `Code.gs`.

## 4. Paste the Apps Script code

Paste the following into `Code.gs` and save (**File → Save**, name it e.g. "Website Leads Handler"):

```js
const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = 'HerDigitalPath@gmail.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.business || '',
      data.email || '',
      data.phone || '',
      data.businessType || '',
      data.services || '',
      data.timeline || '',
      data.message || '',
      'New',
      '',
    ]);

    const body = [
      'New Website Inquiry',
      '',
      'Name: ' + (data.name || ''),
      'Business: ' + (data.business || ''),
      'Email: ' + (data.email || ''),
      'Phone: ' + (data.phone || ''),
      'Business Type: ' + (data.businessType || ''),
      'Services: ' + (data.services || ''),
      'Timeline: ' + (data.timeline || ''),
      '',
      'Message:',
      data.message || '',
    ].join('\n');

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New Website Inquiry',
      body: body,
      replyTo: data.email || undefined,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 5. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Choose type: **Web app**.
3. Description: *Website Leads Handler*.
4. **Execute as:** Me.
5. **Who has access:** Anyone.
6. Click **Deploy**, then approve the permissions prompt (allow access to Sheets and Gmail on your Google account).

## 6. Copy the deployment URL

After deploying, Apps Script shows a URL like:

```
https://script.google.com/macros/s/AKfycb.../exec
```

Copy it.

## 7. Paste the URL into the project

Open `src/config/site.ts` and paste the URL:

```ts
export const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycb.../exec";
```

Save. No other code changes are needed.

## 8. Test the contact form

1. Reload the site.
2. Scroll to the **Contact** section.
3. Fill in every field and submit.
4. You should see the success message on the page.

## 9. Verify the inquiry appears in Google Sheets

Open the **Website Leads** Sheet. A new row with the current timestamp and
the submitted data should appear on the `Leads` tab.

## 10. Verify the notification email arrives

Check the inbox at **HerDigitalPath@gmail.com**. You should have an email
titled **"New Website Inquiry"** with the submission details.

---

## Reusing this for another client

1. Duplicate the Google Sheet.
2. Open **Extensions → Apps Script** on the copy.
3. Change `NOTIFY_EMAIL` to the client's address.
4. **Deploy → New deployment** → copy the new URL.
5. Paste it into that client's `src/config/site.ts`.

No monthly software cost. The client owns the Sheet, the script, and every
lead that comes in.