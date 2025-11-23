"use client";

import type React from "react";
import { useState } from "react";
import type { Gallery } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import ImageForm from "./common/image-form";
import { useRouter } from "next/navigation";

export function GalleryForm({ gallery }: { gallery: Gallery | null }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: gallery?.title ?? "",
    description: gallery?.description ?? "",
    image_url: gallery?.image_url ?? "",
  });

  const method = gallery ? "PUT" : "POST";

  // =============== SUBMIT KE BACKEND ===============
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/galleries", {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to create gallery");

      const gallery = await response.json();
      toast.info(`Berhasil simpan ${gallery.title}`);
      router.replace("/dashboard/galleries");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Edit Gallery</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* TITLE */}
        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            required
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Gallery title"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Gallery description"
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
            rows={3}
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="space-y-1">
          <ImageForm
            defaultValue={formData.image_url}
            onCallback={(url) => setFormData({ ...formData, image_url: url })}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive text-destructive rounded text-sm">
            {error}
          </div>
        )}

        {/* BUTTON */}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Simpan"}
        </Button>
      </form>
    </div>
  );
}
