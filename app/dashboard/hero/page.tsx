import { createClient as createServerClient } from "@/lib/supabase/server";
import { HeroSettingsForm } from "@/components/hero-settings-form";

export const metadata = {
  title: "Hero Settings - MIT Amanah Admin",
};

export default async function HeroSettingsPage() {
  const supabase = await createServerClient();
  // Fetch hero settings
  const { data: heroSettings } = await supabase
    .from("hero_settings")
    .select("*")
    .limit(1)
    .single();

  return <HeroSettingsForm initialData={heroSettings} />;
}
