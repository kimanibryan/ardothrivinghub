import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Ardo Thrive Hub Logo"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600">
              A women-led, dynamic, and comprehensive space designed to empower both individuals and businesses to
              thrive.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#coworking" className="text-gray-600 hover:text-primary">
                  Co-working Space
                </Link>
              </li>
              <li>
                <Link href="/services#research" className="text-gray-600 hover:text-primary">
                  Research Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services#counseling" className="text-gray-600 hover:text-primary">
                  Psycho-social Counseling
                </Link>
              </li>
              <li>
                <Link href="/services#capacity" className="text-gray-600 hover:text-primary">
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link href="/services#youth" className="text-gray-600 hover:text-primary">
                  Youth Employment
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Newsletter</h3>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter to receive updates on programs and events.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" className="bg-primary hover:bg-primary-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Ardo Thriving Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
