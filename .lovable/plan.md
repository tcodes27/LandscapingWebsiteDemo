## Plan: Extend README with Google Workspace Backend Case Study

Append a new engineering case-study section to `README.md` and add screenshots to `docs/screenshots/`. Existing README content stays intact. No app source code changes.

### New screenshots (copied from uploads)
- `docs/screenshots/google-sheet-crm.png` — Lead CRM sheet with rows
- `docs/screenshots/crm-dashboard.png` — CRM dashboard with pie chart
- `docs/screenshots/apps-script-backend.png` — Apps Script `doPost` code
- `docs/screenshots/gmail-notification.png` — Full inquiry email
- `docs/screenshots/gmail-inbox.png` — Inbox list of inquiries

### README additions

Insert `## Google Workspace Backend — Engineering Case Study` between the existing `Business Impact` and `Reusable Architecture` sections, and add a matching Table of Contents entry.

Subsections in order:

1. **Architecture Overview** — opens with the user's framing:
   > This project intentionally uses a lightweight, serverless backend powered by Google Workspace. Instead of introducing a traditional database and API server, the solution leverages Google Apps Script, Google Sheets, and Gmail to provide a reliable lead management workflow with minimal infrastructure and no recurring backend costs. This approach is ideal for small businesses while remaining extensible for future growth.

   Followed by bullets: zero monthly cost, client ownership, easy onboarding, easy maintenance, no DB admin, no vendor lock-in, scalable.

2. **Backend Workflow** — Mermaid `flowchart LR` (Visitor → Landing Page → Contact Form → Google Apps Script → Google Sheets CRM → Gmail Notification → Business Owner → Follow-up) + one-sentence purpose per step.

3. **Google Apps Script** — embed `apps-script-backend.png`. Purpose paragraph + Responsibilities bullets (receives submissions, validates data, writes to Sheets, sends Gmail, returns success) + rationale vs traditional backend.

4. **Google Lead CRM** — embed `google-sheet-crm.png` and `crm-dashboard.png`. Feature bullets (auto capture, timestamp, business info, contact info, services, timeline, lead status, notes, follow-up workflow) + note that the CRM can be duplicated per client.

5. **Gmail Notification System** — embed `gmail-inbox.png` and `gmail-notification.png`. Bullets (instant notifications, mobile friendly, industry-specific subjects, quick response) + note on Gmail filters/labels for auto-organization.

6. **Why Google Workspace?** — comparison table with rows Hosting cost, Monthly cost, Maintenance, Client ownership, Ease of use, Learning curve, Deployment speed, Best use case; columns Google Workspace vs Traditional Backend.

7. **Engineering Decisions — Why This Architecture?** — bullets: lightweight backend, serverless, configuration-driven, separation of frontend/backend, reusable code, easily duplicated per client, future migration path to Supabase or custom backend.

8. **Scalability** — ```text``` block showing Website → Google Workspace → Multiple Clients → CRM → Calendar → Automation → Client Portal → Custom Software, with short explanation of the evolution path.

9. **Business Value** — bullets: owns website, owns data, no monthly subscriptions, low operating cost, easy maintenance, fast deployment, easy future upgrades.

10. **Technical Skills Demonstrated** — 3-column markdown table listing all 17 skills (React, TypeScript, TanStack Start, Tailwind CSS, Responsive Design, Accessibility, Google Apps Script, Google Sheets, Google Workspace, Serverless Architecture, REST-style Integration, Lead Automation, CRM Design, SEO, Component Architecture, State Management, Configuration-driven Development).

11. **Portfolio Positioning** — short paragraph + bullets (full-stack thinking, product design, business automation, cloud integration, serverless architecture, workflow automation, reusable software architecture) framing the project as a complete production-ready business solution, not just a marketing site.

### Style rules
- Match existing README voice: short paragraphs, 6–8th grade reading level, outcome-focused.
- Reuse existing formatting patterns (tables, `> Why it matters` callouts, Mermaid fenced blocks).
- No emojis in Mermaid. Relative image paths (`docs/screenshots/...`).

### Files touched
- `README.md`
- `docs/screenshots/{google-sheet-crm,crm-dashboard,apps-script-backend,gmail-notification,gmail-inbox}.png`
