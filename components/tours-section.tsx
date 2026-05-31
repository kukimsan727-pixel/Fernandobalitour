import { TourCard } from "@/components/tour-card"

const oneDayTours = [
  {
    slug: "kintamani-ubud",
    title: "Kintamani Volcano and Ubud Culture Tour",
    image: "/images/mount-batur.jpg",
    price: "55",
    rating: 5.0,
    popular: true,
  },
  {
    slug: "gate-of-heaven",
    title: "Gate of Heaven & Mother Temple Spiritual Tour",
    image: "/images/temple-bali.jpg",
    price: "65",
    rating: 5.0,
    popular: true,
  },
  {
    slug: "ubud-instagram",
    title: "Bali Ubud Instagram Trip",
    image: "/images/ubud-tour.jpg",
    price: "45",
    rating: 5.0,
  },
  {
    slug: "uluwatu-kecak",
    title: "Halfday Trip - Uluwatu & Kecak Fire Dance",
    image: "/images/tanah-lot.jpg",
    price: "30",
    rating: 5.0,
  },
  {
    slug: "tanah-lot-sunset",
    title: "Halfday Taman Ayun Royal Temple + Tanah Lot Sunset Tour",
    image: "/images/tanah-lot.jpg",
    price: "30",
    rating: 5.0,
  },
  {
    slug: "best-ubud-swing",
    title: "Best of Ubud Tour with Jungle Swing",
    image: "/images/ubud-tour.jpg",
    price: "55",
    rating: 5.0,
    popular: true,
  },
  {
    slug: "lovina-dolphin",
    title: "Lovina Dolphin Watching & North Bali Tour",
    image: "/images/lovina-beach.jpg",
    price: "70",
    rating: 5.0,
    popular: true,
  },
]

export function ToursSection() {
  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Discover Bali in a Day</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fernando Bali One Day Tour Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oneDayTours.map((tour) => (
            <TourCard key={tour.slug} {...tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
