"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Instagram, Music } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import type { HeroSettings } from "@/lib/types"

export function HeroSection() {
  const [heroData, setHeroData] = useState<HeroSettings | null>(null)
  const [, setIsLoading] = useState(true)
  const [, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHeroSettings = async () => {
      try {
        const supabase = await createClient()
        const { data, error } = await supabase.from("hero_settings").select("*").limit(1).single()

        if (error) {
          // Check if error is due to missing table
          if (error.message.includes("could not find the table")) {
            console.log("[v0] Hero settings table not yet created. Using defaults.")
            setError("Table not created")
          } else {
            console.error("[v0] Error fetching hero settings:", error.message)
            setError(error.message)
          }
        } else {
          setHeroData(data)
          setError(null)
        }
      } catch (error) {
        console.error("[v0] Failed to fetch hero settings:", error)
        setError("Failed to fetch settings")
      } finally {
        setIsLoading(false)
      }
    }

    fetchHeroSettings()
  }, [])

  const title = heroData?.title || "Empowering Minds, Shaping Futures"
  const description =
    heroData?.description ||
    "Quality education in Kebonromo, Sragen. Discover our innovations, read inspiring stories, and explore our vibrant school community."
  const subtitle = heroData?.subtitle || "Welcome to MIT Amanah"
  const ctaPrimaryText = heroData?.cta_primary_text || "Explore Articles"
  const ctaSecondaryText = heroData?.cta_secondary_text || "View Gallery"

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
          <span className="text-sm font-semibold text-primary">{subtitle}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {title.split(" ").pop()}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="group rounded-full bg-primary hover:bg-primary/90 text-base">
            {ctaPrimaryText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button size="lg" variant="outline" className="group rounded-full text-base bg-transparent">
            {ctaSecondaryText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>

        {/* Location and Social Info */}
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center md:items-start">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Our Location</p>
                <p className="text-sm font-medium">Kebonromo, Rt. 05, Kebayanan 1</p>
                <p className="text-sm font-medium">Kec. Ngrampal, Sragen 57252</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/mitamanah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="text-primary" size={24} />
              </a>
              <a
                href="https://tiktok.com/@mit.amanah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <Music className="text-primary" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
