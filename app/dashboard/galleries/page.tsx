import { createClient } from "@/lib/supabase/server"
import { GalleriesManager } from "@/components/galleries-manager"

export const metadata = {
  title: "Manage Galleries - MIT Amanah Admin",
}

export default async function GalleriesManagerPage() {
  const supabase = await createClient()

  const { data: galleries } = await supabase.from("galleries").select("*").order("created_at", { ascending: false })

  return (
    <GalleriesManager galleries={galleries || []} />
  )
}
