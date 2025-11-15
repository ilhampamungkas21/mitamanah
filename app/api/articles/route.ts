import { createClient } from "@/lib/supabase/server";

type CreateArticlePayload = {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  image_url?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  canonical_url?: string;
  meta_robots?: string;
};

export async function POST(req: Request) {
  const supabase = await createClient();

  // Check auth
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: CreateArticlePayload;

  try {
    body = (await req.json()) as CreateArticlePayload;
  } catch {
    return Response.json(
      { error: "Invalid or malformed JSON body" },
      { status: 400 }
    );
  }

  const {
    title,
    slug,
    excerpt,
    content,
    image_url,
    seo_title,
    seo_description,
    seo_keywords,
    canonical_url,
    meta_robots,
  } = body;

  const { data, error } = await supabase
    .from("articles")
    .insert([
      {
        title,
        slug,
        excerpt,
        content,
        image_url,
        seo_title,
        seo_description,
        seo_keywords,
        canonical_url,
        meta_robots,
      },
    ])
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json(data, { status: 200 });
}
