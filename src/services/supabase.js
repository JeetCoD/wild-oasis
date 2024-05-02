import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wnbcdxihtfyqffzpvdgo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduYmNkeGlodGZ5cWZmenB2ZGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjgyNzcsImV4cCI6MjAyMTQ0NDI3N30.UaUD3fUmXy9fXC-xFxSMwh47n-J7LLyyyNKAig0W6BQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
