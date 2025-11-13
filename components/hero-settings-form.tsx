"use client"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"
import type { HeroSettings } from "@/lib/types"
import { AlertCircle, CheckCircle } from "lucide-react"

interface HeroSettingsFormProps {
  initialData: HeroSettings | null
}

export function HeroSettingsForm({ initialData }: HeroSettingsFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState({
    title: initialData?.title || "Empowering Minds, Shaping Futures",
    description: initialData?.description || "",
    subtitle: initialData?.subtitle || "Welcome to MIT Amanah",
    cta_primary_text: initialData?.cta_primary_text || "Explore Articles",
    cta_secondary_text: initialData?.cta_secondary_text || "View Gallery",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const supabase = await createClient()

      const { error } = await supabase.from("hero_settings").update(formData).eq("id", initialData?.id)

      if (error) {
        setMessage({ type: "error", text: `Error: ${error.message}` })
      } else {
        setMessage({ type: "success", text: "Hero settings updated successfully!" })
      }
    } catch (error) {
      console.log(error)
      setMessage({ type: "error", text: "Failed to update hero settings" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section Settings</CardTitle>
        <CardDescription>Customize the main banner content on your homepage</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {message && (
            <div
              className={`flex items-center gap-3 p-4 rounded-lg ${message.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
            >
              {message.type === "success" ? (
                <CheckCircle className="text-green-600" size={20} />
              ) : (
                <AlertCircle className="text-red-600" size={20} />
              )}
              <span className={message.type === "success" ? "text-green-700" : "text-red-700"}>{message.text}</span>
            </div>
          )}

          <div>
            <label className="text-sm font-medium mb-2 block">Main Title</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter main title"
              className="bg-background border-border"
            />
            <p className="text-xs text-muted-foreground mt-1">Last word will be highlighted in color</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Subtitle</label>
            <Input
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="Enter subtitle"
              className="bg-background border-border"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Description</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter main description"
              rows={4}
              className="bg-background border-border"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Primary CTA Button Text</label>
              <Input
                name="cta_primary_text"
                value={formData.cta_primary_text}
                onChange={handleChange}
                placeholder="Button text"
                className="bg-background border-border"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Secondary CTA Button Text</label>
              <Input
                name="cta_secondary_text"
                value={formData.cta_secondary_text}
                onChange={handleChange}
                placeholder="Button text"
                className="bg-background border-border"
              />
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
            {isLoading ? "Saving..." : "Save Hero Settings"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
