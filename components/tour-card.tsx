import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TourCardProps {
  slug: string
  title: string
  image: string
  price: string
  currency?: string
  rating: number
  location?: string
  popular?: boolean
}

export function TourCard({
  slug,
  title,
  image,
  price,
  currency = "USD",
  rating,
  location = "Bali, Indonesia",
  popular = false,
}: TourCardProps) {
  return (
    <Link href={`/tour/${slug}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {popular && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
              Popular
            </Badge>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-semibold">{rating}</span>
            <span className="text-muted-foreground text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary">{currency} {price}</span>
            <span className="text-muted-foreground text-sm">/ person</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
