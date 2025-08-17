'use client'
import Link from 'next/link'

export default function AdminHome() {
  const items = [
    { href: '/admin/leads', name: 'Leads' },
    { href: '/admin/bookings', name: 'Bookings' },
    { href: '/admin/gallery', name: 'Gallery' },
    { href: '/admin/testimonials', name: 'Testimonials' },
    { href: '/admin/services', name: 'Service Areas' },
  ]
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin</h1>
        <form action="/api/logout" method="POST"><button className="btn btn-ghost">Logout</button></form>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {items.map(i => <Link key={i.href} href={i.href} className="card hover:border-brand/50">{i.name}</Link>)}
      </div>
    </div>
  )
}
