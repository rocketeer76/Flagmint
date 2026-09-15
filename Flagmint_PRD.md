# Flagmint — Product Requirements Document

**Tagline:** Feature flags for real teams.

## Product Summary
Flagmint is a lightweight feature-flag management system for developers and product teams.

## Core Use Cases
- Enable or disable a feature globally
- Override by user
- Override by organization
- Separate environments
- Progressive rollout

## Required Screens
- Sign in
- Dashboard
- Feature list
- New feature
- Feature detail
- Overrides
- Audit log
- API / SDK
- Settings
- Mobile views

## Feature Fields
Name, key, description, default state, created by.

## Environments
Development, staging, production.

## Rule Targets
All users, individual user, organization, environment, percentage rollout.

## Evaluation Order
1. User override
2. Organization override
3. Environment rule
4. Global rule
5. Default

## API
Example: `GET /api/flags/new-checkout`

Response:
```json
{
  "key": "new-checkout",
  "enabled": true
}
```

## API Keys
Generate once, show secret once, store only hash, support environment scope and revocation.

## Audit Log
Record flag created, enabled, disabled, override added, rollout changed.

## Data Model
- `users`
- `feature_flags`
- `environments`
- `feature_rules`
- `feature_overrides`
- `api_keys`
- `audit_events`

## Performance
Flag evaluation should be fast and deterministic. Caching is optional for MVP.

## Testing
### Vitest
Rule precedence, percentage rollout helper, API key hashing, validation.

### Playwright
Create flag, toggle flag, add override, verify API result, review audit log.

## Technology Baseline
Astro, SolidJS, TypeScript, Vite, Node.js, Tailwind CSS, Neon Postgres, Neon Auth, direct SQL, Zod, Vitest, Playwright, ESLint, Prettier, Sentry, GitHub Actions, Netlify, Cloudflare DNS.

## MVP Acceptance Criteria
- Create flag.
- Toggle flag.
- Environment support works.
- User and organization overrides work.
- API evaluation works.
- Audit log is complete.
- API keys can be created and revoked.
