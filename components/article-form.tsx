"use client";

import type React from "react";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Article } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "sonner";

interface ReactQuillProps {
  theme?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
}) as unknown as React.ComponentType<ReactQuillProps>;

const generateSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // hapus karakter aneh
    .replace(/\s+/g, "-") // spasi → hyphen
    .replace(/-+/g, "-"); // multiple hyphen → single

export function ArticleForm({
  article,
  onSuccess,
  onCancel,
}: {
  article?: Article;
  onSuccess?: (article: Article) => void;
  onCancel?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: article?.title || "",
    category:"",
    slug: article?.slug || "",
    excerpt: article?.excerpt || "",
    content: article?.content || "",
    image_url: article?.image_url || "",
    // SEO fields
    seo_title: article?.seo_title || "",
    seo_description: article?.seo_description || "",
    seo_keywords: article?.seo_keywords || "",
    canonical_url: article?.canonical_url || "",
    meta_robots: "index, follow",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const method = article ? "PUT" : "POST";
      const url = article ? `/api/articles/${article.id}` : "/api/articles";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save article");
      const savedArticle = await response.json();
      onSuccess!(savedArticle);
      toast.info("Berhasil disimpan");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">
        {article ? "Edit Article" : "Create New Article"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Label className="text-lg mb-1" htmlFor="title">
              Judul Artikel *
            </Label>
            <Input
              id="title"
              required
              value={formData.title}
              onChange={(e) => {
                const newTitle = e.target.value;
                const autoSlug = generateSlug(newTitle);

                setFormData((prev) => ({
                  ...prev,
                  title: newTitle,
                  slug:
                    // hanya update slug jika user belum mengedit
                    prev.slug === "" || prev.slug === generateSlug(prev.title)
                      ? autoSlug
                      : prev.slug,
                  seo_title: newTitle,
                  canonical_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${
                    prev.slug === "" || prev.slug === generateSlug(prev.title)
                      ? autoSlug
                      : prev.slug
                  }`,
                }));
              }}
              placeholder="Article title"
            />
          </div>
          {/* <div>
            <Label className="text-lg mb-1" htmlFor="slug">
              Slug
            </Label>
            <Input
              id="slug"
              readOnly
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              placeholder="article-slug"
            />
          </div> */}
        </div>

        <div>
          <Label className="text-lg mb-1" htmlFor="excerpt">
            Ringkasan Content *
          </Label>
          <textarea
            id="excerpt"
            required
            value={formData.excerpt}
            onChange={(e) =>
              setFormData({
                ...formData,
                excerpt: e.target.value,
                seo_description: e.target.value,
              })
            }
            placeholder="Brief summary of the article"
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            rows={2}
          />
        </div>

        <div>
          <Label className="text-lg mb-2" htmlFor="content">
            Content *
          </Label>
          <div className="rounded-md overflow-hidden border border-border bg-background">
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={(value: string) =>
                setFormData({ ...formData, content: value })
              }
              placeholder="Write your article content here..."
            />
          </div>
        </div>

        <div>
          <Label className="text-lg mb-1" htmlFor="image_url">
            Image URL
          </Label>
          <Input
            id="image_url"
            type="url"
            value={formData.image_url || ""}
            onChange={(e) =>
              setFormData({ ...formData, image_url: e.target.value })
            }
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* SEO Section */}
        <div className="border-t border-border pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-lg mb-1" htmlFor="seo_keywords">
                SEO Keywords
              </Label>
              <Input
                id="seo_keywords"
                value={formData.seo_keywords}
                onChange={(e) =>
                  setFormData({ ...formData, seo_keywords: e.target.value })
                }
                placeholder="comma, separated, keywords"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive text-destructive rounded text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Article"}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
