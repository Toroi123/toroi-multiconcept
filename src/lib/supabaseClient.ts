import { createClient } from '@supabase/supabase-js';

// These variables pull from your .env.local (locally) or Vercel Settings (live)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Safety check to prevent the app from crashing if keys are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing! Check your .env.local or Vercel settings.");
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);