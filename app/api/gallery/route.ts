import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { GalleryImage } from '@/models/GalleryImage'
export async function GET() {
  await dbConnect()
  const items = await GalleryImage.find({ visible: true }).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ items })
}
export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  const item = await GalleryImage.create(body)
  return NextResponse.json({ ok: true, item })
}
