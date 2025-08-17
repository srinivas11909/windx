import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { User } from '@/models/User'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/jwt'

export async function POST(req: Request) {
  await dbConnect()
  const { email, password } = await req.json()
  if (!email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  const user = await User.findOne({ email }).findOne()
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  const ok = await bcrypt.compare(password, user?.passwordHash)
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  const token = signToken({ sub: String(user._id), role: user.role, email: user.email })
  const res = NextResponse.json({ ok: true, role: user.role })
  res.cookies.set('token', token, { httpOnly: true, sameSite: 'lax', path: '/', secure: true, maxAge: 60*60*24*7 })
  return res
}
