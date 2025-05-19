import Image from "next/image"

export function AboutHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Story</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Ardo Thriving Hub (ATH) was founded with a vision to create a space where professionals could not only
                work but truly thrive. As a women-led organization, we understand the unique challenges faced by diverse
                entrepreneurs and have built our hub to address these needs.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our journey began with a simple idea: what if a workspace could be more than just desks and Wi-Fi? What
                if it could be a catalyst for growth, innovation, and community? Today, that idea has blossomed into a
                comprehensive ecosystem that supports professionals at every stage of their journey.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/Somali women and men in a conference room (3).jpg"
                alt="Ardo Thriving Hub Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
