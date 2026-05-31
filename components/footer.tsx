import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary">Fernando</span>
              <span className="text-xl font-light">Bali Tour</span>
            </div>
            <p className="text-card/70 text-sm leading-relaxed mb-4">
              Your trusted partner for unforgettable Bali experiences. Private tours, cultural adventures, and personalized travel services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#tours" className="text-card/70 hover:text-primary transition-colors text-sm">
                  Our Tours
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-card/70 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-card/70 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-card/70 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-card/70 text-sm">Ubud Cultural Tour</span>
              </li>
              <li>
                <span className="text-card/70 text-sm">Temple & Spiritual Tour</span>
              </li>
              <li>
                <span className="text-card/70 text-sm">Nature & Wildlife Tour</span>
              </li>
              <li>
                <span className="text-card/70 text-sm">Nusa Penida Island Trip</span>
              </li>
              <li>
                <span className="text-card/70 text-sm">Airport Transfer Service</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="https://wa.me/6287778277999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  +62 877-7827-7999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:fernandobalitourcom6@gmail.com"
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  fernandobalitourcom6@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-card/70 text-sm">Bali, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-primary" />
                <a
                  href="https://www.instagram.com/fernando_bali_tour?igsh=MWluZjNmcHMxZTc5aw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  @fernando_bali_tour
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 mt-12 pt-8 text-center">
          <p className="text-card/50 text-sm">
            © {new Date().getFullYear()} Fernando Bali Tour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
