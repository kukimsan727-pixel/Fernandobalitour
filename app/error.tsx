'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[v0] Error caught by boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-2">
            We encountered an unexpected error while loading this page.
          </p>
          {error.message && (
            <p className="text-sm text-muted-foreground bg-muted p-3 rounded mt-4 font-mono">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} size="lg" variant="default">
            Try again
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
