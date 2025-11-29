import { supabaseServer } from "./server";

export async function getCurrentUser() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getUser();
  return data.user;
}
