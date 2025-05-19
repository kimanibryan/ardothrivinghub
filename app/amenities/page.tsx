import { AmenitiesHero } from "@/components/amenities-hero"
import { AmenitiesList } from "@/components/amenities-list"
import { AmenitiesGallery } from "@/components/amenities-gallery"
import { CallToAction } from "@/components/call-to-action"

export default function AmenitiesPage() {
  return (
    <>
      <AmenitiesHero />
      <AmenitiesList />
      <AmenitiesGallery />
      <CallToAction />
    </>
  )
}
