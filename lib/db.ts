import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI as string
console.log(MONGODB_URI)
if (!MONGODB_URI) { throw new Error('MONGODB_URI not set') }

declare global { var mongooseConn: { conn: typeof mongoose | null, promise: Promise<typeof mongoose> | null } | undefined }
let cached = global.mongooseConn || { conn: null, promise: null }
global.mongooseConn = cached

export async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI).then(m => m)
  cached.conn = await cached.promise
  return cached.conn
}
