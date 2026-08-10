import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, Sparkles, Zap } from 'lucide-react'
import HeroVisual from './HeroVisual'
import { SITE } from '../data/courses'

function Word({ children, delay, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <span className="headline-mask">
      <motion.span
        className={`inline-block ${className}`}
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-sdc">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative z-10 text-center lg:text-left">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300"
            >
              <Sparkles size={13} className="text-slate-400" />
              SDC — Squad Digital Classes
            </motion.p>

            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-white">
              <Word delay={0.25} className="text-[clamp(3.2rem,11vw,7.5rem)] text-white">
                SQUAD
              </Word>
              <br />
              <Word delay={0.42} className="text-[clamp(1.7rem,5.5vw,3.4rem)] text-slate-300">
                DIGITAL CLASSES
              </Word>
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-base font-semibold text-slate-200 sm:text-xl lg:justify-start"
            >
              <span>Learn Skills</span>
              <span className="text-slate-600">|</span>
              <span>Build Careers</span>
              <span className="text-slate-600">|</span>
              <span>Shape Your Future</span>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link to="/contact#enquiry" className="btn-primary w-full sm:w-auto">
                <Zap size={17} fill="currentColor" />
                Enroll Now
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost w-full sm:w-auto">
                <Phone size={16} />
                Call {SITE.phone}
              </a>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
