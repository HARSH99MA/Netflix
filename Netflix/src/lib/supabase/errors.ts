export class SupabaseConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SupabaseConfigError';
  }
}

export const MISSING_CREDENTIALS_MESSAGE = 
  'Supabase credentials missing. Please click the "Connect to Supabase" button in the top right corner.';

export function throwIfMissingCredentials(url?: string, key?: string) {
  if (!url || !key) {
    throw new SupabaseConfigError(MISSING_CREDENTIALS_MESSAGE);
  }
}