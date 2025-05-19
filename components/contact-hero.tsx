import Image from "next/image"

export function ContactHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contact Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Get in Touch</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We'd love to hear from you! Whether you have questions about our services, want to book a tour, or are
                ready to become a member, our team is here to help.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Fill out the form below, and one of our team members will get back to you as soon as possible. You can
                also reach us directly using the contact information provided.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/Reception area.jpg"
                alt="Ardo Thriving Hub Contact"
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
