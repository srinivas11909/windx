import mongoose from 'mongoose'
console.log("MONGODB_URI =", process.env.MONGODB_URI);

//const MONGODB_URI = process.env.MONGODB_URI as string
const MONGODB_URI = "mongodb+srv://gsr9680:g4Rc3JQVHJeJSGag@cluster0.bwzin.mongodb.net/windshield_db?retryWrites=true&w=majority&appName=Cluster0"
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
