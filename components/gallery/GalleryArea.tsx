import { createClient } from "@/lib/supabase/server";
import GalleryGrid from "./GalleryGrid";

export default async function GalleryArea() {
  const supabase = await createClient();

  const { data: galleries, error } = await supabase
    .from("galleries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching galleries:", error.message);
  }

  return (
    <GalleryGrid galleries={galleries ?? []} />
  );
}
