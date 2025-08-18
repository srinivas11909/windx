// import Link from 'next/link'
// export function Hero() {
//   const phone = process.env.BUSINESS_PHONE || '+919999999999'
//   return (
//     <section className="relative overflow-hidden">
//       <div className="absolute inset-0 -z-10 opacity-40 blur-3xl"
//            style={{ background: 'radial-gradient(800px 400px at 20% 10%, #0ea5e9 0%, transparent 60%), radial-gradient(600px 300px at 80% 0%, #38bdf8 0%, transparent 60%)' }} />
//       <div className="container py-20 md:py-28">
//         <div className="max-w-3xl space-y-6">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Crack or chip? <span className="text-brand block">We fix it fast.</span>
//           </h1>
//           <p className="text-lg text-white/80">
//             Same-day windshield repair & replacement. On-site service, OEM glass, insurance help.
//           </p>
//           <div className="flex gap-3">
//             <Link href="/book" className="btn btn-primary">Book Now</Link>
//             <a href={`tel:${phone}`} className="btn btn-ghost">Call {phone}</a>
//           </div>
//           <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white/70">
//             <li className="bg-white/5 rounded-2xl p-3">Doorstep Service</li>
//             <li className="bg-white/5 rounded-2xl p-3">OEM & OEE Glass</li>
//             <li className="bg-white/5 rounded-2xl p-3">Insurance Help</li>
//             <li className="bg-white/5 rounded-2xl p-3">Warranty Included</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";

export function Hero() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+919999999999";
  const swiperRef = useRef<SwiperClass | null>(null);


  const slides = [
    {
      title: "Crack or chip?",
      highlight: "We fix it fast.",
      desc: "Same-day windshield repair & replacement. On-site service, OEM glass, insurance help.",
    },
    {
      title: "Windshield Replacement",
      highlight: "Trusted by thousands.",
      desc: "High-quality OEM & OEE glass with warranty and doorstep service.",
    },
    {
      title: "Insurance Assistance",
      highlight: "We handle the paperwork.",
      desc: "Get your windshield claim settled easily with our support team.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient BG */}
      <div
        className="absolute inset-0 -z-10 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 10%, #0ea5e9 0%, transparent 60%), radial-gradient(600px 300px at 80% 0%, #38bdf8 0%, transparent 60%)",
        }}
        
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      />

      <Swiper
        modules={[Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container py-20 md:py-28">
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  {slide.title}{" "}
                  <span className="text-brand block">{slide.highlight}</span>
                </h1>
                <p className="text-lg text-white/80">{slide.desc}</p>
                <div className="flex gap-3">
                  <Link href="/book" className="btn btn-primary">
                    Book Now
                  </Link>
                  <a href={`tel:${phone}`} className="btn btn-ghost">
                    Call {phone}
                  </a>
                </div>
                <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white/70">
                  <li className="bg-white/5 rounded-2xl p-3">
                    Doorstep Service
                  </li>
                  <li className="bg-white/5 rounded-2xl p-3">OEM & OEE Glass</li>
                  <li className="bg-white/5 rounded-2xl p-3">Insurance Help</li>
                  <li className="bg-white/5 rounded-2xl p-3">Warranty Included</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <style jsx global>{`
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
     .swiper-pagination-bullet {
    background-color: #ccc; /* default dot color */
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #0070f3; /* active dot color */
  }
`}</style>
    </section>
  );
}
