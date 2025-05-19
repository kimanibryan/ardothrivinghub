import Image from "next/image"
import { Users, Briefcase, Building, GraduationCap, HeartHandshake } from "lucide-react"

export function ClientsList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Client Groups</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ardo Thriving Hub caters to a diverse clientele across various professional backgrounds.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-12 py-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">Humanitarian Workers</h3>
              </div>
              <p className="text-muted-foreground">
                We provide specialized resources and support for professionals working in humanitarian and development
                sectors. Our understanding of the unique challenges faced by these workers allows us to create an
                environment that supports their important work.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>NGO staff and field workers</li>
                <li>International development professionals</li>
                <li>Aid workers and volunteers</li>
                <li>Social impact organizations</li>
              </ul>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/Somali women and men humanitarian workers in a hub.jpg"
                alt="Humanitarian Workers"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image
              src="/images/Somali Freelancers & Remote Workers workspaces (2).jpg"
                alt="Freelancers and Remote Workers"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <div className="flex items-center gap-2">
                <Users className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">Freelancers & Remote Workers</h3>
              </div>
              <p className="text-muted-foreground">
                Our flexible workspace solutions are perfect for independent professionals and digital nomads who need a
                productive environment outside of their home. We offer the community and resources that remote work
                often lacks.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Independent consultants and contractors</li>
                <li>Digital nomads and remote employees</li>
                <li>Creative professionals</li>
                <li>Solopreneurs and small business owners</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">Startups & Entrepreneurs</h3>
              </div>
              <p className="text-muted-foreground">
                We support early-stage businesses with the resources, mentorship, and networking opportunities they need
                to grow. Our community of like-minded founders creates a collaborative environment where innovation
                thrives.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tech startups and innovative ventures</li>
                <li>Social entrepreneurs</li>
                <li>Small business owners</li>
                <li>Aspiring entrepreneurs</li>
              </ul>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/Somali Freelancers & Remote Workers workspaces.jpg"
                alt="Startups and Entrepreneurs"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image
                src="/images/Somali women and men in a conference room (2).jpg"
                alt="Corporate Professionals"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <div className="flex items-center gap-2">
                <Building className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">Corporate Professionals</h3>
              </div>
              <p className="text-muted-foreground">
                We offer satellite office solutions and meeting spaces for established businesses looking for flexible
                workspace options. Our professional environment and amenities meet the high standards expected by
                corporate clients.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Distributed teams and satellite offices</li>
                <li>Corporate innovation teams</li>
                <li>Business travelers</li>
                <li>Project-based teams</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">Students & Researchers</h3>
              </div>
              <p className="text-muted-foreground">
                We provide quiet study spaces and research resources for academic pursuits. Our environment is conducive
                to learning and intellectual growth, with opportunities to connect with professionals in various fields.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Graduate students and researchers</li>
                <li>Academic professionals</li>
                <li>Study groups and collaborative projects</li>
                <li>Continuing education participants</li>
              </ul>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/Somali Students & Researchers in a hub (1).jpg"
                alt="Students and Researchers"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
