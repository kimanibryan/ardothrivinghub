import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function ClientsTestimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Testimonials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from professionals who have experienced the Ardo Thriving Hub difference.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-4">
                "Ardo Thriving Hub has transformed the way I work. The environment is professional, the amenities are
                top-notch, and the community is incredibly supportive. It's more than just a workspace; it's a catalyst
                for growth."
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-10 w-10"></div>
                <div>
                  <p className="font-medium">Sade Khayre</p>
                  <p className="text-sm text-muted-foreground">Freelance Designer</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-4">
                "As a startup founder, finding the right workspace was crucial. Ardo Thriving Hub provided not just a
                desk, but connections, resources, and mentorship that have been invaluable to our growth. The women-led
                approach brings a unique perspective that's refreshing in the business world."
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-10 w-10"></div>
                <div>
                  <p className="font-medium">Bilqiiis Samakaab</p>
                  <p className="text-sm text-muted-foreground">Tech Startup CEO</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-4">
                "Working in the humanitarian sector means I need a space that understands the unique challenges we face.
                Ardo Thriving Hub not only provides a professional environment but also connects me with like-minded
                professionals and resources that support our mission."
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-10 w-10"></div>
                <div>
                  <p className="font-medium">Amina Osman</p>
                  <p className="text-sm text-muted-foreground">NGO Program Manager</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-4">
                "As a graduate student, I needed a quiet place to study and conduct research. Ardo Thriving Hub offers
                the perfect environment, plus the added benefit of networking with professionals in my field. The
                amenities and support have made a significant difference in my academic journey."
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-10 w-10"></div>
                <div>
                  <p className="font-medium">Ayaan Yabaal</p>
                  <p className="text-sm text-muted-foreground">PhD Candidate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
