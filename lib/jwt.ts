import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET as string
if (!SECRET) throw new Error('JWT_SECRET not set')
export type TokenPayload = { sub: string; role: 'ADMIN' | 'USER'; email: string }
export const signToken = (p: TokenPayload) => jwt.sign(p, SECRET, { algorithm: 'HS256', expiresIn: '7d' })
export const verifyToken = (t: string): TokenPayload | null => { try { return jwt.verify(t, SECRET) as TokenPayload } catch { return null } }
