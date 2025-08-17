'use client'
import { useEffect, useState } from 'react'
type G = { _id: string; title?: string; imageUrl: string; visible: boolean }
export default function GalleryAdmin() {
  const [items, setItems] = useState<G[]>([])
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  async function load(){ const d = await fetch('/api/gallery').then(r=>r.json()); setItems(d.items||[]) }
  useEffect(()=>{ load() },[])
  async function add(e: React.FormEvent){ e.preventDefault(); await fetch('/api/gallery',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title, imageUrl, visible: true })}); setTitle(''); setImageUrl(''); await load() }
  async function del(id: string){ await fetch(`/api/gallery/${id}`, { method: 'DELETE' }); await load() }
  return (
    <div>
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <form onSubmit={add} className="card mt-4 space-y-3 max-w-xl">
        <input placeholder="Title (optional)" value={title} onChange={e=>setTitle(e.target.value)} className="input"/>
        <input placeholder="Image URL" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} required className="input"/>
        <button className="btn btn-primary w-full">Add Image</button>
      </form>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {items.map(i=> (
          <div key={i._id} className="card">
            <img src={i.imageUrl} alt={i.title||'img'} className="w-full h-40 object-cover rounded-xl"/>
            <div className="mt-2 flex items-center justify-between">
              <div className="text-sm">{i.title}</div>
              <button onClick={()=>del(i._id)} className="btn btn-ghost">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
