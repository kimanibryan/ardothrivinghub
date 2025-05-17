import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Testimonials - Ardo Thriving Hub",
  description:
    "Read success stories and testimonials from community members who have benefited from Ardo Thriving Hub's programs and services.",
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700">
                Testimonials
              </div>
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Success Stories</h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from people whose lives have been positively impacted by Ardo Thriving Hub's programs and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:gap-12">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Sarah J."
                  width={150}
                  height={150}
                  className="rounded-full object-cover md:h-24 md:w-24"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Sarah J.</h3>
                    <p className="text-sm text-gray-500">Entrepreneur & Community Member</p>
                  </div>
                  <p className="text-gray-600">
                    "The workspace and mentorship at Ardo Thrive Hub have been a lifeline for me as I launched my small
                    business. The professional environment helped me focus, while the networking opportunities connected
                    me with potential clients and partners. Beyond the physical space, I've found a supportive community
                    of like-minded entrepreneurs who understand the challenges of building something from scratch. The
                    staff is incredibly knowledgeable and supportive, always ready with resources or a listening ear.
                    Thanks to Ardo, I've been able to grow my business faster than I ever thought possible."
                  </p>
                  <p className="font-medium text-accent">Program: Entrepreneurship Support</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Michael T."
                  width={150}
                  height={150}
                  className="rounded-full object-cover md:h-24 md:w-24"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Michael T.</h3>
                    <p className="text-sm text-gray-500">Remote Worker</p>
                  </div>
                  <p className="text-gray-600">
                    "I started using Ardo Thrive Hub's co-working space when working from home became too isolating. The
                    professional environment, high-speed internet, and amenities have significantly improved my
                    productivity. The flexible membership options allow me to use the space when I need it, and the
                    community events have helped me build a professional network in the area. The dedicated desks are
                    comfortable for long work sessions, and the meeting rooms are perfect for client calls. I've even
                    collaborated with other members on projects, creating new professional opportunities I wouldn't have
                    found working from home."
                  </p>
                  <p className="font-medium text-accent">Program: Co-working Space</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Elena R."
                  width={150}
                  height={150}
                  className="rounded-full object-cover md:h-24 md:w-24"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Elena R.</h3>
                    <p className="text-sm text-gray-500">Humanitarian Worker</p>
                  </div>
                  <p className="text-gray-600">
                    "As a humanitarian worker who travels frequently, finding a reliable workspace between field
                    assignments was always challenging. Ardo Thrive Hub has become my professional home base, offering
                    not just a desk but a community that understands the unique challenges of my work. The research
                    consultancy services have been invaluable for project planning, and the counseling support has
                    helped me manage the stress that comes with humanitarian work. The staff creates such a welcoming
                    environment, and I've connected with other professionals in my field. Having 24/7 access means I can
                    work according to my often irregular schedule."
                  </p>
                  <p className="font-medium text-accent">Program: Flexible Workspace & Support Services</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="David K."
                  width={150}
                  height={150}
                  className="rounded-full object-cover md:h-24 md:w-24"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">David K.</h3>
                    <p className="text-sm text-gray-500">Business Mentor</p>
                  </div>
                  <p className="text-gray-600">
                    "I started volunteering as a mentor at Ardo Thrive Hub after retiring from a 30-year career in
                    business. I was looking for a meaningful way to stay engaged with my community and continue making a
                    difference in young entrepreneurs' lives. What I found at Ardo exceeded all my expectations. The
                    staff is incredibly dedicated and passionate about their work. They provide excellent support for
                    mentors, making it easy to get involved regardless of your experience level. I primarily help with
                    business planning and strategy, and seeing the entrepreneurs' progress and growing confidence is
                    incredibly rewarding. The hub truly lives up to its name - it's a thriving center of innovation and
                    support."
                  </p>
                  <p className="font-medium text-accent">Program: Mentorship Services</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Maria and Carlos G."
                  width={150}
                  height={150}
                  className="rounded-full object-cover md:h-24 md:w-24"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Maria and Carlos G.</h3>
                    <p className="text-sm text-gray-500">Small Business Owners</p>
                  </div>
                  <p className="text-gray-600">
                    "When we decided to start our small business, we were overwhelmed by all the requirements and
                    paperwork. A friend suggested we visit Ardo Thrive Hub, and it was the best advice we could have
                    received. The business support team helped us navigate the complex process of business registration,
                    connected us with resources for funding, and provided training on financial management. They also
                    offered us a flexible office space that grew with our business - starting with hot desks and
                    eventually moving to a private office as our team expanded. The networking events helped us connect
                    with potential clients and partners. Our business has grown faster than we expected, and we credit
                    much of that success to the support we received at Ardo."
                  </p>
                  <p className="font-medium text-accent">Program: Business Incubation & Office Space</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="James W."
                  width={150}
                  height={150}
                  className="rounded-full object-cover md:h-24 md:w-24"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">James W.</h3>
                    <p className="text-sm text-gray-500">Freelance Designer</p>
                  </div>
                  <p className="text-gray-600">
                    "As a freelance graphic designer, I was looking for a professional space to meet clients and
                    collaborate with other creatives. Ardo Thrive Hub has been the perfect solution. The modern
                    facilities and professional atmosphere have elevated my brand image, and the meeting rooms provide
                    an ideal setting for client presentations. The community of other freelancers has led to numerous
                    collaborations and referrals, significantly expanding my client base. The capacity building
                    workshops have helped me develop new skills in digital marketing and business management, allowing
                    me to offer more comprehensive services to my clients. The flexible membership options mean I only
                    pay for what I need, which is perfect for the variable income of freelance work."
                  </p>
                  <p className="font-medium text-accent">Program: Freelancer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Share Your Story</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have you benefited from Ardo Thriving Hub's programs or services? We'd love to hear your story!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-primary hover:bg-primary-600 text-white">
                <Link href="/contact" className="flex items-center">
                  Submit Your Testimonial
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
