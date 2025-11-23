"use client";

import { useState } from "react";
import type { Gallery } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function GalleriesManager({
  galleries: initialGalleries,
}: {
  galleries: Gallery[];
}) {
  const [galleries, setGalleries] = useState<Gallery[]>(initialGalleries);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery?")) return;
    try {
      const response = await fetch(`/api/galleries/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setGalleries(galleries.filter((g) => g.id !== id));
      }
    } catch (error) {
      console.error("Error deleting gallery:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Galleries</h1>
        <Link href="/dashboard/galleries/new">
          <Button>
            <Plus size={18} className="mr-2" /> New Gallery
          </Button>
        </Link>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {galleries.length === 0 ? (
          <div className="p-6 text-center text-muted-foreground">
            No galleries yet. Create your first gallery to get started!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-secondary/50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Gambar</th>
                  <th className="px-6 py-3 text-left font-semibold">Judul</th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Deskripsi
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">Dibuat</th>
                  <th className="px-6 py-3 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {galleries.map((gallery) => (
                  <tr
                    key={gallery.id}
                    className="border-b border-border hover:bg-secondary/30 transition-colors"
                  >
                    <td>
                      <Image
                        width={100}
                        height={100}
                        alt={gallery.title}
                        src={gallery.image_url ?? ""}
                        className="w-20 h-20 object-cover m-2"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium">{gallery.title}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm line-clamp-1">
                      {gallery.description || "-"}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">
                      {new Date(gallery.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <Link
                        href={`/dashboard/galleries/${gallery.id}`}
                        className="p-2 hover:bg-secondary rounded transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(gallery.id)}
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
