Set `GOOGLE_APPS_SCRIPT_URL` in `src/config/site.ts` to:

```
https://script.google.com/macros/s/AKfycbyvWo9Ik1li7IGc8_WRasTvPH5bvYjOVuGro4K41BaP35a9QjmvpLuO_UOhlGhTo-ZPUw/exec
```

No other changes — `src/lib/contact.ts` already POSTs the exact `{name, business, email, phone, businessType, services, timeline, message}` payload to this URL, so this activates live submissions to your Google Sheet + Gmail.