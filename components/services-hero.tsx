import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Services
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                Comprehensive Solutions for Growth
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                At Ardo Thriving Hub, we offer a range of professional services designed to support your journey from
                idea to impact. Our holistic approach addresses the diverse needs of entrepreneurs, freelancers, and
                organizations.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Whether you're looking for workspace solutions, research support, capacity building, or counseling
                services, our team of experts is here to help you thrive.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/visual 1.jpg"
                alt="Ardo Thriving Hub Services"
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
