import { Users, Briefcase, Building, GraduationCap, HeartHandshake } from "lucide-react"

export function Clients() {
  return (
    <section id="clients" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Clients
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Serve</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ardo Thriving Hub caters to a diverse clientele across various professional backgrounds.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <HeartHandshake className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Humanitarian Workers</h3>
            <p className="text-sm text-muted-foreground">
              Supporting those who work in humanitarian and development sectors with specialized resources.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Users className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Freelancers & Remote Workers</h3>
            <p className="text-sm text-muted-foreground">
              Providing flexible workspace solutions for independent professionals and digital nomads.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Briefcase className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Startups & Entrepreneurs</h3>
            <p className="text-sm text-muted-foreground">
              Supporting early-stage businesses with resources, mentorship, and networking opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Building className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Corporate Professionals</h3>
            <p className="text-sm text-muted-foreground">
              Offering satellite office solutions and meeting spaces for established businesses.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
            <GraduationCap className="h-12 w-12 text-secondary" />
            <h3 className="text-lg font-bold">Students & Researchers</h3>
            <p className="text-sm text-muted-foreground">
              Providing quiet study spaces and research resources for academic pursuits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
