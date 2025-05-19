import { WorkspacesHero } from "@/components/workspaces-hero"
import { WorkspacesList } from "@/components/workspaces-list"
import { WorkspacePricing } from "@/components/workspace-pricing"
import { WorkspaceGallery } from "@/components/workspace-gallery"
import { CallToAction } from "@/components/call-to-action"

export default function WorkspacesPage() {
  return (
    <>
      <WorkspacesHero />
      <WorkspacesList />
      <WorkspacePricing />
      <WorkspaceGallery />
      <CallToAction />
    </>
  )
}
