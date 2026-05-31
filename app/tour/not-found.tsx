'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function TourNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-20">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The tour you&apos;re looking for doesn&apos;t exist. Please check the URL or browse our available tours.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild size="lg" variant="default">
            <a href="/#tours">View All Tours</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
