import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
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
                <Image
                  src="/images/woman.png"
                  alt="Sade Khayre"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Ayaan Yabaal</p>
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
                <Image
                  src="/images/woman2.png"
                  alt="Sade Khayre"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Deeqa Samakaab</p>
                  <p className="text-sm text-muted-foreground">Tech Startup CEO</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
