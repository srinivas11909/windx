# WindshieldPro Extended (Next.js + Tailwind + Admin + SEO + Booking)

**Features**
- Responsive marketing site (hero, services, CTAs, contact)
- WhatsApp click-to-chat floating button
- Contact form → saves to MongoDB + sends email (Nodemailer)
- Role-based admin (JWT cookie) & protected routes
- Admin: Leads, Bookings (confirm/reject with email), Gallery (URL-based), Testimonials, Service Areas (SEO pages)
- Dynamic route: `/services/[slug]` with metadata

## Quickstart
```bash
pnpm i
cp .env.example .env
# Fill MONGODB_URI, JWT_SECRET, SMTP_*, CONTACT_TO_EMAIL, FROM_EMAIL, BUSINESS_* values
pnpm seed
pnpm dev
```

## Deploy (Vercel)
- Add the same env vars in the dashboard.
- Ensure SMTP provider/domain is verified.

## Notes
- Gallery uses hosted image URLs (CDN, Cloudinary, etc.).
- Service page content accepts simple HTML (sanitize as needed).
- Booking uses native `<input type="date">` and `<input type="time">`.
