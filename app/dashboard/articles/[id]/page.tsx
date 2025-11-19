import { ArticleForm } from "@/components/article-form";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Manage Articles - MIT Amanah Admin",
};

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  return <ArticleForm article={article} />;
}
