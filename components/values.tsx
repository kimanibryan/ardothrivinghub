import { Heart, Users, Lightbulb, Globe } from "lucide-react"

export function Values() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The principles that guide our approach and define our culture.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Heart className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Empathy</h3>
            <p className="text-sm text-muted-foreground">
              We understand the challenges our clients face and design our services to address their unique needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Community</h3>
            <p className="text-sm text-muted-foreground">
              We foster meaningful connections and collaboration among our members, creating a supportive ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Lightbulb className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              We embrace new ideas and approaches, constantly evolving to better serve our community.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center shadow-sm">
            <Globe className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">Sustainability</h3>
            <p className="text-sm text-muted-foreground">
              We are committed to environmentally and socially responsible practices in all aspects of our operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
