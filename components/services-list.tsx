import { CheckCircle2, FileText, Users, Brain, Briefcase } from "lucide-react"

export function ServicesList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the range of professional services we offer to help you and your business thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Research Consultancy</h3>
            </div>
            <p className="text-muted-foreground">
              Our research consultancy services provide professional guidance and support in conducting research,
              assessments, and data analysis for your projects.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Needs assessments and baseline studies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Market research and competitive analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Program evaluations and impact assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Data collection, analysis, and reporting</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Psycho-social & Counseling</h3>
            </div>
            <p className="text-muted-foreground">
              Our professional counseling and psycho-social support services promote mental wellbeing and personal
              growth for individuals and teams.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Individual counseling sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Group therapy and support groups</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Stress management and resilience building</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Workplace wellness programs</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Capacity Building</h3>
            </div>
            <p className="text-muted-foreground">
              Our training programs and workshops are designed to enhance skills and knowledge for professionals in
              various fields.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Leadership and management training</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Digital skills and technology workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Communication and presentation skills</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Project management and organizational development</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Co-working Space</h3>
            </div>
            <p className="text-muted-foreground">
              Our flexible, professional workspace solutions provide all the amenities needed for productivity and
              collaboration.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Hot desks and dedicated workstations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Private offices and meeting rooms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Event spaces and workshop facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Virtual office services and business address</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
