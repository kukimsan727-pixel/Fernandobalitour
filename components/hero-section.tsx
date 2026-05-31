"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const heroTexts = ["Bali Nature", "Bali Culture", "Bali Adventure"]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bali.jpg"
          alt="Beautiful Bali rice terraces"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-card/90 mb-4 tracking-wider uppercase">
            Experience
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-card mb-6">
            <span className="block mb-2">Explore Now</span>
            <span
              className={`block text-accent transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {heroTexts[currentTextIndex]}
            </span>
          </h1>
          
          <a href="#tours">
            <Button 
              size="lg" 
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full"
            >
              Explore Now
            </Button>
          </a>

          <p className="mt-12 text-card/80 max-w-2xl mx-auto leading-relaxed text-lg">
            Indulge in a seamless Bali experience with our all-inclusive tour packages. 
            Enjoy private transportation, professional drivers, and personalized itineraries, 
            all tailored to make your Bali visit extraordinary.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-card/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-card/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
