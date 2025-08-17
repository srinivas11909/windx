import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { GalleryImage } from '@/models/GalleryImage'
export async function PUT(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  const data = await req.json()
  const updated = await GalleryImage.findByIdAndUpdate(params.id, data, { new: true })
  return NextResponse.json({ ok: true, item: updated })
}
export async function DELETE(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  await GalleryImage.findByIdAndDelete(params.id)
  return NextResponse.json({ ok: true })
}
