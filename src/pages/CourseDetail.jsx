import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Hammer,
  Layers,
  Lightbulb,
  Phone,
  Rocket,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { COURSE_COLORS, getCourseById } from '../data/courses'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import WhatsAppButton from '../components/WhatsAppButton'
import { SITE } from '../data/courses'

function ListGrid({ icon: Icon, title, items, c, iconClass }) {
  return (
    <Reveal>
      <div className="h-full rounded-3xl border border-white/10 bg-navy-800/60 p-7">
        <div className="flex items-center gap-3">
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}>
            <Icon size={21} />
          </span>
          <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        </div>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
              <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${c.text}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

function Module({ index, module, c }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 transition-colors hover:border-white/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold ${c.bg} text-navy-950`}>
          {index + 1}
        </span>
        <span className="flex-1 font-display text-sm font-semibold text-white sm:text-base">
          {module.title}
        </span>
        <ChevronDown
          size={17}
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-400 sm:px-6">
              {module.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Faq({ faq, c }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3">
      {faq.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="font-display text-sm font-semibold text-white sm:text-base">{f.q}</span>
              <ChevronDown
                size={17}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-400 sm:px-6">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = getCourseById(id)
  const reduce = useReducedMotion()

  usePageMeta({
    title: course
      ? `${course.title} Course | Squad Digital Classes — Sikar`
      : 'Course | Squad Digital Classes',
    description: course
      ? `Learn ${course.title} at Squad Digital Classes, Sikar. ${course.short}. Duration ${course.duration}. 100% practical training with live projects. Call ${SITE.phone}.`
      : '',
  })

  if (!course) {
    return <Navigate to="/courses" replace />
  }

  const c = COURSE_COLORS[course.color]

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-32 md:pt-40">
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient}`} aria-hidden="true" />
        <div className="container-sdc relative">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-gold"
          >
            <ArrowLeft size={15} /> All Courses
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-xl ${c.bg} px-3 py-1 font-display text-sm font-bold text-navy-950`}>
                  COURSE {course.number}
                </span>
                <span className="chip">
                  <Clock3 size={12} className="mr-1.5" />
                  DURATION: {course.duration}
                </span>
              </div>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                {course.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 || i === 2 ? c.text : ''}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                {course.overview}
              </motion.p>
              {course.note && (
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-4 flex max-w-2xl items-start gap-2 rounded-2xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-gold-300"
                >
                  <Lightbulb size={16} className="mt-0.5 shrink-0" />
                  {course.note}
                </motion.p>
              )}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href={SITE.phoneHref} className="btn-flame">
                  <Phone size={16} /> Call Now
                </a>
                <WhatsAppButton className="sm:flex-none" />
                <a href="#enquiry" className="btn-ghost">
                  <Zap size={16} /> Enroll
                </a>
              </motion.div>
            </div>

            <Reveal delay={0.15}>
              <div className={`relative overflow-hidden rounded-3xl border ${c.border} bg-navy-800/70 p-7`}>
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient}`} aria-hidden="true" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-gold">At a Glance</p>
                <ul className="relative mt-5 space-y-3.5">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Clock3 size={17} className={c.text} /> Duration: {course.duration}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Layers size={17} className={c.text} /> {course.modules.length} learning modules
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Wrench size={17} className={c.text} /> {course.tools.length} practical tools
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Rocket size={17} className={c.text} /> {course.projects.length} live projects
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Target size={17} className={c.text} /> {course.skills.length} career skills
                  </li>
                </ul>
                <div className="relative mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
                  {course.topics.map((t) => (
                    <span key={t} className={`chip ${c.text} border-transparent`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad relative pt-10">
        <div className="container-sdc space-y-8">
          <ListGrid
            icon={BookOpen}
            title="What You Will Learn"
            items={course.learn}
            c={c}
            iconClass={`${c.bg} text-navy-950`}
          />

          <Reveal>
            <div>
              <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-white sm:text-3xl">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} text-navy-950`}>
                  <Layers size={19} />
                </span>
                Course Modules
              </h2>
              <div className="space-y-3">
                {course.modules.map((m, i) => (
                  <Module key={m.title} index={i} module={m} c={c} />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ListGrid
              icon={Wrench}
              title="Tools You'll Use"
              items={course.tools}
              c={c}
              iconClass={`${c.bg} text-navy-950`}
            />
            <ListGrid
              icon={Hammer}
              title="Practical Projects"
              items={course.projects}
              c={c}
              iconClass={`${c.bg} text-navy-950`}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ListGrid
              icon={Sparkles}
              title="Skills Gained"
              items={course.skills}
              c={c}
              iconClass={`${c.bg} text-navy-950`}
            />
            <ListGrid
              icon={Briefcase}
              title="Career Applications"
              items={course.careers}
              c={c}
              iconClass={`${c.bg} text-navy-950`}
            />
          </div>

          <Reveal>
            <div className="pt-4">
              <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-white sm:text-3xl">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} text-navy-950`}>
                  <Target size={19} />
                </span>
                Frequently Asked Questions
              </h2>
              <Faq faq={course.faq} c={c} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10">
        <div className="container-sdc">
          <Reveal>
            <div className={`relative overflow-hidden rounded-3xl border ${c.border} p-8 text-center md:p-12`}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient}`} aria-hidden="true" />
              <h2 className="relative font-display text-2xl font-bold text-white sm:text-3xl">
                Enroll in <span className="text-gradient-gold">{course.title}</span>
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Contact us today — learn about admissions and fee details.
              </p>
              <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={SITE.phoneHref} className="btn-flame">
                  <Phone size={16} /> Call {SITE.phone}
                </a>
                <WhatsAppButton />
                <a href="#enquiry" className="btn-ghost">
                  <Zap size={16} /> Enquire Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EnquiryForm />
    </>
  )
}
