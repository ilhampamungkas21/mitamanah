"use client";

import { useState } from "react";
import type { Article } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2 } from "lucide-react";
import Link from "next/link"
import Image from "next/image"

export function ArticlesManager({
  articles: initialArticles,
}: {
  articles: Article[];
}) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  // const [editingArticle, setEditingArticle] = useState<Article | null>(null)

  // const handleArticleAdded = (newArticle: Article) => {
  //   setArticles([newArticle, ...articles])
  //   setShowForm(false)
  //   setEditingArticle(null)
  // }

  // const handleArticleUpdated = (updatedArticle: Article) => {
  //   setArticles(articles.map((a) => (a.id === updatedArticle.id ? updatedArticle : a)))
  //   setEditingArticle(null)
  // }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const response = await fetch(`/api/articles/${id}`, { method: "DELETE" });
      if (response.ok) {
        setArticles(articles.filter((a) => a.id !== id));
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Article</h1>
        <Link href="/dashboard/articles/new">
          <Button >{"Tambah Article"}</Button>
        </Link>
      </div>

      {/* {(showForm || editingArticle) && (
        <ArticleForm
          article={editingArticle || undefined}
          onSuccess={(article) => (editingArticle ? handleArticleUpdated(article) : handleArticleAdded(article))}
          onCancel={() => {
            setShowForm(false)
            setEditingArticle(null)
          }}
        />
      )} */}

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {articles.length === 0 ? (
          <div className="p-6 text-center text-muted-foreground">
            No articles yet. Create your first article to get started!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-secondary/50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Gambar</th>
                  <th className="px-6 py-3 text-left font-semibold">Title</th>
                  <th className="px-6 py-3 text-left font-semibold">Deskripsi</th>
                  <th className="px-6 py-3 text-left font-semibold">Dibuat</th>
                  <th className="px-6 py-3 text-left font-semibold">Diupdate</th>
                  <th className="px-6 py-3 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-b border-border hover:bg-secondary/30 transition-colors"
                  >
                      <td>
                        <Image width={100} height={100} alt={article.title} src={article.image_url??''} className="w-20 h-20 object-cover m-2" />
                      </td>
                    <td className="px-6 py-4 font-medium">{article.title}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm line-clamp-2">
                      {article.excerpt}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">
                      {new Date(article.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">
                      {new Date(article.updated_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <Link href={`/dashboard/articles/${article?.id}`}>
                      <button
                        // onClick={() => setEditingArticle(article)}
                        className="p-2 hover:bg-secondary rounded transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      </Link>
                      
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="p-2 hover:bg-destructive/20 text-destructive rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
