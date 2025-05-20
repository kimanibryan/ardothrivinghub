import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="rounded-lg border bg-background p-6 sm:p-8 shadow-sm mb-8 w-full max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">Contact Information</h3>
      <div className="space-y-6">
        {/* Location */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <div>
            <h4 className="font-bold">Our Location</h4>
            <p className="text-muted-foreground">Shacab Mall, floor 3, room 321</p>
            <p className="text-muted-foreground">Hargeisa, Somalia</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <Phone className="h-6 w-6 text-primary" />
          <div>
            <h4 className="font-bold">Phone</h4>
            <p className="text-muted-foreground">+252634044707</p>
            <p className="text-muted-foreground">+2522634044383</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <Mail className="h-6 w-6 text-primary" />
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-muted-foreground break-words">info@ath-som.org</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <Clock className="h-6 w-6 text-primary" />
          <div>
            <h4 className="font-bold">Business Hours</h4>
            <div className="text-muted-foreground space-y-1 mt-1 text-sm">
              <div className="flex justify-between gap-4">
                <span>Monday - Friday</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
