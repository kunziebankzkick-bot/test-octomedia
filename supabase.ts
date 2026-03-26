import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

function createSafeClient(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'undefined' || supabaseAnonKey === 'undefined') {
    console.warn('[Supabase] Environment variables missing. Using stub client.');
    return {
      from: () => ({
        select: () => ({
          eq: () => ({
            maybeSingle: () => Promise.resolve({ data: null, error: null }),
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
      }),
    } as unknown as SupabaseClient;
  }
  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (e) {
    console.warn('[Supabase] Failed to initialise client:', e);
    return {
      from: () => ({
        select: () => ({
          eq: () => ({
            maybeSingle: () => Promise.resolve({ data: null, error: null }),
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
      }),
    } as unknown as SupabaseClient;
  }
}

export const supabase = createSafeClient();

export interface CaseStudy {
  id: string;
  brand: string;
  geo: string;
  platform: string;
  campaign_length: string | null;
  influencer_count: number;
  budget: number;
  impressions: number | null;
  clicks: number | null;
  registrations: number;
  ftds: number;
  cpa: number;
  reg_to_ftd_rate: number;
  strategy: string;
  results: string;
  created_at: string;
}
