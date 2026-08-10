import { motion, useReducedMotion } from 'framer-motion'
import { Building2, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { companies } from '../data/courses'
import Reveal from './Reveal'

export default function CompanyStrip() {
  const reduce = useReducedMotion()

  return (
    <section className="section-pad relative">
      <div className="container-sdc">
        <SectionHeading
          eyebrow="Career Opportunity"
          title={
            <>
              Get a <span className="text-gradient-gold">GOLDEN OPPORTUNITY</span>
              <br />
              after your course
            </>
          }
          subtitle={
            <>
              The chance to work with big <span className="font-semibold text-white">companies</span>!
            </>
          }
        />

        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-navy-800/50 p-8 md:p-12">
            <span className="pointer-events-none absolute -left-10 -top-10 text-white/5" aria-hidden="true">
              <Building2 size={140} />
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {companies.map((company, i) => (
                <motion.span
                  key={company.name}
                  initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 md:px-8 md:py-4"
                >
                  <span className={`font-display text-xl font-bold md:text-2xl ${company.color}`}>
                    {company.name}
                  </span>
                </motion.span>
              ))}
            </div>
            <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-slate-500">
              <ShieldCheck size={14} className="mt-0.5 shrink-0 text-slate-400" />
              Company logos are presented as per marketing material. We do not claim guaranteed jobs
              at any company — placement support is our commitment.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
