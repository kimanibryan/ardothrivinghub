import Image from "next/image"

export function AmenitiesHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Amenities
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                Premium Workspace Amenities
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                At Ardo Thriving Hub, we believe that a productive workspace is about more than just a desk. Our
                carefully curated amenities are designed to enhance your work experience, boost productivity, and foster
                wellbeing.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                From high-speed internet to comfortable breakout areas, we've thought of everything you need to do your
                best work in a supportive environment.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/Premium Workspace Amenities in a hub.jpg"
                alt="Ardo Thriving Hub Amenities"
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
