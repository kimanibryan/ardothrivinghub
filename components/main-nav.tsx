import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Ardo Thrive Hub Logo" width={120} height={50} className="h-10 w-auto" />
          </Link>
        </div>
        <nav className={cn("hidden md:flex gap-6", className)}>
          <Link
            href="/about"
            className="text-sm font-medium text-primary hover:text-primary-600 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-primary hover:text-primary-600 hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-primary hover:text-primary-600 hover:underline underline-offset-4"
          >
            Testimonials
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium text-primary hover:text-primary-600 hover:underline underline-offset-4"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-primary hover:text-primary-600 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary-600 text-white">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden text-primary border-primary">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
