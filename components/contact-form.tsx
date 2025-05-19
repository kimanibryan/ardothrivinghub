import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
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
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-medium">
              Last Name
            </label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>

        {/* Interest Select */}
        <div className="space-y-2">
          <label htmlFor="interest" className="text-sm font-medium">
            I'm interested in
          </label>
          <Select>
            <SelectTrigger id="interest">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hot-desk">Hot Desk</SelectItem>
              <SelectItem value="dedicated-desk">Dedicated Desk</SelectItem>
              <SelectItem value="private-office">Private Office</SelectItem>
              <SelectItem value="meeting-room">Meeting Room</SelectItem>
              <SelectItem value="event-space">Event Space</SelectItem>
              <SelectItem value="virtual-office">Virtual Office</SelectItem>
              <SelectItem value="other">Other Services</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea id="message" placeholder="Tell us about your needs or ask us a question" className="min-h-[120px]" />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}
