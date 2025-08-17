import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFAB() {
  const wa = process.env.WHATSAPP_NUMBER || '919999999999'
  const msg = encodeURIComponent('Hi, I need windshield help.')
  return (
    <a
      href={`https://wa.me/${wa}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
            <FaWhatsapp size={32} color="#fff" />

    </a>
  )
}
