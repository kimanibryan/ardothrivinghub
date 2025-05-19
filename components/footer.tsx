import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-6 md:w-1/3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ardo%20thrive%20logo-YI9y8sxj1i4zWHe1Vw39gkXryLgixA.png"
              alt="Ardo Thriving Hub Logo"
              width={100}
              height={40}
              className="h-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            Ardo Thrive Hub transforms workspaces into growth ecosystems where professionals flourish. Beyond desks
            and amenities, we provide the mentorship and connections that turn ambitions into achievements.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:flex-1">
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/workspaces" className="text-muted-foreground hover:text-primary">
                  Workspaces
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Research Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Counseling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link href="/workspaces" className="text-muted-foreground hover:text-primary">
                  Co-working
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ardo Thrive Hub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Designed with ❤️ by
            <Link href="https://georginadev.vercel.app" className="underline ml-1 mr-1" target="_blank" rel="noopener noreferrer">
            Georgina</Link> for empowering professionals
          </p>
        </div>
      </div>
    </footer>
  )
}
