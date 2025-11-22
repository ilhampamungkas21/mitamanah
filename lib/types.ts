export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string | null
  author: string
  created_at: string
  updated_at: string
  // SEO fields
  seo_title?: string | null
  seo_description?: string | null
  seo_keywords?: string | null
  canonical_url?: string | null
  meta_robots?: string | null
}

export interface Gallery {
  id: string
  title: string
  description: string | null
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface HeroSettings {
  id: string
  title: string
  description: string
  subtitle: string
  cta_primary_text: string
  cta_secondary_text: string
  image_url: string | null
  updated_at: string
}
