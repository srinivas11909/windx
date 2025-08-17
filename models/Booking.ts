import { Schema, model, models } from 'mongoose'
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'REJECTED'
export interface IBooking { _id: string; name: string; phone: string; email?: string; service: string; date: string; time: string; status: BookingStatus; note?: string }
const BookingSchema = new Schema<IBooking>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  service: { type: String, required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  time: { type: String, required: true }, // HH:mm
  status: { type: String, enum: ['PENDING','CONFIRMED','REJECTED'], default: 'PENDING' },
  note: String
}, { timestamps: true })
export const Booking = models.Booking || model('Booking', BookingSchema)
