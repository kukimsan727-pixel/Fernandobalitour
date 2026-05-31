import { TourCard } from "@/components/tour-card"

const activities = [
  {
    slug: "mount-batur-jeep",
    title: "Mount Batur Jeep Sunrise",
    image: "/images/mount-batur.jpg",
    price: "40",
    rating: 5.0,
    popular: true,
  },
  {
    slug: "quad-bike-adventure",
    title: "Village Trail Quad Bike Adventure - Bali Scenic Ride",
    image: "/images/ubud-tour.jpg",
    price: "33",
    rating: 5.0,
  },
  {
    slug: "batur-hot-spring",
    title: "Batur Volcano Sunrise and Hot Spring Experience",
    image: "/images/mount-batur.jpg",
    price: "65",
    rating: 5.0,
  },
  {
    slug: "waterfall-tour",
    title: "Hidden Waterfall & Jungle Adventure in Bali",
    image: "/images/waterfall-bali.jpg",
    price: "39",
    rating: 5.0,
    popular: true,
  },
]

export function ActivitiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Best Activities Bali</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience Bali Like Never Before
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <TourCard key={activity.slug} {...activity} />
          ))}
        </div>
      </div>
    </section>
  )
}
