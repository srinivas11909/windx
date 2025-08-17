import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFAB } from '@/components/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'Windshield Repair & Replacement | Fast, Trusted, Anywhere',
  description: 'Expert windshield repair and replacement. Doorstep service, OEM glass, insurance assistance. Book now!',
   icons: {
    icon: "/favicon.ico",          // Standard favicon
    shortcut: "/favicon.ico",      // For legacy browsers
    apple: "/apple-touch-icon.png" // (Optional) iOS PWA icon
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-28">{children}</main>
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  )
}
