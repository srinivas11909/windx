import { Schema, model, models } from 'mongoose'
export interface IServiceArea { _id: string; name: string; slug: string; description: string; seoTitle?: string; seoDescription?: string }
const ServiceAreaSchema = new Schema<IServiceArea>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  seoTitle: String,
  seoDescription: String
}, { timestamps: true })
export const ServiceArea = models.ServiceArea || model('ServiceArea', ServiceAreaSchema)
