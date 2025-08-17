import { Schema, model, models, type Model, Types } from 'mongoose'
export interface IServiceArea { _id?: Types.ObjectId; name: string; slug: string; description: string; seoTitle?: string; seoDescription?: string }
const ServiceAreaSchema = new Schema<IServiceArea>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  seoTitle: String,
  seoDescription: String
}, { timestamps: true })
export const ServiceArea: Model<IServiceArea> = models.ServiceArea || model<IServiceArea>('ServiceArea', ServiceAreaSchema)
