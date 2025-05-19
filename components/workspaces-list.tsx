import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function WorkspacesList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Workspace Options</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the perfect workspace solution for your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-12 py-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="/images/Hot Desks workspace solutions (1).jpg" alt="Hot Desks" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Hot Desks</h3>
              <p className="text-muted-foreground">
                Flexible, shared seating on a first-come, first-served basis. Perfect for freelancers, remote workers,
                and those who need occasional workspace access.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access during business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>High-speed internet and power outlets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to common areas and amenities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Complimentary refreshments</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <h3 className="text-2xl font-bold text-primary">Dedicated Desks</h3>
              <p className="text-muted-foreground">
                Reserved workspace for long-term use. Your personal space in our collaborative environment, available
                whenever you need it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>24/7 access to your personal desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lockable storage for your belongings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Business address and mail handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discounted meeting room access</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="/images/Dedicated Desks workspace solution in a hub (1).jpg" alt="Dedicated Desks" fill className="object-cover" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="/images/Private Office Rentals workspace solutions (1).jpg" alt="Private Offices" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Private Offices</h3>
              <p className="text-muted-foreground">
                Customizable office spaces for teams and individuals seeking privacy and focus. Your own dedicated space
                within our supportive community.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Fully furnished private office space</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>24/7 secure access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Dedicated phone line and business address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Priority booking for meeting rooms</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <h3 className="text-2xl font-bold text-primary">Meeting & Conference Rooms</h3>
              <p className="text-muted-foreground">
                Professional meeting spaces available for hourly or daily rental. Fully equipped for presentations,
                workshops, and client meetings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Various room sizes for 4-20 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>High-definition video conferencing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Interactive whiteboards and presentation tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Catering options available</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="/images/Conference and Meeting Rooms (1).jpg" alt="Meeting Rooms" fill className="object-cover" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="/images/Event Space Rentals workspace solutions (1).jpg" alt="Event Spaces" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Event Spaces</h3>
              <p className="text-muted-foreground">
                Versatile spaces for corporate and community events, workshops, and networking sessions. Host your next
                event in our inspiring environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flexible layouts for up to 100 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Professional AV equipment and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Event planning assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Catering and refreshment options</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <h3 className="text-2xl font-bold text-primary">Virtual Office</h3>
              <p className="text-muted-foreground">
                Professional business address and mail handling services without the physical workspace. Perfect for
                remote businesses and entrepreneurs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Professional business address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mail and package handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Call answering and forwarding services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discounted day passes for physical workspace</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="/images/Virtual Office Services.jpg" alt="Virtual Office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
