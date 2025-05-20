import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { firstName, lastName, email, country, phone, message } = body

  try {
    await resend.emails.send({
      from: 'Contact Form <contact@yourdomain.com>',
      to: 'your-inbox@yourdomain.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}