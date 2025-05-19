import { Wifi, Printer, Coffee, Clock, Lock, Mail } from "lucide-react"

export function Amenities() {
  return (
    <section id="amenities" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Amenities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Essential Amenities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need for a productive and comfortable work environment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Wifi className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">High-speed Internet</h3>
            <p className="text-sm text-muted-foreground">
              Fast and reliable Wi-Fi & Ethernet connections for seamless work.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Printer className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Printing & Scanning</h3>
            <p className="text-sm text-muted-foreground">
              Modern printing and scanning facilities for all your document needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Coffee className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Refreshments</h3>
            <p className="text-sm text-muted-foreground">
              Complimentary coffee and refreshments to keep you energized.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">24/7 Access</h3>
            <p className="text-sm text-muted-foreground">
              Round-the-clock access for premium members to work on your schedule.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Lock className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Secure Storage</h3>
            <p className="text-sm text-muted-foreground">Secure lockers and storage solutions for your belongings.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Mail className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Reception Services</h3>
            <p className="text-sm text-muted-foreground">Professional reception and mail handling services.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
