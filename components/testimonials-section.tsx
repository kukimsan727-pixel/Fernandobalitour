"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Jennifer K",
    text: "We used Fernando Bali Tours for a 3-day tour and it was incredible. The driver was very helpful and made sure we were comfortable at all times. The personalized experience made our Bali vacation special. Highly recommend their services!",
  },
  {
    name: "Olivia Christina",
    text: "We had an amazing time with Fernando Bali Tours! Our driver was wonderful and took us to amazing spots we wouldn't have found on our own. From the temples to the rice terraces, it was a trip we'll never forget!",
  },
  {
    name: "Chloe L",
    text: "Our Bali trip was made so much better with Fernando Bali Tours. We chose a customized tour, and everything was organized seamlessly. The driver was professional and friendly, and we had the best time exploring Bali's natural beauty and culture.",
  },
  {
    name: "James B",
    text: "Fernando Bali Tours exceeded our expectations! The private tour was perfect for our group, and our driver made sure we saw the top spots in Bali without any hassle. A fantastic way to enjoy the island at your own pace!",
  },
  {
    name: "Olivia G",
    text: "This was hands down the best way to see Bali! The car was comfortable, the driver was friendly, and the service was exceptional. We felt safe and well taken care of throughout the trip. Highly recommend their customized tour packages!",
  },
  {
    name: "John & Mary S",
    text: "We had an amazing 5-day tour with Fernando Bali Tours. The itinerary was fantastic, and our driver was wonderful, always on time and ready to share fascinating facts about each place we visited. One of the best travel experiences we've had!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Our Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Happy Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9</span>
            <span className="text-muted-foreground">Based on 500+ Reviews</span>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
