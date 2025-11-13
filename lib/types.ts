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
  created_at: string
  updated_at: string
}

export interface GalleryImage {
  id: string
  gallery_id: string
  image_url: string
  alt_text: string | null
  order_index: number
  created_at: string
}

export interface AdminUser {
  id: string
  email: string
  full_name: string | null
  created_at: string
}

export interface HeroSettings {
  id: string
  title: string
  description: string
  subtitle: string
  cta_primary_text: string
  cta_secondary_text: string
  updated_at: string
}
