import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, MonitorSmartphone, Users2 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import SectionHeading from '../components/SectionHeading'
import Benefits from '../components/Benefits'
import CTASection from '../components/CTASection'
import { courses } from '../data/courses'
import Reveal from '../components/Reveal'

const values = [
  {
    icon: <MonitorSmartphone size={22} />,
    title: 'Practical-First Training',
    desc: 'We believe skills are built by doing. That is why practice is the core of every course.',
  },
  {
    icon: <Users2 size={22} />,
    title: 'Student-First Classes',
    desc: 'Small batches, personal attention and focus on every student\u2019s progress — so no one gets left behind.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Career Guidance',
    desc: 'Along with skills, you get guidance in interviews, portfolios and professional communication.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About Us | Squad Digital Classes — Sikar',
    description:
      'About Squad Digital Classes (SDC), Sikar — a practical digital skills academy teaching Digital Marketing, Graphic Design, Video Editing, Video Shooting, Personality Development, Advanced AI Tools, Modeling Skills and Content Creation.',
  })

  return (
    <>
      <section className="section-pad relative pt-36 md:pt-44">
        <div className="container-sdc">
          <SectionHeading
            eyebrow="About SDC"
            title={
              <>
                Learn Skills, Build Your <span className="text-gradient-gold">CAREER</span>,
                <br />
                Shape Your FUTURE
              </>
            }
            subtitle="Squad Digital Classes (SDC) — a modern digital education academy in Sikar where today's digital skills are taught the practical way."
            stars
          />

          <div className="mx-auto mt-14 max-w-4xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800/60 p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_10%,rgba(255,255,255,0.04),transparent_70%)]" aria-hidden="true" />
                <h2 className="relative font-display text-2xl font-bold text-white sm:text-3xl">
                  OUR <span className="text-gradient-gold">VISION</span>
                </h2>
                <p className="relative mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Today's world is digital — and moving ahead in this digital world requires the
                  right skills. SDC's mission is to give the youth of Sikar a deep understanding of
                  digital media and practical skills — whether it is digital marketing, design,
                  video creation or modern AI tools.
                </p>
                <p className="relative mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Our classroom training is not just lectures — it focuses on real projects, live
                  practice and personal mentorship. Our goal: to move every student forward on the
                  successful{' '}
                  <span className="font-semibold text-white">Learn → Skill → Career</span> journey.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="h-full rounded-3xl border border-white/10 bg-navy-800/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                      {v.icon}
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-white">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad relative pt-0">
        <div className="container-sdc">
          <SectionHeading
            eyebrow="Our Programs"
            title={
              <>
                WHAT <span className="text-gradient-gold">WE TEACH</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  {course.number}. {course.title}
                  <ArrowRight size={14} className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Benefits />
      <CTASection />
    </>
  )
}
