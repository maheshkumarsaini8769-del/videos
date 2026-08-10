import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Phone, PhoneOff, Send, X } from 'lucide-react'
import { SITE } from '../data/courses'

export default function WhatsAppButton({ variant = 'pill', label = 'WhatsApp', className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(52,211,153,0.4)]'

  const content =
    variant === 'pill' ? (
      <span className={className.includes('w-full') ? 'w-full' : ''}>
        <Send size={16} />
        <span>{label}</span>
      </span>
    ) : (
      <span className={`flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full ${className.includes('w-full') ? '!h-auto' : ''}`}>
        <MessageCircle size={20} />
        {className.includes('w-full') && <span className="text-xs font-semibold">WhatsApp</span>}
      </span>
    )

  return (
    <div className="relative inline-flex" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`${base} ${variant === 'pill' ? 'px-6 py-3 text-sm' : 'h-14 w-14 rounded-full p-0'} ${className}`}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {content}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="WhatsApp status"
            className="absolute bottom-full right-0 z-40 mb-3 w-72 rounded-2xl border border-white/10 bg-navy-800/95 p-5 shadow-card backdrop-blur-xl"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-slate-500 transition hover:text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <p className="font-display text-sm font-semibold text-white">WhatsApp</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Our WhatsApp number will be confirmed soon.
              Please call us in the meantime.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={SITE.phoneHref} className="btn-flame w-full !py-2.5 text-sm">
                <Phone size={15} /> Call {SITE.phone}
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-emerald/50 hover:text-emerald"
              >
                <PhoneOff size={14} /> Not now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
