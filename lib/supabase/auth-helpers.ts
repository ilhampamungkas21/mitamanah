import { createClient } from "./server"

export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function checkIsAdmin(userId: string) {
  const supabase = await createClient()
  const { data } = await supabase.from("admin_users").select("id").eq("id", userId).maybeSingle()
  return !!data
}

export async function logout() {
  const supabase = await createClient()
  return await supabase.auth.signOut()
}
