import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Lead } from '@/models/Lead'
import { verifyToken } from '@/lib/jwt'

export async function GET(req: Request) {
  await dbConnect()
  const cookie = (req as any).headers.get('cookie') || ''
  const token = cookie.split(';').map((c: string)=>c.trim()).find((c: string)=>c.startsWith('token='))?.split('=')[1]
  const payload = token ? verifyToken(token) : null
  if (!payload || payload.role !== 'ADMIN') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const leads = await Lead.find({}).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ leads })
}

export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  const lead = await Lead.create(body)
  return NextResponse.json({ ok: true, lead })
}
