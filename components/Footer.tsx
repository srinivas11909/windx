export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container py-10 text-sm text-white/70 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {process.env.BUSINESS_NAME || 'WindshieldPro'}. All rights reserved.</p>
        <p>Doorstep service • OEM glass • Insurance assistance</p>
      </div>
    </footer>
  )
}
