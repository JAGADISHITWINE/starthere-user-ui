Security and maintenance notes — starthere-user-ui

What I changed in this pass

- Removed the hard-coded encryption secret from `src/environments/environment.ts` and `environment.prod.ts`.
  - The environment files now support runtime overrides via a `window.__env` global (set this in a small inline script before loading the bundle in production).
  - Rationale: front-end source is not a safe place for secrets. Keep secrets on the server or inject them at deploy/runtime.

- Added `dompurify` (dependency) and used it to sanitize HTML loaded from the server before binding with `[innerHTML]`.
  - This prevents XSS when rendering rich post content. Install dependencies (`npm install`) to pick up `dompurify`.

- Centralized token handling with a new `TokenService`:
  - Decoding a token, checking expiry, reading/setting/clearing token storage are now centralized.
  - Replaced many manual `sessionStorage.getItem('token')` + `atob` usages with `TokenService`.
  - `Auth` service now uses `TokenService` internally.

- Minor hardening and defensive code:
  - `EncryptionService` now gracefully falls back if no runtime secret is provided (it will not throw runtime errors). Note: client-side encryption with a repo-stored key is insecure — move important cryptography to the server.

Why these changes

- Secrets in the repository are a critical risk. Even a development key should not be stored in VCS.
- HTML coming from backend should always be sanitized before rendering in the client.
- Token handling scattered across the codebase is error-prone; centralizing it reduces bugs and improves consistency.

Recommended next steps (not implemented automatically)

1. Backend coordination: stop expecting client-side AES encryption with a shared repo secret. Use HTTPS and perform encryption/validation server-side.
2. Move authentication tokens to HttpOnly, Secure cookies where possible. This prevents JS access (mitigates XSS token theft). Switching to cookie-based auth requires backend changes.
3. Run `npm install` and then run `npm run lint` and `npm run build` in `starthere-user-ui` to pick up and validate the new dependency and code changes.
4. Replace any remaining use of `any` with concrete types over time. Add unit tests that cover auth flows.
5. Consider Content Security Policy (CSP) headers served by the backend to further reduce injection risk.

How to inject runtime env values (example)

Include a small script in your `index.html` (on the server-side template) before the app bundle script:

<script>
  window.__env = {
    API_BASE_URL: 'https://api.example.com',
    ENCRYPTION_KEY: '... (if you must) ...',
    ENCRYPTION_SALT: 'start-here-salt'
  };
</script>

Note: prefer not to set encryption keys here — prefer server-side keying.

Quick verification

- Install dependencies: `cd starthere-user-ui && npm install`
- Build: `npm run build`
- Run lint: `npm run lint`

If you want, I can:
- Run the install & build here and fix any type errors that appear, or
- Continue replacing remaining `any` usages and add small unit tests for `TokenService` and `EncryptionService`.

If you'd like me to proceed with the build & fixes now, tell me and I will run the install and build steps and iterate on any errors.
