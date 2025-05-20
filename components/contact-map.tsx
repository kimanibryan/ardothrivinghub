export function ContactMap() {
  return (
    <div className="rounded-lg border bg-background p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Find Us</h3>
      <div className="aspect-video w-full h-[300px] bg-muted rounded-md overflow-hidden">
        <iframe
          title="Shacab Mall Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d44.050000!3d9.560000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShacab%20Mall%2C%20Hargeisa%2C%20Somalia!5e0!3m2!1sen!2sus!4v1618351731950!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <p className="mt-4 text-muted-foreground">
        We're conveniently located in the heart of the city, with easy access to public transportation and parking
        facilities.
      </p>
    </div>
  );
}