import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function FeaturedServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of professional services designed to help you and your business thrive.
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
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
