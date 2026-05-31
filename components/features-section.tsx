import { Users, DollarSign, Calendar, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Trusted Guides",
    description: "Experienced Bali tour experts you can rely on.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Clear, budget-friendly rates with no surprises.",
  },
  {
    icon: Calendar,
    title: "Flexible Packages",
    description: "Tours tailored to your needs and schedule.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Friendly guides and drivers for a great trip.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
