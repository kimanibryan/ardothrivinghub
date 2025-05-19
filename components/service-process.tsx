export function ServiceProcess() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Service Process</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How we work with you to deliver exceptional results.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
            <div className="space-y-12 md:space-y-24">
              <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col items-end md:text-right">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <h3 className="text-xl font-bold">Initial Consultation</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    We begin with a thorough consultation to understand your needs, goals, and challenges. This helps us
                    tailor our services to your specific situation.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="md:text-right md:order-1">
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                </div>
                <div className="flex flex-col md:pl-12">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <h3 className="text-xl font-bold">Customized Proposal</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Based on our consultation, we develop a customized proposal outlining our recommended services,
                    timeline, and investment. We work with you to refine this until it perfectly meets your needs.
                  </p>
                </div>
              </div>
              <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col items-end md:text-right">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <h3 className="text-xl font-bold">Implementation</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Our team of experts implements the agreed-upon services with precision and care. We maintain open
                    communication throughout this phase to ensure everything is on track.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="md:text-right md:order-1">
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                </div>
                <div className="flex flex-col md:pl-12">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <h3 className="text-xl font-bold">Evaluation & Follow-up</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    We evaluate the results of our services and provide a comprehensive report. We also offer follow-up
                    support to ensure long-term success and address any additional needs that may arise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
