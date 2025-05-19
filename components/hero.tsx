import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-primary">
                Ardo Thrive Hub
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground text-base sm:text-lg md:text-xl">
                A women-led, dynamic, and comprehensive space designed to empower both individuals and businesses to
                thrive.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" variant="secondary">
                <Link href="/workspaces">Explore Workspaces</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg h-[300px] sm:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/somali women workspace.jpg"
                alt="Ardo Thriving Hub Workspace"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
