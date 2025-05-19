export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Vision</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ardo Thrive Hub (ATH) is a women-led, dynamic, and comprehensive space designed to empower both
              individuals and businesses to thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                ATH's mission is to empower entrepreneurs, freelancers, and remote workers by fostering a collaborative
                and productive environment. We create an ecosystem where professionals can access not just physical
                resources but also the knowledge, connections, and support needed to accelerate business growth and
                personal development.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                Ardo Thrive Hub transforms workspaces into growth ecosystems where professionals flourish. Beyond desks
                and amenities, we provide the mentorship and connections that turn ambitions into achievements. Our
                commitment to diverse voices, especially female entrepreneurs, sets us apart. At ATH, we don't just
                offer space; we create opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
