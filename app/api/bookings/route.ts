import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Booking } from '@/models/Booking'
import { sendMail } from '@/lib/mailer'

export async function GET() {
  await dbConnect()
  const items = await Booking.find({}).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ items })
}
export async function POST(req: Request) {
  await dbConnect()
  const { name, phone, email, service, date, time, note } = await req.json()
  if (!name || !phone || !service || !date || !time) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  const item = await Booking.create({ name, phone, email, service, date, time, note })
  // notify business
  const to = process.env.CONTACT_TO_EMAIL as string
  if (to) {
    const html = `<h2>New Booking</h2><p>${name} (${phone}${email ? ', ' + email : ''})</p><p>${service} on ${date} at ${time}</p>`
    await sendMail(to, 'New Booking Request', html)
  }
  // user ack
  if (email) {
    await sendMail(email, 'We received your booking', `<p>Thanks ${name}! We will confirm your ${service} booking for ${date} ${time} shortly.</p>`)
  }
  return NextResponse.json({ ok: true, item })
}
