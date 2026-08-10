import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { COURSE_COLORS } from '../data/courses'

export default function CourseCard({ course, index = 0 }) {
  const c = COURSE_COLORS[course.color]
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

      <Link to={`/courses/${course.id}`} className="relative block" aria-label={`View ${course.title} course`}>
        <div className="relative m-3 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9]">
            <img
              src={`${import.meta.env.BASE_URL}courses/${course.id}.jpg`}
              alt={`${course.title} course`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" aria-hidden="true" />
            <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-navy-900/80 font-display text-sm font-bold text-white backdrop-blur-sm">
              {course.number}
            </span>
            <span className="absolute bottom-3 right-4 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
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
