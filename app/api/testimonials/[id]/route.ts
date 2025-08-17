import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Testimonial } from '@/models/Testimonial'
import { verifyToken } from '@/lib/jwt'

export async function PUT(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  const data = await req.json()
  const updated = await Testimonial.findByIdAndUpdate(params.id, data, { new: true })
  return NextResponse.json({ ok: true, item: updated })
}
export async function DELETE(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  await Testimonial.findByIdAndDelete(params.id)
  return NextResponse.json({ ok: true })
}
