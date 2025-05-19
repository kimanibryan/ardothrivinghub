import Image from "next/image"

export function WorkspacesHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Workspaces
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                Flexible Workspace Solutions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                At Ardo Thriving Hub, we understand that different work requires different environments. That's why we
                offer a range of workspace solutions designed to meet your unique needs, whether you're a freelancer,
                startup, or established business.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                From hot desks to private offices, our spaces are designed to foster productivity, collaboration, and
                growth. All backed by our premium amenities and supportive community.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/Somali Women 2.jpg"
                alt="Ardo Thriving Hub Workspaces"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
