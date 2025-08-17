// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// export function Navbar() {
//   const pathname = usePathname()
//   const links = [
//     { href: '/', label: 'Home' },
//     { href: '/gallery', label: 'Gallery' },
//     { href: '/testimonials', label: 'Testimonials' },
//     { href: '/book', label: 'Book' },
//     { href: '/contact', label: 'Contact' },
//     { href: '/admin', label: 'Admin' },
//   ]
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
//       <div className="container flex items-center justify-between h-16">
//         <Link href="/" className="text-xl font-bold tracking-tight">{process.env.NEXT_PUBLIC_BUSINESS_NAME || 'WINDDX'}<span className="text-brand">Pro</span></Link>
//         <nav className="flex gap-6">
//           {links.map(l => (
//             <Link key={l.href} href={l.href}
//               className={`text-sm hover:text-white/90 ${pathname === l.href ? 'text-white' : 'text-white/70'}`}>
//               {l.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   )
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
//import WindDX from "public/windx-logo.svg"
import Image from "next/image";


export  function Navbar() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false);
  const pathname = usePathname()

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setClosing(false)
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const closeDrawer = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300); // matches transition duration
  };
  return <>
    <header className="fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur border-b border-white/10 bg-slate-950/60 !bg-[#fcd343]">
      {/* 🔹 Top Contact Bar */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#bd2425]" />
              <a href="mailto:info@windshieldmasters.co.in" className="hover:underline text-sm font-bold text-gray-900">
                info@windshieldmasters.co.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-[#bd2425]" />
              <span className="text-gray-900 text-sm font-bold">HBR Layout, Vishakapatnam</span>
            </div>
          </div>
          <div className="flex gap-4 text-gray-700">
            <Link href="#"><FaFacebookF color="#bd2425"/></Link>
            <Link href="#"><FaTwitter color="#bd2425"/></Link>
            <Link href="#"><FaLinkedinIn color="#bd2425"/></Link>
            <Link href="#"><FaInstagram color="#bd2425"/></Link>
          </div>
        </div>
      </div>

      {/* 🔹 Main Nav */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold text-red-600">
          <Link href={'/'}>
            {/* <Image src={'/windx-logo.svg'} alt="winddx" width={120} height={50}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width={'115px'}>
              <path d="M180 40 Q300 20 420 40 L400 120 Q300 130 200 120 Z"
                    fill="none" stroke="#0047AB" strokeWidth="12" strokeLinejoin="round" />
              <line x1="240" y1="60" x2="260" y2="80" stroke="#0047AB" strokeWidth="8" strokeLinecap="round" />
              <text x="100" y="220" fontFamily="Arial Black, sans-serif" fontSize="90" fill="#0047AB">WIND</text>
              <text x="380" y="220" fontFamily="Arial Black, sans-serif" fontSize="90" fill="#D32F2F">X</text>
              <text x="130" y="270" fontFamily="Arial, sans-serif" fontSize="28" fill="#111">
                Clarity. Safety. Quality.
              </text>
            </svg>
          </Link>
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li><Link href="/" className={`text-gray-700 hover:text-red-600 transition-colors ${
        pathname === "/" ? "text-red-600 font-semibold border-b-2 border-red-600" : ""
      }`}>Home</Link></li>
          <li><Link href="/services" className={`text-gray-700 hover:text-red-600 transition-colors ${
        pathname === "/services" ? "text-red-600 font-semibold border-b-2 border-red-600" : ""
      }`}>Services</Link></li>
          <li><Link href="/gallery" className={`text-gray-700 hover:text-red-600 transition-colors ${
        pathname === "/gallery" ? "text-red-600 font-semibold border-b-2 border-red-600" : ""
      }`}>Gallery</Link></li>
          <li><Link href="/contact" className={`text-gray-700 hover:text-red-600 transition-colors ${
        pathname === "/contact" ? "text-red-600 font-semibold border-b-2 border-red-600" : ""
      }`}>Contact</Link></li>
        </ul>
        <button onClick={() => setTimeout(() => {setOpen(true)}, 300)} className="md:hidden px-2 py-1 border border-gray-900 rounded text-gray-800">☰</button>
      </nav>
    </header>

      {/* Drawer + Backdrop OUTSIDE header */}
      {(open || closing) && (
        <div className="fixed inset-0 z-[55] md:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 text-black/50 transition-opacity duration-300 ${
              open && !closing ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <div
            className={`absolute top-0 left-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col transform transition-transform duration-300 ${
              open && !closing ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={closeDrawer}
              className="self-end mb-6 text-xl font-bold text-black"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link href="/" onClick={closeDrawer} className={`${
    pathname === "/"
      ? "text-red-600 font-semibold border-b-2 border-red-600"
      : "text-gray-700 hover:text-red-600"
  } transition-colors`}>Home</Link>
              <Link href="/services" className={`${
    pathname === "/services"
      ? "text-red-600 font-semibold border-b-2 border-red-600"
      : "text-gray-700 hover:text-red-600"
  } transition-colors`} onClick={closeDrawer}>Services</Link>
              <Link href="/gallery" className={`${
    pathname === "/gallery"
      ? "text-red-600 font-semibold border-b-2 border-red-600"
      : "text-gray-700 hover:text-red-600"
  } transition-colors`} onClick={closeDrawer}>Gallery</Link>
              <Link href="/contact" className={`${
    pathname === "/contact"
      ? "text-red-600 font-semibold border-b-2 border-red-600"
      : "text-gray-700 hover:text-red-600"
  } transition-colors`} onClick={closeDrawer}>Contact</Link>
            </nav>
            <div className="mt-auto flex gap-4 pt-6 border-t text-red-600">
              <Link href="#"><FaFacebookF color="#bd2425"/></Link>
              <Link href="#"><FaTwitter color="#bd2425" /></Link>
              <Link href="#"><FaLinkedinIn  color="#bd2425"/></Link>
              <Link href="#"><FaInstagram color="#bd2425" /></Link>
            </div>
          </div>
        </div>
      )}
    </>
}
