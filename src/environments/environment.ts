// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// NOTE: Avoid committing secrets into source control. Production/runtime secrets
// should be injected at deploy time (for example by setting a window.__env object
// in an inline script before the app bundle loads). See README for details.
export const environment = {
  production: false,
  // Allow overriding at runtime via a global (optional). Falls back to localhost for dev.
  baseUrl: (window as any)?.__env?.API_BASE_URL || 'http://localhost:4002/api/auth',

  // These values should NOT contain real secrets in the repository.
  // Provide them at runtime instead (window.__env) or, better, move sensitive
  // crypto operations to the backend and rely on HTTPS.
  encryptionKey: (window as any)?.__env?.ENCRYPTION_KEY || 'JagguBoss_Secret_2025!',
  encryptionSalt: (window as any)?.__env?.ENCRYPTION_SALT || 'start-here-salt',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
