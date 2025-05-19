import { ClientsHero } from "@/components/clients-hero"
import { ClientsList } from "@/components/clients-list"
import { ClientsTestimonials } from "@/components/clients-testimonials"
import { ClientsPartners } from "@/components/clients-partners"
import { CallToAction } from "@/components/call-to-action"

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientsList />
      <ClientsTestimonials />
      <ClientsPartners />
      <CallToAction />
    </>
  )
}
