import { throwIfMissingCredentials } from './errors';

export interface SupabaseConfig {
  url: string;
  key: string;
}

export function getSupabaseConfig(): SupabaseConfig {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Validate credentials before returning config
  throwIfMissingCredentials(url, key);

  return {
    url: url!,
    key: key!,
  };
}