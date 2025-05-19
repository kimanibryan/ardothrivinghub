import { Hero } from "@/components/hero"
import { FeaturedServices } from "@/components/featured-services"
import { FeaturedWorkspaces } from "@/components/featured-workspaces"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <FeaturedWorkspaces />
      <Testimonials />
      <CallToAction />
    </>
  )
}
