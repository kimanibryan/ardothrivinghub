import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { Team } from "@/components/team"
import { Values } from "@/components/values"
import { CallToAction } from "@/components/call-to-action"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Values />
      <Team />
      <CallToAction />
    </>
  )
}
