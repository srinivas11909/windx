import { ContactForm } from '@/components/ContactForm'
export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Get in touch</h1>
      <p className="text-white/70 mt-2">Share a few details and we’ll call you back.</p>
      <div className="mt-8"><ContactForm /></div>
    </section>
  )
}
