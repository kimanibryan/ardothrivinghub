export function ContactMap() {
  return (
    <div className="rounded-lg border bg-background p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Find Us</h3>
      <div className="aspect-video w-full h-[300px] bg-muted rounded-md flex items-center justify-center">
        <p className="text-muted-foreground">Interactive map would be displayed here</p>
        {/* In a real implementation, you would integrate with Google Maps or another map provider */}
      </div>
      <p className="mt-4 text-muted-foreground">
        We're conveniently located in the heart of the city, with easy access to public transportation and parking
        facilities.
      </p>
    </div>
  )
}
