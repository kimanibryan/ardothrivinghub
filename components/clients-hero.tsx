import Image from "next/image"

export function ClientsHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Clients
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Who We Serve</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                At Ardo Thriving Hub, we're proud to serve a diverse community of professionals from various backgrounds
                and industries. Our inclusive environment is designed to meet the unique needs of each client group.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                From humanitarian workers to students, startups to corporate professionals, we provide the resources,
                support, and community that helps everyone thrive.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/Somali Students & Researchers in a hub.jpg"
                alt="Ardo Thriving Hub Clients"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
