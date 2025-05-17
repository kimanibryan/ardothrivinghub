import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Ardo Thriving Hub - Our Mission & Vision",
  description:
    "Learn about Ardo Thriving Hub's mission, vision, history, and the dedicated team working to support our community.",
}

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Our Story & Mission</h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ardo Thrive Hub (ATH) is a women-led, dynamic, and comprehensive space designed to empower both
                individuals and businesses to thrive. Conveniently located, ATH offers a professional, welcoming, and
                fully equipped environment tailored to meet the diverse needs of its members.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ardo Thriving Hub Community Center"
                width={600}
                height={400}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Why We Exist</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ATH's mission is to empower entrepreneurs, freelancers, and remote workers by fostering a collaborative
                and productive environment.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <div className="rounded-lg border border-primary-100 bg-white p-8 shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                To create an ecosystem where professionals can access not just physical resources but also the
                knowledge, connections, and support needed to accelerate business growth and personal development.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ardo Thrive Hub transforms workspaces into growth ecosystems where professionals flourish. Beyond desks
                and amenities, we provide the mentorship and connections that turn ambitions into achievements. Our
                commitment to diverse voices, especially female entrepreneurs, sets us apart. At ATH, we don't just
                offer space; we create opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Values</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These principles guide everything we do at Ardo Thriving Hub.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z" />
                  <circle cx="12" cy="8" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Community First</h3>
              <p className="text-center text-gray-500">
                We listen to and design our programs based on real community needs and feedback.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Inclusivity</h3>
              <p className="text-center text-gray-500">
                We welcome people of all backgrounds, abilities, and ages to participate in our hub activities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                  <line x1="16" x2="2" y1="8" y2="22" />
                  <line x1="17.5" x2="9" y1="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Empowerment</h3>
              <p className="text-center text-gray-500">
                We focus on building skills and confidence to help people achieve independence and success.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Evidence-Based</h3>
              <p className="text-center text-gray-500">
                Our programs and services are informed by research and proven practices in community support.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-center text-gray-500">
                We strive to make our services and programs accessible to everyone in our community.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-center text-gray-500">
                We partner with local organizations, businesses, and government to maximize our impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Our History"
              width={400}
              height={400}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our History</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Ardo Thriving Hub began as a grassroots initiative by a small group of dedicated community members who
                saw a need for more accessible resources and support services in our area.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary-600"
                    >
                      <path d="M12 2L2 7l10 5l10-5l-10-5z" />
                      <path d="M2 17l10 5l10-5" />
                      <path d="M2 12l10 5l10-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">2015: Foundation</h4>
                    <p className="text-sm text-gray-500">
                      Established as a community meeting space with limited programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary-600"
                    >
                      <path d="M12 2L2 7l10 5l10-5l-10-5z" />
                      <path d="M2 17l10 5l10-5" />
                      <path d="M2 12l10 5l10-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">2018: Expansion</h4>
                    <p className="text-sm text-gray-500">
                      Moved to our current location and expanded our service offerings.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary-600"
                    >
                      <path d="M12 2L2 7l10 5l10-5l-10-5z" />
                      <path d="M2 17l10 5l10-5" />
                      <path d="M2 12l10 5l10-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">2020: Innovation</h4>
                    <p className="text-sm text-gray-500">
                      Launched virtual programs during the pandemic to continue supporting our community.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary-600"
                    >
                      <path d="M12 2L2 7l10 5l10-5l-10-5z" />
                      <path d="M2 17l10 5l10-5" />
                      <path d="M2 12l10 5l10-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Today</h4>
                    <p className="text-sm text-gray-500">
                      A thriving community center with comprehensive programs and services for all ages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet The People Behind Ardo</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our dedicated staff and volunteers work tirelessly to make Ardo Thriving Hub a welcoming and supportive
                space.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sarah Johnson"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Executive Director</p>
                <p className="mt-2 text-gray-500">
                  With over 15 years of experience in community development, Sarah leads our team with passion and
                  vision.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Michael Rodriguez"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-sm text-gray-500">Program Director</p>
                <p className="mt-2 text-gray-500">
                  Michael oversees all of our programs, ensuring they meet the highest standards and community needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Aisha Patel"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Aisha Patel</h3>
                <p className="text-sm text-gray-500">Community Outreach Coordinator</p>
                <p className="mt-2 text-gray-500">
                  Aisha builds strong relationships with community members and partner organizations.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="David Wilson"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">David Wilson</h3>
                <p className="text-sm text-gray-500">Youth Services Manager</p>
                <p className="mt-2 text-gray-500">
                  David has dedicated his career to mentoring and supporting young people in our community.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Elena Kim"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Elena Kim</h3>
                <p className="text-sm text-gray-500">Health & Wellness Coordinator</p>
                <p className="mt-2 text-gray-500">
                  A certified wellness coach, Elena develops programs that promote physical and mental wellbeing.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="James Thompson"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">James Thompson</h3>
                <p className="text-sm text-gray-500">Family Support Specialist</p>
                <p className="mt-2 text-gray-500">
                  James provides resources and guidance to families facing challenges in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways to get involved with Ardo Thriving Hub, from volunteering to participating in
                programs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-primary hover:bg-primary-600">
                <Link href="/services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
