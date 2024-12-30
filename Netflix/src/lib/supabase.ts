import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Supabase credentials missing. Please click the "Connect to Supabase" button in the top right corner.'
  );
}

export const supabase = createClient<Database>(
  supabaseUrl ?? '',
  supabaseKey ?? ''
);

// Re-export the client getter for compatibility
export const getSupabaseClient = () => supabase;