'use client'
import { useEffect, useState } from 'react'

type T = { _id: string; name: string; comment: string; rating: number }
export default function TestimonialsPage() {
  const [items, setItems] = useState<T[]>([])
  useEffect(()=>{ fetch('/api/testimonials').then(r=>r.json()).then(d=>setItems(d.items||[])) },[])
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <p className="text-muted mt-2">What our customers say</p>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {items.map(t => (
          <div key={t._id} className="card">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <span className="text-yellow-400">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</span>
            </div>
            <p className="text-sm text-white/80 mt-2">{t.comment}</p>
          </div>
        ))}
        {!items.length && <p className="text-white/60">No testimonials yet.</p>}
      </div>
    </section>
  )
}
