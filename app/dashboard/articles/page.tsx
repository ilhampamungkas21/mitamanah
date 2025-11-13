import { createClient } from "@/lib/supabase/server";
import { ArticlesManager } from "@/components/articles-manager";

export const metadata = {
  title: "Manage Articles - MIT Amanah Admin",
};

export default async function ArticlesManagerPage() {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return <ArticlesManager articles={articles || []} />;
}
