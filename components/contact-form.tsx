"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { countries } from "@/lib/countries"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, country: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ firstName: '', lastName: '', email: '', country: '', phone: '', message: '' })
      } else {
        const errData = await response.json()
        setError(errData.message || 'Failed to send message.')
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-lg border bg-background p-6 sm:p-8 shadow-sm w-full max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">Send us a Message</h3>
      <form className="space-y-6">
        {/* First and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-medium">
              First Name
            </label>
            <Input id="first-name" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-medium">
              Last Name
            </label>
            <Input id="last-name" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your needs or ask us a question"
            className="min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" onClick={handleSubmit} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
        {success && <p className="text-green-600 mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  )
}
