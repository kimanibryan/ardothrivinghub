import { Wifi, Printer, Coffee, Clock, Lock, Mail, Sofa, Zap, Utensils, Headphones, Tv, Leaf } from "lucide-react"

export function AmenitiesList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Essential Amenities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need for a productive and comfortable work environment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Wifi className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">High-speed Internet</h3>
            <p className="text-sm text-muted-foreground">
              Fast and reliable Wi-Fi & Ethernet connections with redundant systems to ensure you're always connected.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Printer className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Printing & Scanning</h3>
            <p className="text-sm text-muted-foreground">
              Modern printing and scanning facilities with color and black & white options, plus document binding
              services.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Coffee className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Refreshments</h3>
            <p className="text-sm text-muted-foreground">
              Complimentary coffee, tea, and filtered water, with premium options available for purchase.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Clock className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">24/7 Access</h3>
            <p className="text-sm text-muted-foreground">
              Round-the-clock access for premium members with secure entry systems and monitoring.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Lock className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Secure Storage</h3>
            <p className="text-sm text-muted-foreground">
              Personal lockers and secure storage solutions for your equipment and belongings.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Mail className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Reception Services</h3>
            <p className="text-sm text-muted-foreground">
              Professional reception and mail handling services with package acceptance and forwarding options.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Sofa className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Lounge Areas</h3>
            <p className="text-sm text-muted-foreground">
              Comfortable lounge and breakout areas for informal meetings, relaxation, or a change of scenery.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Zap className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Power Access</h3>
            <p className="text-sm text-muted-foreground">
              Abundant power outlets and charging stations throughout the space for all your devices.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Utensils className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Kitchen Facilities</h3>
            <p className="text-sm text-muted-foreground">
              Fully equipped kitchen with refrigerator, microwave, and dishwasher for your convenience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Headphones className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Phone Booths</h3>
            <p className="text-sm text-muted-foreground">
              Private phone booths for calls and virtual meetings without disturbance.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Tv className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">AV Equipment</h3>
            <p className="text-sm text-muted-foreground">
              State-of-the-art audiovisual equipment for presentations and video conferencing.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Leaf className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Green Spaces</h3>
            <p className="text-sm text-muted-foreground">
              Indoor plants and outdoor areas to promote wellbeing and connection with nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
