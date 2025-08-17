'use client'
import { useState } from 'react'

export default function BookPage() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setError(null); setOk(false)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    const res = await fetch('/api/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json(); setLoading(false)
    if (!res.ok) setError(data.error || 'Something went wrong'); else { setOk(true); form.reset() }
  }

  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Book a Slot</h1>
      <p className="text-muted mt-2">Choose date and time—our team will confirm shortly.</p>
      <form onSubmit={onSubmit} className="space-y-4 max-w-xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="block text-sm">Name</label><input name="name" required className="input"/></div>
          <div><label className="block text-sm">Phone</label><input name="phone" required className="input"/></div>
        </div>
        <div><label className="block text-sm">Email (optional)</label><input name="email" type="email" className="input"/></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="block text-sm">Service</label>
            <select name="service" className="select">
              <option>Windshield Repair</option><option>Windshield Replacement</option>
              <option>Side/Rear Glass</option><option>Sunroof Glass</option><option>ADAS Calibration</option>
            </select>
          </div>
          <div><label className="block text-sm">Date</label><input name="date" type="date" required className="input"/></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="block text-sm">Time</label><input name="time" type="time" required className="input"/></div>
          <div><label className="block text-sm">Note (optional)</label><input name="note" className="input"/></div>
        </div>
        <button disabled={loading} className="btn btn-primary">{loading ? 'Submitting...' : 'Request Booking'}</button>
        {ok && <p className="text-sm text-emerald-400">Thanks! Check your email for acknowledgement.</p>}
        {error && <p className="text-sm text-red-400">{error}</p>}
      </form>
    </section>
  )
}
