import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tknhlybvwpyssfwfyknz.supabase.co';
const supabaseKey = 'your-supabase-anon-key';
export const supabase = createClient(supabaseUrl, supabaseKey);