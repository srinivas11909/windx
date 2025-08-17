import 'dotenv/config'
import { dbConnect } from '@/lib/db'
import { User } from '@/models/User'
import bcrypt from 'bcryptjs'

async function main() {
  await dbConnect()
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@site.com'
  const password = process.env.SEED_ADMIN_PASSWORD || 'admin123'
  const name = 'Admin'
  const passwordHash = await bcrypt.hash(password, 10)
  const existed = await User.findOne({ email })
  if (existed) { console.log('Admin already exists:', email); process.exit(0) }
  await User.create({ name, email, passwordHash, role: 'ADMIN' })
  console.log('Admin created:', email, 'password:', password)
  process.exit(0)
}
main().catch((e)=>{ console.error(e); process.exit(1) })
