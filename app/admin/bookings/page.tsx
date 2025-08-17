'use client'
import { useEffect, useState } from 'react'
type B = { _id: string; name: string; phone: string; email?: string; service: string; date: string; time: string; status: 'PENDING'|'CONFIRMED'|'REJECTED' }
export default function BookingsPage() {
  const [items, setItems] = useState<B[]>([])
  async function load(){ const d = await fetch('/api/bookings').then(r=>r.json()); setItems(d.items||[]) }
  useEffect(()=>{ load() },[])
  async function update(id: string, status: string){
    await fetch(`/api/bookings/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
    await load()
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold">Bookings</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-white/70"><tr><th className="py-2 pr-4">Customer</th><th className="py-2 pr-4">Service</th><th className="py-2 pr-4">When</th><th className="py-2 pr-4">Status</th><th className="py-2 pr-4">Actions</th></tr></thead>
          <tbody>
            {items.map(b=>(
              <tr key={b._id} className="border-t border-white/10">
                <td className="py-2 pr-4">{b.name} <span className="text-white/60">({b.phone})</span></td>
                <td className="py-2 pr-4">{b.service}</td>
                <td className="py-2 pr-4">{b.date} {b.time}</td>
                <td className="py-2 pr-4">{b.status}</td>
                <td className="py-2 pr-4 flex gap-2">
                  <button onClick={()=>update(b._id, 'CONFIRMED')} className="btn btn-primary">Confirm</button>
                  <button onClick={()=>update(b._id, 'REJECTED')} className="btn btn-ghost">Reject</button>
                </td>
              </tr>
            ))}
            {!items.length && <tr><td className="py-6 text-white/50" colSpan={5}>No bookings yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
