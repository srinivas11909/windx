import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { ServiceArea } from '@/models/ServiceArea'

export async function PUT(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  const data = await req.json()
  const updated = await ServiceArea.findByIdAndUpdate(params.id, data, { new: true })
  return NextResponse.json({ ok: true, item: updated })
}
export async function DELETE(req: Request, { params }: { params: { id: string }}) {
  await dbConnect()
  await ServiceArea.findByIdAndDelete(params.id)
  return NextResponse.json({ ok: true })
}
