'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const sp = useSearchParams()
  const from = sp.get('from') || '/admin'

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    //const res = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    //const data = await res.json(); setLoading(false)
    //if (!res.ok) return setError(data.error || 'Login failed')
    router.push(from)
  }

  return (
      <form onSubmit={login} className="mt-6 space-y-4">
        <div><label className="block text-sm">Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="input"/></div>
        <div><label className="block text-sm">Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="input"/></div>
        <button disabled={loading} className="btn btn-primary w-full">{loading ? 'Logging in...' : 'Login'}</button>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </form>
  )
}
