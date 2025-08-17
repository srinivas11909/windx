import { Schema, model, models } from 'mongoose'
export type Role = 'ADMIN' | 'USER'
export interface IUser { _id: string; name: string; email: string; passwordHash: string; role: Role; createdAt: Date; updatedAt: Date }
const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' }
}, { timestamps: true })
export const User = models.User || model('User', UserSchema)
