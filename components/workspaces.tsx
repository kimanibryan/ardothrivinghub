import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Workspaces() {
  return (
    <section id="workspaces" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Workspaces
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Workspace Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Flexible workspace options tailored to your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Hot Desk"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Hot Desks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Flexible, shared seating on a first-come, first-served basis. Perfect for freelancers and remote
                workers.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Dedicated Desk"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Dedicated Desks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reserved workspace for long-term use. Your personal space in our collaborative environment.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Private Office"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Private Offices</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Customizable office spaces for teams and individuals seeking privacy and focus.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Meeting Room"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Meeting Rooms</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Conference and meeting rooms available for hourly or daily rental. Fully equipped for presentations.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Event Space"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Event Spaces</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Facilities for corporate and community events, workshops, and networking sessions.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Virtual Office"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Virtual Office</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mail handling and a professional business address without the physical workspace.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
