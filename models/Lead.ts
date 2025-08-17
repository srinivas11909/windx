import { Schema, model, models } from 'mongoose'
export interface ILead { _id: string; name: string; email: string; phone: string; message?: string; createdAt: Date; updatedAt: Date }
const LeadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: String
}, { timestamps: true })
export const Lead = models.Lead || model('Lead', LeadSchema)
