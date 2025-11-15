// File: pages/api/articles/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = await createClient();
  const { method, query } = req;
  const id = query.id as string;

  // 🔒 Cek user login
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  switch (method) {
    case "PUT": {
      try {
        const body = req.body;
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
          .update({
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
          })
          .eq("id", id)
          .select()
          .single();

        if (error) return res.status(400).json({ error: error.message });
        return res.status(200).json(data);
      } catch (err) {
        if (err instanceof TypeError) {
          return res.status(500).json({ error: err.message });
        }
        return res.status(500).json({ error: err });
      }
    }

    case "DELETE": {
      try {
        const { error } = await supabase.from("articles").delete().eq("id", id);
        if (error) return res.status(400).json({ error: error.message });
        return res.status(200).json({ success: true });
      } catch (err) {
        if (err instanceof TypeError) {
          return res.status(500).json({ error: err.message });
        }
        return res.status(500).json({ error: err });
      }
    }

    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
