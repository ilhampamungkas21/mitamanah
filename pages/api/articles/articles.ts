// pages/api/articles.ts
import type { NextApiRequest, NextApiResponse } from "next";
//import { createClient } from "@/lib/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({message:"Hallo"});
  // if (req.method !== "GET") {
  //   return res.status(200).json({message:"Hallo"});
  // }
  // if (req.method !== "POST") {
  //   return res.status(405).json({ error: "Method not allowed" });
  // }

  // try {
  //   const supabase = await createClient();

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();

  //   if (!user) {
  //     return res.status(401).json({ error: "Unauthorized" });
  //   }

  //   const {
  //     title,
  //     slug,
  //     excerpt,
  //     content,
  //     image_url,
  //     seo_title,
  //     seo_description,
  //     seo_keywords,
  //     canonical_url,
  //     meta_robots,
  //   } = req.body;

  //   const { data, error } = await supabase
  //     .from("articles")
  //     .insert([
  //       {
  //         title,
  //         slug,
  //         excerpt,
  //         content,
  //         image_url,
  //         seo_title,
  //         seo_description,
  //         seo_keywords,
  //         canonical_url,
  //         meta_robots,
  //       },
  //     ])
  //     .select()
  //     .single();

  //   if (error) {
  //     return res.status(400).json({ error: error.message });
  //   }

  //   return res.status(200).json(data);
  // } catch (err) {
  //   if (err instanceof TypeError) {
  //     return res.status(500).json({ error: err.message });
  //   }
  //   return res.status(500).json({ error: err });
  // }
}
