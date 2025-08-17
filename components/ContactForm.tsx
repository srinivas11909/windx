'use client'
import { useState } from 'react'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setError(null); setOk(false)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json(); setLoading(false)
    if (!res.ok) setError(data.error || 'Something went wrong'); else { setOk(true); form.reset() }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm text-white/80">Name</label><input name="name" required className="input" placeholder="Your name"/></div>
        <div><label className="block text-sm text-white/80">Email</label><input name="email" type="email" required className="input" placeholder="you@email.com"/></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm text-white/80">Phone</label><input name="phone" required className="input" placeholder="+91 98xxxxxxx"/></div>
        <div><label className="block text-sm text-white/80">Service</label>
          <select name="service" className="select">
            <option>Windshield Repair</option><option>Windshield Replacement</option>
            <option>Side/Rear Glass</option><option>Sunroof Glass</option><option>ADAS Calibration</option>
          </select>
        </div>
      </div>
      <div><label className="block text-sm text-white/80">Message (optional)</label><textarea name="message" rows={4} className="input" placeholder="Tell us about the damage"/></div>
      <button disabled={loading} className="btn btn-primary">{loading ? 'Sending...' : 'Send request'}</button>
      {ok && <p className="text-sm text-emerald-400">Thanks! We’ll reach you shortly.</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  )
}
