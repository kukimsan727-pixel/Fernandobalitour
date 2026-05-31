import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ubud-tour.jpg"
          alt="Bali scenery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6 text-balance">
          Make Your Bali Trip Unforgettable with Our Personalized Tour Services
        </h2>
        <p className="text-card/80 mb-8 max-w-2xl mx-auto text-lg">
          Join thousands of happy travelers and discover the magic of Bali with Fernando Bali Tour.
        </p>
        <a
          href="https://wa.me/6287778277999?text=Hello%20Fernando%20Bali%20Tour,%20I%20would%20like%20to%20plan%20my%20Bali%20trip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Plan Your Journey
          </Button>
        </a>
      </div>
    </section>
  )
}
