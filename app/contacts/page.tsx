import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div>
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </>
  )
}
