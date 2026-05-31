"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-xl md:text-2xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-card"}`}>
              Fernando
            </span>
            <span className={`text-xl md:text-2xl font-light transition-colors ${isScrolled ? "text-foreground" : "text-card"}`}>
              Bali Tour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#tours" 
              className={`transition-colors ${isScrolled ? "text-foreground/80 hover:text-primary" : "text-card/90 hover:text-card"}`}
            >
              Tours
            </Link>
            <Link 
              href="#car-rental" 
              className={`transition-colors ${isScrolled ? "text-foreground/80 hover:text-primary" : "text-card/90 hover:text-card"}`}
            >
              Car Rental
            </Link>
            <Link 
              href="#faq" 
              className={`transition-colors ${isScrolled ? "text-foreground/80 hover:text-primary" : "text-card/90 hover:text-card"}`}
            >
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/6287778277999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Link
                href="#tours"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                href="#car-rental"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Rental
              </Link>
              <Link
                href="#faq"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <a
                href="https://wa.me/6287778277999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
