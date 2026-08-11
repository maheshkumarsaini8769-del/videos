import { MessageCircle, Send } from 'lucide-react'
import { SITE } from '../data/courses'

const WA_LINK = `https://wa.me/91${SITE.phone}?text=${encodeURIComponent(
  'Hi SDC! I want to know more about your courses.'
)}`

export default function WhatsAppButton({ variant = 'pill', label = 'WhatsApp', className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(52,211,153,0.4)]'

  if (variant === 'pill') {
    return (
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${label}`}
        className={`${base} px-6 py-3 text-sm ${className}`}
      >
        <Send size={16} />
        <span>{label}</span>
      </a>
    )
  }

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp`}
      className={`${base} h-14 w-14 rounded-full p-0 ${className}`}
    >
      <MessageCircle size={20} />
    </a>
  )
}