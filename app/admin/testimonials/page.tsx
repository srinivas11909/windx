'use client'
import { useEffect, useState } from 'react'
type T = { _id: string; name: string; comment: string; rating: number; visible: boolean }
export default function TestimonialsAdmin() {
  const [items, setItems] = useState<T[]>([])
  const [form, setForm] = useState({ name: '', comment: '', rating: 5 })
  async function load(){ const d = await fetch('/api/testimonials').then(r=>r.json()); setItems(d.items||[]) }
  useEffect(()=>{ load() },[])
  async function add(e: React.FormEvent){ e.preventDefault(); await fetch('/api/testimonials',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...form, visible: true })}); setForm({ name:'', comment:'', rating:5 }); await load() }
  async function del(id: string){ await fetch(`/api/testimonials/${id}`, { method: 'DELETE' }); await load() }
  return (
    <div>
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <form onSubmit={add} className="card mt-4 space-y-3 max-w-xl">
        <input placeholder="Name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required className="input"/>
        <textarea placeholder="Comment" value={form.comment} onChange={e=>setForm({ ...form, comment: e.target.value })} required className="input"/>
        <input type="number" min={1} max={5} value={form.rating} onChange={e=>setForm({ ...form, rating: Number(e.target.value) })} className="input"/>
        <button className="btn btn-primary w-full">Add Testimonial</button>
      </form>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {items.map(t=> (
          <div key={t._id} className="card">
            <div className="flex items-center justify-between"><h3 className="font-semibold">{t.name}</h3><span>{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</span></div>
            <p className="text-sm text-white/80 mt-2">{t.comment}</p>
            <button onClick={()=>del(t._id)} className="btn btn-ghost mt-3">Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
