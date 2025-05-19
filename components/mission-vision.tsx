export function MissionVision() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Vision</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Guiding principles that drive everything we do at Ardo Thriving Hub.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-8 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                ATH's mission is to empower entrepreneurs, freelancers, and remote workers by fostering a collaborative
                and productive environment. We create an ecosystem where professionals can access not just physical
                resources but also the knowledge, connections, and support needed to accelerate business growth and
                personal development.
              </p>
              <p className="text-muted-foreground mt-4">We are committed to:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Creating inclusive spaces that welcome diverse perspectives</li>
                <li>Providing resources that address the unique needs of our community</li>
                <li>Facilitating meaningful connections that lead to collaboration and growth</li>
                <li>Supporting sustainable business practices and social responsibility</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-8 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                Ardo Thrive Hub transforms workspaces into growth ecosystems where professionals flourish. Beyond desks
                and amenities, we provide the mentorship and connections that turn ambitions into achievements. Our
                commitment to diverse voices, especially female entrepreneurs, sets us apart. At ATH, we don't just
                offer space; we create opportunities.
              </p>
              <p className="text-muted-foreground mt-4">We envision a future where:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Every professional has access to the resources they need to succeed</li>
                <li>Collaboration across disciplines leads to innovative solutions</li>
                <li>Women and underrepresented groups are empowered to lead in their industries</li>
                <li>Our hub serves as a model for sustainable, community-centered business practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
