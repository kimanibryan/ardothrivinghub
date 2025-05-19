import Image from "next/image"

export function Team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Leadership Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the dedicated professionals behind Ardo Thriving Hub.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/images/visual 2.jpg" alt="Team Member" fill className="object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Amina Hassan</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
              <p className="mt-2 text-sm text-muted-foreground">
                With over 15 years of experience in business development and community building, Amina founded Ardo
                Thriving Hub to create opportunities for diverse entrepreneurs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">David Ochieng</h3>
              <p className="text-sm text-muted-foreground">Operations Director</p>
              <p className="mt-2 text-sm text-muted-foreground">
                David brings his expertise in operational excellence and customer experience to ensure our hub runs
                smoothly and exceeds expectations.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Fatima Abdi</h3>
              <p className="text-sm text-muted-foreground">Community Manager</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fatima is passionate about creating meaningful connections and fostering a supportive community
                environment for all our members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
