'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeIcon, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-4">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn&apos;t find the tour or page you&apos;re looking for. It may have been moved or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" variant="default">
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              View All Tours
            </Link>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h3 className="font-semibold text-foreground mb-3">Popular Tours</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tour/kintamani-ubud" className="text-primary hover:underline">
                Kintamani Volcano & Ubud Culture Tour
              </Link>
            </li>
            <li>
              <Link href="/tour/gate-of-heaven" className="text-primary hover:underline">
                Gate of Heaven Spiritual Tour
              </Link>
            </li>
            <li>
              <Link href="/tour/lovina-dolphin" className="text-primary hover:underline">
                Lovina Dolphin Watching Tour
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
