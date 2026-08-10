import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BarChart3, Camera, Clapperboard, Palette, PenTool, PersonStanding, Sparkles, Video, Wand2 } from 'lucide-react'
import { COURSE_COLORS } from '../data/courses'

const ICONS = {
  'digital-marketing': BarChart3,
  'graphic-design': Palette,
  'video-editing': Video,
  'video-shooting': Camera,
  'personality-development': PenTool,
  'advanced-tools': Wand2,
  'modeling-skills': PersonStanding,
  'content-creation': Clapperboard,
}

export default function CourseCard({ course, index = 0 }) {
  const c = COURSE_COLORS[course.color]
  const Icon = ICONS[course.id] || Sparkles
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-navy-800/60 transition-colors duration-300 hover:border-white/25"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} aria-hidden="true" />
      <span className={`pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${c.bg}/15`} aria-hidden="true" />

      <Link to={`/courses/${course.id}`} className="relative block" aria-label={`View ${course.title} course`}>
        <div className="relative m-3 overflow-hidden rounded-2xl">
          <div className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${c.gradient}`}>
            <div className="absolute inset-0 bg-radial-grid bg-[size:26px_26px] opacity-40" aria-hidden="true" />
            <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-navy-900/80 font-display text-sm font-bold text-white backdrop-blur-sm">
              {course.number}
            </span>
            <motion.span
              className={`flex h-20 w-20 items-center justify-center rounded-3xl border ${c.border} bg-navy-900/80 text-white shadow-card backdrop-blur-sm transition-transform duration-500 group-hover:scale-110`}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
            >
              <Icon size={38} className={c.text} />
            </motion.span>
            <span className="absolute bottom-3 right-4 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
              SDC
            </span>
          </div>
        </div>

        <div className="px-6 pb-6">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            {course.number}. <span className={c.text}>{course.title}</span>
          </h3>
          <p className="mt-2 flex flex-wrap gap-1.5">
            {course.topics.slice(0, 6).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              DURATION: <span className="text-slate-200">{course.duration}</span>
            </span>
            <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.text} transition-transform duration-300 group-hover:translate-x-1`}>
              VIEW COURSE <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
