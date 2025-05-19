import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WorkspacePricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for you and your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Hot Desk</h3>
              <p className="text-sm text-muted-foreground">Perfect for freelancers and occasional users.</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-bold">$25</span>
              <span className="ml-1 text-sm text-muted-foreground">/day</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Access during business hours</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>High-speed internet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Complimentary refreshments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Access to common areas</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Monthly packages available from $199</p>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Most Popular
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Dedicated Desk</h3>
              <p className="text-sm text-muted-foreground">Your own permanent workspace.</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-bold">$349</span>
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Lockable storage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Business address</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>5 hours meeting room credits</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>All amenities included</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Minimum 3-month commitment</p>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Private Office</h3>
              <p className="text-sm text-muted-foreground">For teams and privacy-focused professionals.</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-bold">$699</span>
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Private, lockable office</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Business address & phone line</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>10 hours meeting room credits</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Premium amenities package</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Pricing starts for 1-2 person office</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-primary font-medium">
              Contact us
            </Link>{" "}
            for tailored pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
