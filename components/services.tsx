import { CheckCircle2 } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Functions of Ardo Thriving Hub</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a range of professional services to help you and your business thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Research Consultancy</h3>
            </div>
            <p className="text-muted-foreground">
              Professional guidance and support in conducting research, assessments, and data analysis for your
              projects.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Psycho-social & Counseling</h3>
            </div>
            <p className="text-muted-foreground">
              Professional counseling and psycho-social support services to promote mental wellbeing and personal
              growth.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Capacity Building</h3>
            </div>
            <p className="text-muted-foreground">
              Training programs and workshops designed to enhance skills and knowledge for professionals in various
              fields.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Co-working Space</h3>
            </div>
            <p className="text-muted-foreground">
              Flexible, professional workspace solutions with all the amenities needed for productivity and
              collaboration.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-4">
          <h3 className="text-2xl font-bold mb-6">Business Model</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2 p-4 border rounded-lg bg-background">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>All types of research and assessment</p>
            </div>
            <div className="flex items-center gap-2 p-4 border rounded-lg bg-background">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>Event facilitation and management</p>
            </div>
            <div className="flex items-center gap-2 p-4 border rounded-lg bg-background">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>Fleet Management & Logistics Support</p>
            </div>
            <div className="flex items-center gap-2 p-4 border rounded-lg bg-background">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p>Youth Employment & Skills Development Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
