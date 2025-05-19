import Image from "next/image"

export function ClientsPartners() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Partners</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to collaborate with these organizations to better serve our community.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Local University</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/images/coinbase.svg"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Tech Incubator</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/images/logo-black.png"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Women's Business Association</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">International NGO</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Local Government</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/images/netflix.svg"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Corporate Sponsor</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/images/"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Youth Development Program</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative h-20 w-40">
              <Image
                src="/images/instagram.svg"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">Entrepreneurship Network</p>
          </div>
        </div>
      </div>
    </section>
  )
}
