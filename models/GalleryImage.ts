import { Schema, model, models } from 'mongoose'
export interface IGalleryImage { _id: string; title?: string; imageUrl: string; visible: boolean; tags?: string[] }
const GallerySchema = new Schema<IGalleryImage>({
  title: String,
  imageUrl: { type: String, required: true },
  visible: { type: Boolean, default: true },
  tags: [String]
}, { timestamps: true })
export const GalleryImage = models.GalleryImage || model('GalleryImage', GallerySchema)
