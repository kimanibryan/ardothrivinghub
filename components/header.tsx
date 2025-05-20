"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ardo%20thrive%20logo-YI9y8sxj1i4zWHe1Vw39gkXryLgixA.png"
            alt="Ardo Thriving Hub Logo"
            width={120}
            height={80}
            className="h-14 w-auto md:h-16"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary" : "hover:text-primary"}`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
          >
            Services
          </Link>
          <Link
            href="/amenities"
            className={`text-sm font-medium transition-colors ${isActive("/amenities") ? "text-primary" : "hover:text-primary"}`}
          >
            Amenities
          </Link>
          <Link
            href="/workspaces"
            className={`text-sm font-medium transition-colors ${isActive("/workspaces") ? "text-primary" : "hover:text-primary"}`}
          >
            Workspaces
          </Link>
          <Link
            href="/clients"
            className={`text-sm font-medium transition-colors ${isActive("/clients") ? "text-primary" : "hover:text-primary"}`}
          >
            Clients
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">Book a Tour</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background p-6 flex flex-col gap-6">
          <Link
            href="/"
            className={`text-lg font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-lg font-medium transition-colors ${isActive("/about") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-lg font-medium transition-colors ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/amenities"
            className={`text-lg font-medium transition-colors ${isActive("/amenities") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Amenities
          </Link>
          <Link
            href="/workspaces"
            className={`text-lg font-medium transition-colors ${isActive("/workspaces") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Workspaces
          </Link>
          <Link
            href="/clients"
            className={`text-lg font-medium transition-colors ${isActive("/clients") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Clients
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-medium transition-colors ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="mt-4">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Book a Tour
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
