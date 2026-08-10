import { motion, useReducedMotion } from 'framer-motion'
import {
  Award,
  Briefcase,
  GraduationCap,
  Infinity as InfinityIcon,
  Rocket,
  Users,
  Wrench,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { benefits } from '../data/courses'

const ICONS = {
  GraduationCap,
  Wrench,
  Rocket,
  Award,
  Briefcase,
  Users,
  Infinity: InfinityIcon,
}

export default function Benefits() {
  const reduce = useReducedMotion()

  return (
    <section id="benefits" className="section-pad relative">
      <div className="container-sdc">
        <SectionHeading
          eyebrow="Why SDC"
          title={
            <>
              7 <span className="text-gradient-gold">BENEFITS</span> FOR EVERY STUDENT
            </>
          }
          subtitle="Every course at SDC comes with a complete learning experience — not just classes."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = ICONS[b.icon] || Award
            return (
              <motion.div
                key={b.title}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.06] sm:p-6"
              >
                <span className="pointer-events-none absolute -right-4 -top-4 font-display text-6xl font-bold text-white/5 transition-colors duration-300 group-hover:text-white/10" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-sm font-bold leading-snug text-white sm:text-base">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{b.desc}</p>
              </motion.div>
            )
          })}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="hidden items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-5 sm:p-6 xl:flex"
          >
            <p className="text-center font-display text-sm font-semibold text-slate-300">
              SDC — a new beginning
              <br />
              for your future
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
