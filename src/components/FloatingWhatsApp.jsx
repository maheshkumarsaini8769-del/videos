import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { SITE } from '../data/courses'

export default function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-6 right-4 z-40 flex flex-col items-center gap-3 md:bottom-6 md:right-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={SITE.phoneHref}
        aria-label={`Call ${SITE.phone}`}
        className="group relative flex h-14 items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-navy-800 to-navy-950 py-2 pl-3 pr-5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-xl transition hover:scale-105 hover:border-rose-400/40 hover:shadow-[0_10px_32px_rgba(244,63,94,0.25)] active:scale-95 md:hidden"
      >
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-white/10 blur-sm animate-shine-sweep"
          aria-hidden="true"
        />
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-700 shadow-[0_0_12px_rgba(244,63,94,0.5)]">
          <Phone size={16} className="animate-ring-shake" />
        </span>
        <span className="relative font-display text-sm font-bold uppercase tracking-wider">
          Call
        </span>
      </a>
      <div className="relative">
        <span
          className="pointer-events-none absolute -inset-1 rounded-full border-2 border-emerald-400/40 animate-pulse-ring"
          aria-hidden="true"
        />
        <WhatsAppButton variant="round" label="Chat on WhatsApp" />
      </div>
    </motion.div>
  )
}
