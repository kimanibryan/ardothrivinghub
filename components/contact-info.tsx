import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="rounded-lg border bg-background p-8 shadow-sm mb-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Our Location</h4>
            <p className="text-muted-foreground">123 Business Avenue, City Center</p>
            <p className="text-muted-foreground">Nairobi, Kenya</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Phone</h4>
            <p className="text-muted-foreground">+123 456 7890</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-muted-foreground">info@ath-som.org</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Business Hours</h4>
            <div className="text-muted-foreground">
              <div className="flex justify-between gap-8">
                <span>Monday - Friday</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between gap-8">
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
