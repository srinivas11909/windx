import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import {InsurancePartners} from "@/components/InsurancePartners";

import Link from 'next/link'

export default function HomePage() {
  const services = [
    { title: 'Windshield Repair', desc: 'Quick crack & chip repair that restores strength and clarity.' },
    { title: 'Windshield Replacement', desc: 'OEM/OEE glass with warranty. Same-day replacement.' },
    { title: 'Door/Rear Glass', desc: 'All vehicle glass replaced by trained technicians.' },
    { title: 'ADAS Calibration', desc: 'Camera calibration after replacement for ADAS-equipped cars.' },
  ]
  return (
    <>
      <Hero />
      <section id="services" className="container py-16 space-y-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
        <div className="mt-8">
          <Link href="/book" className="btn btn-primary">Book a slot</Link>
        </div>
      </section>
      <InsurancePartners />
    </>
  )
}
