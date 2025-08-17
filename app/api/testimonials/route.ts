import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Testimonial } from '@/models/Testimonial'
import { verifyToken } from '@/lib/jwt'

export async function GET() {
  await dbConnect()
  const items = await Testimonial.find({ visible: true }).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ items })
}
export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  const item = await Testimonial.create(body)
  return NextResponse.json({ ok: true, item })
}
