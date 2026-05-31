import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ToursSection } from "@/components/tours-section"
import { NusaPenidaSection } from "@/components/nusa-penida-section"
import { ActivitiesSection } from "@/components/activities-section"
import { CarRentalSection } from "@/components/car-rental-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ToursSection />
        <NusaPenidaSection />
        <ActivitiesSection />
        <CarRentalSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
