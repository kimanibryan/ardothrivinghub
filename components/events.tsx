import { CalendarRange } from "lucide-react"

export function Events() {
  const eventImage = "/images/application.jpg";

  return (
    <section id="events" className="w-full py-6 md:py-8 lg:py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-1">
            <div className="inline-flex items-center rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
              <CalendarRange className="mr-1 h-3 w-3" />
              Events & Workshops
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">Upcoming Events</h2>
            <p className="max-w-[800px] text-sm text-muted-foreground md:text-base">
              Join us for networking, workshops, and talks designed to help you grow your business and connect with like-minded professionals.
            </p>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          <div className="flex justify-center">
            <img
              src={eventImage}
              alt="Upcoming Event"
              className="max-w-[300px] w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
          {/* Add more event posters here */}
        </div>
        
        <div className="mt-12 text-center px-4">
          <h3 className="text-2xl font-bold text-secondary mb-4">Want to host your event in Ardo Thriving Hub?</h3>
          <p className="text-muted-foreground mb-6">Reach out to us to discuss hosting your next event at our hub!</p>
          <a 
            href="https://wa.me/252634044707" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.174.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.297-.354.445-.59.146-.25.194-.42.29-.696.1-.27.05-.51-.05-.706-.1-.21-.898-2.166-1.23-2.94-.3-.7-.62-.604-.898-.613-.23-.008-.53-.01-.81-.01-.27 0-.71.09-1.08.42-.37.33-.71.99-.71 1.67 0 .68.525 4.19 3.18 7.12 2.07 2.27 4.9 3.57 6.87 3.76.91.09 1.37.09 1.88.07.57-.03 1.86-.76 2.12-1.5.27-.73.27-1.37.19-1.5-.08-.14-.33-.22-.69-.35m-5.73 6.62h-.02c-1.77 0-3.53-.48-5.08-1.38l-.36-.22-3.76.99.99-3.67-.24-.37a11.99 11.99 0 01-1.38-5.09c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12.01 12m10.5-12c0-5.25-4.25-9.5-9.5-9.5s-9.5 4.25-9.5 9.5c0 2.12.7 4.07 1.88 5.63L2.5 22l5.34-1.4a9.47 9.47 0 004.66 1.4c5.25 0 9.5-4.25 9.5-9.5"/>
            </svg>
            Message Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
