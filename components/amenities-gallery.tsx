import Image from "next/image"

export function AmenitiesGallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Space</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a visual tour of our premium amenities and workspace environment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Reception area.jpg"
              alt="Reception Area"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Reception Area</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Premium Workspace Amenities in a hub (3).jpg"
              alt="Coworking Space"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Coworking Space</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Conference and Meeting Rooms (2).jpg"
              alt="Meeting Room"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Meeting Room</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Lounge Area.jpg"
              alt="Lounge Area"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Lounge Area</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Kitchen facilities area in a hub.jpg"
              alt="Kitchen Facilities"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Kitchen Facilities</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Premium Workspace Amenities in a hub (1).jpg"
              alt="Phone Booths"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Phone Booths</p>
          </div>
        </div>
      </div>
    </section>
  )
}
