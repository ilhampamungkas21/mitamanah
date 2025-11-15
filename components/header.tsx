"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap size={20} />
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              MIT Amanah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center">
            <Link
              href="/"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium rounded-md hover:bg-muted"
            >
              Home
            </Link>
            <Link
              href="#articles"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium rounded-md hover:bg-muted"
            >
              Articles
            </Link>
            <Link
              href="#gallery"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium rounded-md hover:bg-muted"
            >
              Gallery
            </Link>
            <a
              href="https://instagram.com/mitamanah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium rounded-md hover:bg-muted"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@mit.amanah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium rounded-md hover:bg-muted"
            >
              TikTok
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4 flex flex-col gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted block"
            >
              Home
            </Link>
            <Link
              href="#articles"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted block"
            >
              Articles
            </Link>
            <Link
              href="#gallery"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted block"
            >
              Gallery
            </Link>
            <a
              href="https://instagram.com/mitamanah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted block"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@mit.amanah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted block"
            >
              TikTok
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
