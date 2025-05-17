import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"

export const metadata = {
  title: "Gallery - Ardo Thriving Hub",
  description: "View photos of Ardo Thriving Hub's facilities, programs, events, and community activities.",
}

export default function GalleryPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700">Gallery</div>
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Our Hub in Action</h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a visual tour of our facilities, programs, and community events at Ardo Thriving Hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Facilities</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the spaces where our community gathers, learns, and grows together.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Main Entrance"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Main Entrance & Welcome Area</h3>
              <p className="text-sm text-gray-600">
                Our welcoming reception area where visitors are greeted and can learn about our programs.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Community Room"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Co-working Space</h3>
              <p className="text-sm text-gray-600">
                Our largest workspace with hot desks, dedicated desks, and collaborative areas.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Private Offices"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Private Offices</h3>
              <p className="text-sm text-gray-600">
                Dedicated private office spaces for teams and established businesses.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Meeting Rooms"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Meeting Rooms</h3>
              <p className="text-sm text-gray-600">
                Professional, well-equipped spaces for meetings, presentations, and client consultations.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Lounge Area"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Lounge & Breakout Areas</h3>
              <p className="text-sm text-gray-600">
                Comfortable spaces for informal meetings, networking, or relaxation.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Event Space"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Event Space</h3>
              <p className="text-sm text-gray-600">
                Versatile area for workshops, training sessions, and community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Programs & Activities</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See our various programs in action, serving professionals and entrepreneurs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Entrepreneurship Workshop"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Entrepreneurship Workshops</h3>
              <p className="text-sm text-gray-600">
                Practical training sessions for aspiring and established entrepreneurs.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Networking Event"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Networking Events</h3>
              <p className="text-sm text-gray-600">
                Opportunities to connect with other professionals and potential collaborators.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mentorship Session"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Mentorship Program</h3>
              <p className="text-sm text-gray-600">
                One-on-one guidance from experienced professionals and business leaders.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Research Consultancy"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Research Consultancy</h3>
              <p className="text-sm text-gray-600">
                Professional research services supporting organizations and projects.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Capacity Building"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Capacity Building</h3>
              <p className="text-sm text-gray-600">
                Training programs to enhance professional skills and organizational capabilities.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Youth Employment Program"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Youth Employment Program</h3>
              <p className="text-sm text-gray-600">
                Initiatives to develop skills and create opportunities for young professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Community Events</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Highlights from our special events that bring the community together throughout the year.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Annual Business Showcase"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Annual Business Showcase</h3>
              <p className="text-sm text-gray-600">
                Our biggest event of the year celebrating the achievements of our community members.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Startup Pitch Competition"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Startup Pitch Competition</h3>
              <p className="text-sm text-gray-600">
                Entrepreneurs presenting their business ideas to potential investors and mentors.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional Development Conference"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Professional Development Conference</h3>
              <p className="text-sm text-gray-600">
                Annual gathering featuring expert speakers, workshops, and networking opportunities.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Community Partner Appreciation"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Partner Appreciation Event</h3>
              <p className="text-sm text-gray-600">
                Recognizing the organizations and individuals who support our mission.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Women in Business Summit"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Women in Business Summit</h3>
              <p className="text-sm text-gray-600">
                Celebrating and supporting female entrepreneurs and professionals.
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tech Innovation Showcase"
                width={600}
                height={400}
                className="aspect-video rounded-xl object-cover"
              />
              <h3 className="font-semibold text-primary">Tech Innovation Showcase</h3>
              <p className="text-sm text-gray-600">
                Highlighting technological innovations from our community members and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Experience Ardo Thriving Hub
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to see our hub in person? Contact us to schedule a tour or attend an upcoming event.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-primary hover:bg-primary-600 text-white">
                <Link href="/contact" className="flex items-center">
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary-50">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
