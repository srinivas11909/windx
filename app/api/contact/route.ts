import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'
import { dbConnect } from '@/lib/db'
import { Lead } from '@/models/Lead'

export async function POST(req: Request) {
  try {
    await dbConnect()
    const { name, email, phone, message } = await req.json()
    if (!name || !email || !phone) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    const lead = await Lead.create({ name, email, phone, message })
    const to = process.env.CONTACT_TO_EMAIL as string
    const html = `<h2>New Inquiry</h2><p><b>${name}</b> (${email}, ${phone})</p><p>${message || ''}</p><hr/><p>Lead ID: ${lead._id}</p>`
    if (to) await sendMail(to, 'New Windshield Lead', html)
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
