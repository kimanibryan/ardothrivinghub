import { HeartHandshake, Store, Landmark } from "lucide-react";

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
        <div className="mx-auto grid max-w-4xl gap-8 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <div className="flex flex-col items-center space-y-2">
            <HeartHandshake className="h-16 w-16 text-secondary" />
            <p className="text-center font-medium">NGO's</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Store className="h-16 w-16 text-secondary" />
            <p className="text-center font-medium">Small Businesses</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Landmark className="h-16 w-16 text-secondary" />
            <p className="text-center font-medium">Private Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
