import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { ServiceArea } from '@/models/ServiceArea'

export async function GET() {
  await dbConnect()
  const items = await ServiceArea.find({}).sort({ name: 1 }).lean()
  return NextResponse.json({ items })
}
export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  const item = await ServiceArea.create(body)
  return NextResponse.json({ ok: true, item })
}
