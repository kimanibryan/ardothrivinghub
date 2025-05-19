import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { BusinessModel } from "@/components/business-model"
import { ServiceProcess } from "@/components/service-process"
import { CallToAction } from "@/components/call-to-action"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <BusinessModel />
      <ServiceProcess />
      <CallToAction />
    </>
  )
}
