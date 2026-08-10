import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'

export default function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-24 right-4 z-40 md:bottom-6 md:right-6"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
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
