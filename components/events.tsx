import { Button } from "./ui/button"
import { Calendar, Clock, MapPin, CalendarRange } from "lucide-react"

export function Events() {
  const events = [
    {
      id: 1,
      title: "Chevening Application Preparation",
      date: "2025-07-12",
      time: "04:00 - 06:00",
      location: "Shacab Mall, 3rd Floor, Room 321",
      description: "Learn tips and insights from a Chevening Alumnus.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      speaker: {
        name: "Hussein Osman",
        title: "MA International Childrens Rights and Development, University-King's College London",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    },
    {
      id: 2,
      title: "Networking Mixer",
      date: "2024-03-15",
      time: "18:00 - 20:00",
      location: "Shacab Mall, 3rd Floor, Room 321",
      description: "Join us for an evening of networking with industry professionals and fellow entrepreneurs.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      speaker: {
        name: "Dr. Amina Hassan",
        title: "CEO, Mogadishu Business Network",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    },
    {
      id: 3,
      title: "Tech Talk: AI & The Future",
      date: "2024-03-20",
      time: "14:00 - 16:00",
      location: "Shacab Mall, 3rd Floor, Room 321",
      description: "Learn the essentials of launching your startup from successful founders and investors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      speaker: {
        name: "Naima Abdi",
        title: "CTO, TechSomalia",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      }
    }
  ]

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="events" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              <CalendarRange className="mr-2 h-4 w-4" />
              Events & Workshops
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us for networking, workshops, and talks designed to help you grow your business and connect with like-minded professionals.
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-background">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-foreground mb-4">{event.description}</p>
                  <div className="mt-4 flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                      <img
                        src={event.speaker.image}
                        alt={event.speaker.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{event.speaker.name}</p>
                      <p className="text-xs text-muted-foreground">{event.speaker.title}</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
