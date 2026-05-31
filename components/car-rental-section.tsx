import Image from "next/image"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const cars = [
  {
    name: "Toyota Hiace",
    price: "IDR 1,300,000",
    duration: "10 Hours",
    overtime: "10% of price per hour",
    description: "Brand-new small bus with air conditioning",
    capacity: "Recommended for 10 passengers (maximum 14 without luggage)",
    features: ["Driver & fuel included", "Mineral water provided"],
    image: "/images/hero-bali.jpg",
  },
  {
    name: "Mitsubishi XPander",
    price: "IDR 800,000",
    duration: "10 Hours",
    overtime: "10% of price per hour",
    description: "Brand-new minivan with air conditioning",
    capacity: "Recommended for 4 passengers (maximum 7 without luggage)",
    features: ["Driver & fuel included", "Mineral water provided"],
    image: "/images/hero-bali.jpg",
  },
  {
    name: "Toyota Inova",
    price: "IDR 1,000,000",
    duration: "10 Hours",
    overtime: "10% of price per hour",
    description: "Brand-new MPV with air conditioning",
    capacity: "Recommended for 6 passengers (maximum 8 without luggage)",
    features: ["Driver & fuel included", "Mineral water provided"],
    image: "/images/hero-bali.jpg",
  },
]

export function CarRentalSection() {
  return (
    <section id="car-rental" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Personalized Tour Service</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Discover Bali with Your Own Private Driver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Hire Bali Private Driver
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-foreground">{car.name}</h3>
                <p className="text-muted-foreground text-sm">Price : {car.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{car.price}</span>
                  <span className="text-muted-foreground">/ {car.duration}</span>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  Overtime: {car.overtime}
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {car.description}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {car.capacity}
                  </li>
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6287778277999?text=${encodeURIComponent(`Hello Fernando Bali Tour, I would like to book ${car.name} for private driver service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Booking via Whatsapp
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
