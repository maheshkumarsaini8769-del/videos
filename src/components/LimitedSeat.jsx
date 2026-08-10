import { motion, useReducedMotion } from 'framer-motion'
import { Clock3 } from 'lucide-react'
import Reveal from './Reveal'

export default function LimitedSeat() {
  const reduce = useReducedMotion()
  return (
    <section className="py-8 md:py-10">
      <div className="container-sdc">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 sm:flex-row md:py-7">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
              <span className="absolute inset-0 rounded-2xl border-2 border-white/15 animate-pulse-ring" aria-hidden="true" />
              <Clock3 size={28} />
            </div>
            <motion.div
              className="text-center sm:text-left"
              animate={reduce ? undefined : { opacity: [1, 0.8, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-display text-xl font-bold tracking-wide text-white sm:text-2xl">LIMITED SEAT</p>
              <p className="mt-1 font-display text-sm font-semibold text-slate-300 sm:text-base">
                Come early — <span className="text-white">ENROLL</span> soon!
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
