import Image from "next/image"

export function WorkspaceGallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Workspace Gallery</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a visual tour of our workspace options.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Hot Desks workspace solutions (2).jpg"
              alt="Hot Desk Area"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Hot Desk Area</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Dedicated Desks workspace solution in a hub.jpg"
              alt="Dedicated Desks"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Dedicated Desks</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Private Office Rentals workspace solutions.jpg"
              alt="Private Office"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Private Office</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Conference and Meeting Rooms.jpg"
              alt="Meeting Room"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Conference/Meeting Room</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Event Space Rentals workspace solutions.jpg"
              alt="Event Space"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Event Space</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/Somali women and men in a conference room.jpg"
              alt="Collaborative Area"
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">Collaborative Area</p>
          </div>
        </div>
      </div>
    </section>
  )
}
