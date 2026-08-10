import { motion, useReducedMotion } from 'framer-motion'
import { Megaphone } from 'lucide-react'

export default function CampaignBanner() {
  const reduce = useReducedMotion()
  return (
    <section className="relative py-10 md:py-14">
      <div className="container-sdc">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 sm:flex-row sm:gap-4 md:px-10 md:py-6">
            <Megaphone size={22} className="shrink-0 text-slate-400" aria-hidden="true" />
            <p className="text-center font-display text-xl font-semibold text-white sm:text-left md:text-2xl">
              Now on <span className="rounded-md bg-white px-2.5 py-0.5 text-navy-950">ALL COURSES</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
