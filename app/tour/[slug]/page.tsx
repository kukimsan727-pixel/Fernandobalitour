"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Clock, Users, Check, X, MessageCircle, ChevronLeft, MapPin, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookingModal } from "@/components/booking-modal"
import { use } from "react"

const tours: Record<string, {
  title: string
  image: string
  price: string
  duration: string
  rating: number
  description: string
  highlights: string[]
  itinerary: string[]
  includes: string[]
  excludes: string[]
}> = {
  "kintamani-ubud": {
    title: "Kintamani Volcano and Ubud Culture Tour",
    image: "/images/mount-batur.jpg",
    price: "55",
    duration: "10 hours",
    rating: 5.0,
    description: "Experience the breathtaking views of Mount Batur volcano and immerse yourself in the rich cultural heritage of Ubud. This full-day private tour takes you through stunning landscapes, traditional villages, and iconic cultural sites.",
    highlights: [
      "Witness the majestic Mount Batur active volcano",
      "Enjoy lunch with panoramic volcano views",
      "Visit Tegallalang Rice Terraces",
      "Explore Ubud Monkey Forest",
      "Discover traditional Balinese art villages",
    ],
    itinerary: [
      "Hotel pickup (8:00 AM)",
      "Visit Celuk Village - Gold & Silver Art",
      "Batuan Temple",
      "Tegallalang Rice Terraces",
      "Kintamani Volcano View with Lunch",
      "Coffee Plantation",
      "Ubud Monkey Forest",
      "Return to hotel",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "Lunch at volcano view restaurant",
      "All entrance fees",
      "Mineral water",
      "Hotel pickup & drop-off",
    ],
    excludes: [
      "Personal expenses",
      "Tips (optional)",
      "Travel insurance",
    ],
  },
  "gate-of-heaven": {
    title: "Gate of Heaven & Mother Temple Spiritual Tour",
    image: "/images/temple-bali.jpg",
    price: "65",
    duration: "10 hours",
    rating: 5.0,
    description: "Visit the iconic Gates of Heaven at Lempuyang Temple and experience the spiritual heart of Bali at Besakih, the Mother Temple. This tour offers stunning photography opportunities and deep cultural insights.",
    highlights: [
      "Famous Gates of Heaven photo opportunity",
      "Visit Besakih - Bali's Mother Temple",
      "Tirta Gangga Water Palace",
      "Traditional Balinese village experience",
      "Stunning East Bali landscapes",
    ],
    itinerary: [
      "Early hotel pickup (5:00 AM)",
      "Lempuyang Temple - Gates of Heaven",
      "Tirta Gangga Water Palace",
      "Besakih Temple (Mother Temple)",
      "Lunch at local restaurant",
      "Return to hotel",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "All entrance fees",
      "Sarong rental",
      "Mineral water",
      "Hotel pickup & drop-off",
    ],
    excludes: [
      "Lunch",
      "Personal expenses",
      "Tips (optional)",
    ],
  },
  "ubud-instagram": {
    title: "Bali Ubud Instagram Trip",
    image: "/images/ubud-tour.jpg",
    price: "45",
    duration: "8 hours",
    rating: 5.0,
    description: "Capture the most Instagrammable spots in Ubud on this photo-focused tour. From iconic swing photos to stunning rice terrace backdrops, this tour is perfect for creating unforgettable memories.",
    highlights: [
      "Famous Bali Swing photo",
      "Tegallalang Rice Terraces",
      "Tibumana Waterfall",
      "Ubud Palace",
      "Traditional Balinese coffee tasting",
    ],
    itinerary: [
      "Hotel pickup (8:30 AM)",
      "Tegallalang Rice Terraces",
      "Bali Swing Experience",
      "Tibumana Waterfall",
      "Coffee Plantation",
      "Ubud Palace & Market",
      "Return to hotel",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "Mineral water",
      "Hotel pickup & drop-off",
    ],
    excludes: [
      "Entrance fees",
      "Lunch",
      "Swing ticket",
      "Personal expenses",
    ],
  },
  "tanah-lot-sunset": {
    title: "Tanah Lot Sunset Tour",
    image: "/images/tanah-lot.jpg",
    price: "50",
    duration: "6 hours",
    rating: 5.0,
    description: "Witness the magical sunset at Tanah Lot, one of Bali's most iconic sea temples. This tour combines cultural visits with the breathtaking experience of watching the sun set behind this legendary temple.",
    highlights: [
      "Iconic Tanah Lot Temple sunset",
      "Taman Ayun Royal Temple",
      "Traditional Balinese coffee tasting",
      "Stunning photo opportunities",
      "Cultural insights from local guide",
    ],
    itinerary: [
      "Hotel pickup (2:00 PM)",
      "Taman Ayun Temple visit",
      "Coffee Plantation",
      "Tanah Lot Temple",
      "Sunset viewing",
      "Return to hotel",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "All entrance fees",
      "Mineral water",
      "Hotel pickup & drop-off",
    ],
    excludes: [
      "Dinner",
      "Personal expenses",
      "Tips (optional)",
    ],
  },
  "nusa-penida-west": {
    title: "Nusa Penida West Tour",
    image: "/images/nusa-penida.jpg",
    price: "75",
    duration: "12 hours",
    rating: 5.0,
    description: "Explore the stunning west coast of Nusa Penida island, featuring the famous Kelingking Beach (T-Rex), Broken Beach, Angel's Billabong, and Crystal Bay. This full-day adventure offers breathtaking views and unforgettable photo spots.",
    highlights: [
      "Famous Kelingking Beach (T-Rex viewpoint)",
      "Natural infinity pool at Angel's Billabong",
      "Unique rock formation at Broken Beach",
      "Crystal clear waters at Crystal Bay",
      "Fast boat transfer included",
    ],
    itinerary: [
      "Hotel pickup (6:00 AM)",
      "Fast boat to Nusa Penida",
      "Kelingking Beach viewpoint",
      "Angel's Billabong",
      "Broken Beach",
      "Lunch",
      "Crystal Bay",
      "Return boat & hotel drop-off",
    ],
    includes: [
      "Fast boat round trip",
      "Private car in Nusa Penida",
      "English-speaking guide",
      "Lunch",
      "All entrance fees",
      "Hotel pickup & drop-off",
    ],
    excludes: [
      "Personal expenses",
      "Tips (optional)",
      "Travel insurance",
    ],
  },
  "waterfall-adventure": {
    title: "Bali Waterfall Adventure",
    image: "/images/waterfall-bali.jpg",
    price: "60",
    duration: "9 hours",
    rating: 5.0,
    description: "Discover the hidden waterfalls of Bali on this adventure tour. Visit multiple stunning waterfalls surrounded by lush jungle, swim in natural pools, and experience the natural beauty of Bali's interior.",
    highlights: [
      "Visit 3 beautiful waterfalls",
      "Swimming in natural pools",
      "Jungle trekking experience",
      "Traditional lunch",
      "Rice terrace views",
    ],
    itinerary: [
      "Hotel pickup (8:00 AM)",
      "Tibumana Waterfall",
      "Tukad Cepung Waterfall",
      "Kanto Lampo Waterfall",
      "Lunch at local restaurant",
      "Return to hotel",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "All entrance fees",
      "Lunch",
      "Mineral water",
      "Hotel pickup & drop-off",
    ],
    excludes: [
      "Personal expenses",
      "Tips (optional)",
      "Travel insurance",
    ],
  },
}

export default function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const tour = tours[slug]
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  if (!tour) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Fernando Bali Tour, I would like to book the ${tour.title} package.`
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity w-fit">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Bali, Indonesia
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {tour.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Private Tour</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Highlights</h2>
              <ul className="space-y-2">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Itinerary</h2>
              <ol className="space-y-3">
                {tour.itinerary.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Badge variant="secondary" className="shrink-0 rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <span className="text-muted-foreground pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Includes / Excludes */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">What&apos;s Included</h2>
                <ul className="space-y-2">
                  {tour.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Not Included</h2>
                <ul className="space-y-2">
                  {tour.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-muted-foreground text-sm">Price per person</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">USD {tour.price}</span>
                    <span className="text-muted-foreground">/ person</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Free cancellation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Private tour</span>
                  </div>
                </div>

                {/* PayPal Button */}
                <Button 
                  className="w-full bg-[#0070ba] hover:bg-[#003087] text-card text-lg py-6 rounded-xl"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay with PayPal
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">or</span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/6287778277999?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full text-lg py-6 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </Button>
                </a>

                <p className="text-center text-muted-foreground text-xs">
                  Contact us for group discounts and custom itineraries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tourTitle={tour.title}
        tourPrice={tour.price}
        tourImage={tour.image}
      />
    </div>
  )
}
