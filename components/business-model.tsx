import { CheckCircle2, FileText, Calendar, Truck, GraduationCap } from "lucide-react"

export function BusinessModel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">Our Business Model</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how we create value and deliver exceptional services to our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <FileText className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-bold">Research & Assessment</h3>
            </div>
            <p className="text-muted-foreground">
              We conduct comprehensive research and assessments for organizations, providing valuable insights and
              data-driven recommendations.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Market research and competitive analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Needs assessments and feasibility studies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Program evaluations and impact assessments</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-bold">Event Management</h3>
            </div>
            <p className="text-muted-foreground">
              We facilitate and manage events of all sizes, from small workshops to large conferences, ensuring seamless
              execution and impactful outcomes.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Corporate events and team-building activities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Workshops and training sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Networking events and community gatherings</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Truck className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-bold">Fleet Management & Logistics</h3>
            </div>
            <p className="text-muted-foreground">
              We provide comprehensive fleet management and logistics support services to help organizations optimize
              their operations.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Vehicle fleet management and maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Supply chain optimization and logistics planning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Transportation coordination and delivery services</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-bold">Youth Employment & Skills Development</h3>
            </div>
            <p className="text-muted-foreground">
              We empower young people through skills development programs and employment opportunities, bridging the gap
              between education and the workforce.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Vocational training and skills development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Internship and apprenticeship programs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Career counseling and job placement services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
