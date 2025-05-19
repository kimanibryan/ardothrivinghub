import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedWorkspaces() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Workspaces
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible Workspace Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of workspace options tailored to your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/images/Premium Workspace Amenities in a hub (2).jpg"
                alt="Hot Desk"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Hot Desks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Flexible, shared seating on a first-come, first-served basis.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/images/Dedicated Desks workspace solution in a hub (2).jpg"
                alt="Dedicated Desk"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Dedicated Desks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reserved workspace for long-term use in our collaborative environment.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/images/Private Office Rentals workspace solutions (2).jpg"
                alt="Private Office"
                width={500}
                height={300}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Private Offices</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Customizable office spaces for teams and individuals seeking privacy.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/workspaces">View All Workspaces</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
