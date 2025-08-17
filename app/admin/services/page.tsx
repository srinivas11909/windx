'use client'
import { useEffect, useState } from 'react'
type S = { _id: string; name: string; slug: string; description: string; seoTitle?: string; seoDescription?: string }
export default function ServicesAdmin() {
  const [items, setItems] = useState<S[]>([])
  const [form, setForm] = useState<S>({ _id:'', name:'', slug:'', description:'', seoTitle:'', seoDescription:'' })
  async function load(){ const d = await fetch('/api/services').then(r=>r.json()); setItems(d.items||[]) }
  useEffect(()=>{ load() },[])
  async function add(e: React.FormEvent){ e.preventDefault(); await fetch('/api/services',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) }); setForm({ _id:'', name:'', slug:'', description:'', seoTitle:'', seoDescription:'' }); await load() }
  async function del(id: string){ await fetch(`/api/services/${id}`, { method: 'DELETE' }); await load() }
  return (
    <div>
      <h2 className="text-2xl font-semibold">Service Areas (SEO)</h2>
      <form onSubmit={add} className="card mt-4 space-y-3">
        <input placeholder="Name (e.g., Windshield Replacement in Hyderabad)" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required className="input"/>
        <input placeholder="Slug (windshield-replacement-hyderabad)" value={form.slug} onChange={e=>setForm({ ...form, slug: e.target.value })} required className="input"/>
        <textarea placeholder="HTML Description (supports basic HTML)" value={form.description} onChange={e=>setForm({ ...form, description: e.target.value })} required className="input"/>
        <input placeholder="SEO Title" value={form.seoTitle||''} onChange={e=>setForm({ ...form, seoTitle: e.target.value })} className="input"/>
        <input placeholder="SEO Description" value={form.seoDescription||''} onChange={e=>setForm({ ...form, seoDescription: e.target.value })} className="input"/>
        <button className="btn btn-primary w-full">Add Service Page</button>
      </form>
      <div className="mt-6">
        {items.map(s => (
          <div key={s._id} className="card mb-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{s.name}</div>
                <a className="text-sm text-brand underline" href={`/services/${s.slug}`} target="_blank">/services/{s.slug}</a>
              </div>
              <button onClick={()=>del(s._id)} className="btn btn-ghost">Delete</button>
            </div>
          </div>
        ))}
        {!items.length && <p className="text-white/60">No service pages yet.</p>}
      </div>
    </div>
  )
}
