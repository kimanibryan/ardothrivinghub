import { Events } from "@/components/events"
import { CallToAction } from "@/components/call-to-action"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Ardo Thriving Hub",
  description: "Join our upcoming events, workshops, and networking sessions at Ardo Thriving Hub.",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Events />
      <CallToAction />
    </main>
  )
}
