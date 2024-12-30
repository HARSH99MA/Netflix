import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';
import { getSupabaseConfig } from './config';
import { SupabaseConfigError, MISSING_CREDENTIALS_MESSAGE } from './errors';

let supabaseClient: ReturnType<typeof createClient<Database>>;

export function getSupabaseClient() {
  if (!supabaseClient) {
    try {
      const config = getSupabaseConfig();
      supabaseClient = createClient<Database>(config.url, config.key);
    } catch (error) {
      if (error instanceof SupabaseConfigError) {
        console.error(MISSING_CREDENTIALS_MESSAGE);
        // Return a dummy client that will throw appropriate errors when used
        return createClient<Database>('', '');
      }
      throw error;
    }
  }
  return supabaseClient;
}