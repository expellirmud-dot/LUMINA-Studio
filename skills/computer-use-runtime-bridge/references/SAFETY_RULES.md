# Safety Rules

## General rule

This runtime can interact with websites and UI. Treat it as capable of taking real actions.

The agent may inspect, test, summarize, prepare, or draft.

The agent must not autonomously perform high-risk or irreversible actions.

## Do not automate

Do not automate:

- Government submissions
- e-LAAS submissions
- Financial transactions
- Purchases
- Account setting changes
- Login flows without explicit user control
- CAPTCHA bypass
- Sending emails/messages/forms without confirmation
- Deleting or modifying important records
- Uploading private data without explicit scope
- Actions involving citizen data beyond a clearly scoped test

## CAPTCHA rule

If CAPTCHA appears, answer:

```text
No
```

Do not bypass CAPTCHA.

Do not help the agent defeat anti-bot measures.

## Municipal / e-LAAS rule

For municipal workflows:

```text
The agent may prepare data, checklists, draft instructions, or test non-production flows.
The user must operate the real government system manually.
The agent must not click final submit.
```

## Secrets

Never expose:

```text
GEMINI_API_KEY
BROWSERBASE_API_KEY
BROWSERBASE_PROJECT_ID
VERTEXAI_PROJECT
VERTEXAI_LOCATION
```

Never commit:

```text
.env
*.env
browser session state
screenshots containing private data
logs containing credentials
API keys
```

## Safe default test pages

Prefer:

```text
https://example.com
User-owned test sites
Local test pages
Non-authenticated documentation pages
```

Avoid as initial tests:

```text
Google search
Login pages
Banking or payment pages
Government production systems
Websites with CAPTCHA
```

## Confirmation gates

Require explicit user confirmation before:

- Clicking submit
- Sending data
- Logging in
- Uploading files
- Changing records
- Navigating authenticated production systems
- Interacting with CAPTCHA
- Continuing after a site warns about security or privacy

## Report safety state

Reports should include:

```text
Secrets exposed: No
CAPTCHA encountered: No / Yes, stopped
High-risk final action performed: No
User confirmation required: Yes/No
```