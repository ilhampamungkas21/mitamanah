import { MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-card to-primary/5 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                MA
              </div>
              <h3 className="font-bold text-lg">MIT Amanah</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building bright futures through quality education in Sragen, Jawa Tengah.
            </p>
          </div>

          {/* Location Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Location</h4>
            <div className="flex gap-3">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kebonromo, Rt. 05, Kebayanan 1<br />
                Kec. Ngrampal, Kabupaten Sragen
                <br />
                Jawa Tengah 57252
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/mitamanah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span className="inline-block">📸 Instagram @mitamanah</span>
              </a>
              <a
                href="https://tiktok.com/@mit.amanah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span className="inline-block">🎵 TikTok @mit.amanah</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MIT Amanah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
