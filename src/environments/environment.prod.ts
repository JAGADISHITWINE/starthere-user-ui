// Production environment: avoid hard-coding secrets. Inject runtime values instead.
export const environment = {
  production: true,
  baseUrl: (window as any)?.__env?.API_BASE_URL || '',
  encryptionKey: (window as any)?.__env?.ENCRYPTION_KEY || '',
  encryptionSalt: (window as any)?.__env?.ENCRYPTION_SALT || 'start-here-salt',
};
