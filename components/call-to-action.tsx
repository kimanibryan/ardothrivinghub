import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Thrive?</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join our community of professionals and take your business to the next level. Book a tour today and
              experience the Ardo Thriving Hub difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book a Tour</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/workspaces">Explore Workspaces</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
