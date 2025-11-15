import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const supabase = await createClient()

  const { data: gallery } = await supabase.from("galleries").select("*").eq("id", id).single()

  if (!gallery) {
    return { title: "Gallery Not Found" }
  }

  return {
    title: `${gallery.title} - MIT Amanah Gallery`,
    description: gallery.description || `Photo gallery from MIT Amanah`,
  }
}

export default async function GalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: gallery } = await supabase.from("galleries").select("*").eq("id", id).single()

  if (!gallery) {
    notFound()
  }

  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .eq("gallery_id", id)
    .order("order_index", { ascending: true })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/galleries" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Galleries
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">{gallery.title}</h1>
          {gallery.description && <p className="text-lg text-muted-foreground mb-12">{gallery.description}</p>}

          {!images || images.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground">No images in this gallery yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={image.image_url || "/placeholder.svg"}
                    alt={image.alt_text || gallery.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-border mt-12 pt-8">
            <Link
              href="/galleries"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View All Galleries
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
