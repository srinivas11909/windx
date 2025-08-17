import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Booking } from '@/models/Booking'
import { sendMail } from '@/lib/mailer'

export async function PUT(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  const data = await req.json()
  const updated = await Booking.findByIdAndUpdate(params.id, data, { new: true })
  // email customer if status changed and email exists
  if (updated?.email && data.status) {
    const subject = data.status === 'CONFIRMED' ? 'Your booking is confirmed' : data.status === 'REJECTED' ? 'Your booking was declined' : 'Booking update'
    const html = `<p>Hello ${updated.name},</p><p>Your booking for ${updated.service} on ${updated.date} at ${updated.time} is now <b>${updated.status}</b>.</p>`
    await sendMail(updated.email, subject, html)
  }
  return NextResponse.json({ ok: true, item: updated })
}
export async function DELETE(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  await Booking.findByIdAndDelete(params.id)
  return NextResponse.json({ ok: true })
}
