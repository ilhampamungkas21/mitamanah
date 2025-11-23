"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { toast } from "sonner";

interface ImageFormProps {
  onCallback: (image_url: string) => void;
  defaultValue?: string; // opsional, untuk edit form
}

export default function ImageForm({ onCallback, defaultValue }: ImageFormProps) {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(defaultValue ?? null);

  // =============== CLOUDINARY UPLOAD ===============
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD!);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploaded = await res.json();

      if (!uploaded.secure_url) throw new Error("Upload failed");

      setImageUrl(uploaded.secure_url);
      onCallback(uploaded.secure_url); // kirim ke parent
      toast.success("Image uploaded!");
    } catch (err) {
      console.log(err);
      toast.error("Upload gagal");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Label>Upload Image *</Label>

      <Input type="file" accept="image/*" onChange={handleUpload} />

      {uploading && (
        <p className="text-sm text-muted-foreground">Uploading...</p>
      )}

      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Uploaded"
          width={300}
          height={300}
          className="w-50 h-50 rounded-md mt-2 object-cover border"
        />
      )}
    </>
  );
}
