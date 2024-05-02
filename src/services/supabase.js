import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://example.supabase.co";
const supabaseKey =
  "YOUR_KEY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
