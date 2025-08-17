import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/jwt'
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('token')?.value
    const payload = token ? verifyToken(token) : null
    if (!payload || payload.role !== 'ADMIN') {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next()
}
export const config = { matcher: ['/admin/:path*'] }
