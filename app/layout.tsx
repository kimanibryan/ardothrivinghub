import type React from "react"
import { MainNav } from "../components/main-nav"
import { SiteFooter } from "../components/site-footer"
import "@/app/globals.css"
import { ThemeProvider } from "../components/theme-provider"

export const metadata = {
  title: "Ardo Thriving Hub - Community Support & Resources",
  description:
    "A vibrant community hub offering programs, resources, and support to help individuals and families thrive.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
