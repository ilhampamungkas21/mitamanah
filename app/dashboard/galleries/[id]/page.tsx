import { GalleryForm } from "@/components/gallery-form";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Photo Gallery - MIT Amanah Admin",
};

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id != "new") {
    const supabase = await createClient();
    const { data: gallery } = await supabase
      .from("galleries")
      .select("*")
      .eq("id", id)
      .single();

    return <GalleryForm gallery={gallery} />;
  }

  return <GalleryForm gallery={null} />;
}
