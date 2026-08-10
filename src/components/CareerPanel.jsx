import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Rocket, TrendingUp, Trophy } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  { icon: <Trophy size={20} />, label: 'Learn', desc: 'Practical digital skills' },
  { icon: <TrendingUp size={20} />, label: 'Skill', desc: 'Build real portfolios' },
  { icon: <Rocket size={20} />, label: 'Career', desc: 'New opportunities' },
]

export default function CareerPanel() {
  const reduce = useReducedMotion()

  return (
    <section className="relative py-10 md:py-14">
      <div className="container-sdc">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800/70 p-6 shadow-card sm:p-10 md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_20%,rgba(255,255,255,0.05),transparent_70%)]" aria-hidden="true" />
            <span className="pointer-events-none absolute right-6 top-6 text-white/5" aria-hidden="true">
              <Trophy size={64} />
            </span>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
                  <Rocket size={13} /> Career Panel
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Now the barrier to your <span className="text-white">CAREER</span>'s
                  <br />
                  flight is <span className="text-white">gone!</span>
                </h2>
                <motion.ul
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="mt-6 space-y-3"
                >
                  <li className="flex items-start gap-3 text-base leading-relaxed text-slate-300 sm:text-lg">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                      ✓
                    </span>
                    <span>
                      Now you too can make your future{' '}
                      <span className="font-semibold text-white">golden</span> through{' '}
                      <span className="font-semibold text-white">DIGITAL</span>!
                    </span>
                  </li>
                </motion.ul>
              </div>

              <div className="relative">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  {steps.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: 0.15 + i * 0.15, duration: 0.55 }}
                      className="glass flex flex-1 items-center gap-4 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                        {s.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-lg font-bold text-white">{s.label}</p>
                        <p className="truncate text-xs text-slate-400 sm:text-sm">{s.desc}</p>
                      </div>
                      {i < steps.length - 1 && (
                        <ArrowRight size={16} className="ml-auto hidden shrink-0 text-slate-600 lg:block" aria-hidden="true" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
