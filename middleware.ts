import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
//import { verifyToken } from './lib/jwt'
// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl
//   if (pathname.startsWith('/admin')) {
//     const token = req.cookies.get('token')?.value
//     const payload = token ? verifyToken(token) : null
//     if (!payload || payload.role !== 'ADMIN') {
//       const loginUrl = new URL('/login', req.url)
//       loginUrl.searchParams.set('from', pathname)
//       return NextResponse.redirect(loginUrl)
//     }
//   }
//   return NextResponse.next()
//}
function decodeJwtPayload(token: string) {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch {
    return null
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('token')?.value
    const payload = token ? decodeJwtPayload(token) : null
    if (!payload || payload.role !== 'ADMIN') {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
