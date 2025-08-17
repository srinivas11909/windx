'use client'
import { useEffect, useState } from 'react'

type Item = { _id: string; title?: string; imageUrl: string }
export default function GalleryPage() {
  const [items, setItems] = useState<Item[]>([])
  useEffect(()=>{ fetch('/api/gallery').then(r=>r.json()).then(d=>setItems(d.items||[])) },[])
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="text-muted mt-2">Before & afters, workshop shots, and on-site service.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {items.map(i => (
          <div key={i._id} className="card overflow-hidden">
            <img src={i.imageUrl} alt={i.title || 'Gallery image'} className="w-full h-56 object-cover"/>
            {i.title && <div className="p-3 text-sm">{i.title}</div>}
          </div>
        ))}
        {!items.length && <p className="text-white/60">No images yet.</p>}
      </div>
    </section>
  )
}
