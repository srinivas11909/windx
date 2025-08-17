'use client'
import { useEffect, useState } from 'react'
type Lead = { _id: string; name: string; email: string; phone: string; message?: string; createdAt: string }
export default function LeadsPage() {
  const [items, setItems] = useState<Lead[]>([])
  useEffect(()=>{ fetch('/api/leads').then(r=>r.json()).then(d=>setItems(d.leads||[])) },[])
  return (
    <div>
      <h2 className="text-2xl font-semibold">Leads</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-white/70"><tr><th className="py-2 pr-4">Name</th><th className="py-2 pr-4">Email</th><th className="py-2 pr-4">Phone</th><th className="py-2 pr-4">Message</th><th className="py-2 pr-4">Created</th></tr></thead>
          <tbody>
            {items.map(l=>(<tr key={l._id} className="border-t border-white/10"><td className="py-2 pr-4">{l.name}</td><td className="py-2 pr-4">{l.email}</td><td className="py-2 pr-4">{l.phone}</td><td className="py-2 pr-4 max-w-md">{l.message}</td><td className="py-2 pr-4">{new Date(l.createdAt).toLocaleString()}</td></tr>))}
            {!items.length && <tr><td className="py-6 text-white/50" colSpan={5}>No leads yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
