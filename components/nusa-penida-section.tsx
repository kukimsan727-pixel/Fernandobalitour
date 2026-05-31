import { TourCard } from "@/components/tour-card"

const nusaPenidaTours = [
  {
    slug: "nusa-penida-west",
    title: "Private Day Tour: West Nusa Penida Trip from Bali",
    image: "/images/nusa-penida.jpg",
    price: "55",
    rating: 5.0,
    popular: true,
  },
  {
    slug: "nusa-penida-ultimate",
    title: "Nusa Penida Ultimate Island Tour: Explore East & West",
    image: "/images/nusa-penida.jpg",
    price: "60",
    rating: 5.0,
  },
  {
    slug: "nusa-penida-snorkeling",
    title: "Nusa Penida Snorkeling Adventure: Manta Rays & Scenic Spots",
    image: "/images/nusa-penida.jpg",
    price: "75",
    rating: 5.0,
    popular: true,
  },
  {
    slug: "nusa-penida-east",
    title: "East Nusa Penida Day Trip: All-Inclusive Tour from Bali",
    image: "/images/nusa-penida.jpg",
    price: "60",
    rating: 5.0,
  },
]

export function NusaPenidaSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Nusa Penida Tour</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore the Beauty of Nusa Penida
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nusaPenidaTours.map((tour) => (
            <TourCard key={tour.slug} {...tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
