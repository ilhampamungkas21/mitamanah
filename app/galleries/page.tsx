import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Galleries - MIT Amanah",
  description: "Explore photo galleries from MIT Amanah school events and activities.",
}

export default async function GalleriesPage() {
  const supabase = await createClient()

  const { data: galleries } = await supabase.from("galleries").select("*").order("created_at", { ascending: false })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Photo Galleries</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Explore memorable moments from MIT Amanah school events and activities
          </p>

          {!galleries || galleries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No galleries yet.</p>
              <Link href="/" className="text-primary hover:underline">
                Return to home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.map((gallery) => (
                <Link key={gallery.id} href={`/galleries/${gallery.id}`}>
                  <div className="bg-card rounded-lg border border-border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <p className="text-lg font-semibold">{gallery.title}</p>
                        {gallery.description && <p className="text-sm mt-2 line-clamp-2 px-4">{gallery.description}</p>}
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-end">
                      <p className="text-sm text-primary hover:underline">View Gallery →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
