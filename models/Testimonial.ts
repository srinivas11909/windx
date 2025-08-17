import { Schema, model, models } from 'mongoose'
export interface ITestimonial { _id: string; name: string; comment: string; rating: number; date?: Date; visible: boolean }
const TestimonialSchema = new Schema<ITestimonial>({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  date: { type: Date, default: Date.now },
  visible: { type: Boolean, default: true }
}, { timestamps: true })
export const Testimonial = models.Testimonial || model('Testimonial', TestimonialSchema)
