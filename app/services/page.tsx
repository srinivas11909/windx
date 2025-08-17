import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Windshield Services | Repair, Replacement, Sunroof & Insurance Help",
  description:
    "Complete windshield services: chip & crack repair, windshield & door glass replacement, sunroof repairs, car glass maintenance, and insurance assistance.",
};

// Small, local UI helpers
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, sub }:{
  eyebrow?: string; title: string; sub?: string;
}) {
  return (
    <header className="space-y-2 text-center">
      {eyebrow && <p className="text-xs tracking-wide uppercase text-white/60">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
      {sub && <p className="text-white/70 max-w-2xl mx-auto">{sub}</p>}
    </header>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: "Windshield Repair",
      desc: "Fix chips & small cracks to restore strength and clarity—often in under 30 minutes.",
      bullets: ["Resin injection", "Stops spread", "Retains OEM seal"],
    },
    {
      title: "Windshield Replacement",
      desc: "OEM/OEE glass, precision fitment & strict curing for long-term safety.",
      bullets: ["OEM/OEE glass", "Warranty included", "Same-day service"],
    },
    {
      title: "Side & Rear Window",
      desc: "Door, quarter and back glass replacement with fast turnaround.",
      bullets: ["Shatter removal", "Defogger-safe", "Seals & trims"],
    },
    {
      title: "Sunroof Repair & Replacement",
      desc: "From leaks & tracks to full glass replacement and recalibration.",
      bullets: ["Leak fix", "Track service", "Glass replacement"],
    },
    {
      title: "Car Glass Maintenance",
      desc: "Wipers, water-repellent coats & squeak-free, streak-free clarity.",
      bullets: ["Wiper fitment", "Hydrophobic coat", "Squeak-free finish"],
    },
    {
      title: "Insurance Assistance",
      desc: "Cashless claims with leading insurers. Paperwork made easy.",
      bullets: ["Cashless network", "Paperwork help", "Quick approvals"],
    },
  ];

  const coverage: { brand: string; types: string[] }[] = [
    { brand: "Maruti Suzuki", types: ["Hatchback", "Sedan", "SUV", "MUV", "Van"] },
    { brand: "Hyundai", types: ["Hatchback", "Sedan", "SUV", "MUV"] },
    { brand: "Mahindra", types: ["Crossover", "SUV", "MUV"] },
    { brand: "Tata", types: ["Hatchback", "Sedan", "SUV", "MUV"] },
    { brand: "Toyota", types: ["Hatchback", "Sedan", "SUV", "MUV"] },
    { brand: "Škoda", types: ["Sedan", "SUV"] },
    { brand: "Nissan", types: ["SUV"] },
    { brand: "Citroën", types: ["Hatchback", "SUV"] },
    { brand: "Mercedes-Benz", types: ["Sedan", "SUV", "Convertible", "Coupe"] },
    { brand: "BMW", types: ["Sedan", "SUV", "Coupe"] },
    { brand: "Volvo", types: ["SUV", "MUV", "Sedan"] },
    { brand: "Kia", types: ["SUV", "MUV"] },
    { brand: "Renault", types: ["Hatchback", "Sedan", "SUV", "MUV"] },
    { brand: "Volkswagen", types: ["Hatchback", "Sedan", "SUV"] },
    { brand: "MG", types: ["SUV"] },
    { brand: "Jeep", types: ["SUV"] },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(900px 400px at 20% 10%, #0ea5e9 0%, transparent 60%), radial-gradient(700px 300px at 80% 0%, #38bdf8 0%, transparent 60%)",
          }}
        />
        <div className="container py-16 md:py-24 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Complete <span className="text-brand">Windshield Services</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Fast, reliable and on-site. From chip repairs to full replacements, sunroof
            service, maintenance and insurance assistance—we’ve got your glass covered.
          </p>
          <div className="flex gap-3">
            <Link href="/book" className="btn btn-primary">Book a Slot</Link>
            <Link href="/contact" className="btn btn-ghost">Get a Quote</Link>
          </div>
          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs text-white/80">
            {[
              "Doorstep Service",
              "OEM & OEE Glass",
              "Insurance Help",
              "ADAS Calibration",
              "Warranty",
              "Same-day Turnaround",
            ].map((t) => (
              <li key={t} className="bg-white/5 rounded-xl py-2 px-3 text-center border border-white/10">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="container py-14 md:py-16 space-y-10">
        <SectionTitle
          eyebrow="What We Do"
          title="Windshield Repair, Replacement & More"
          sub="Pick what you need—our advisors will guide you to the safest and most cost-effective option."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card group hover:border-brand/50 transition">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <span className="text-xs text-white/60">Pro service</span>
              </div>
              <p className="text-sm text-white/80 mt-2">{s.desc}</p>
              <ul className="mt-4 grid gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-white/70">• {b}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/book" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Coverage */}
      <section className="container py-14 md:py-16 space-y-10">
        <SectionTitle
          eyebrow="Windshield Repair for All Types of Vehicles"
          title="We service popular brands across body styles"
          sub="From daily hatchbacks to luxury coupes and SUVs—our technicians handle them all."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {coverage.map(({ brand, types }) => (
            <div key={brand} className="card">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-lg font-semibold">{brand}</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <Pill key={brand + t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Link href="/contact" className="btn btn-ghost">Don’t see your car? Ask us</Link>
        </div>
      </section>

      {/* Insurance CTA */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(800px 300px at 50% 10%, #0ea5e9 0%, transparent 60%)",
          }}
        />
        <div className="container py-14 md:py-16">
          <div className="card md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Cashless Insurance Assistance</h3>
              <p className="text-sm text-white/80 mt-2">
                We coordinate paperwork and claims with leading insurers for a smooth, cashless experience.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link href="/contact" className="btn btn-primary">Start Claim</Link>
              <Link href="/gallery" className="btn btn-ghost">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-14 md:py-20 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-extrabold">Ready to fix that glass?</h3>
        <p className="text-white/70">Same-day slots available. Doorstep service in your city.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/book" className="btn btn-primary">Book a Slot</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to an Expert</Link>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoGlassShop",
            name: process.env.BUSINESS_NAME || "WindshieldPro",
            url: "https://example.com/services",
            areaServed: "India",
            serviceType: services.map((s) => s.title),
          }),
        }}
      />
    </>
  );
}
