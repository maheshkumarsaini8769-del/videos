import { usePageMeta } from '../hooks/usePageMeta'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { SITE } from '../data/courses'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing this website, you agree to these terms of use. If you do not agree, please do not use this website.',
  },
  {
    title: '2. Information Accuracy',
    body: 'We make every effort to keep course information accurate and up to date. Course content, duration and schedules may change; please confirm current details by calling us.',
  },
  {
    title: '3. No Guaranteed Outcomes',
    body: 'Courses provide training, skills and placement support. We do not guarantee specific jobs, placements or income outcomes. Company logos shown on this website reflect marketing material and do not guarantee employment at those companies.',
  },
  {
    title: '4. Course Enrollment',
    body: 'Enrollment is subject to seat availability and our admission terms discussed at the time of enquiry. Admission is confirmed only after completing the official enrollment process.',
  },
  {
    title: '5. Certificates',
    body: 'Course completion certificates are provided to students who successfully complete the course requirements as defined by the academy.',
  },
  {
    title: '6. Intellectual Property',
    body: 'All content on this website, including text, logos and design, belongs to Squad Digital Classes and may not be copied or reused without permission.',
  },
  {
    title: '7. Contact',
    body: `For questions about these terms, contact us at ${SITE.phone} or visit us at ${SITE.address[0]}, ${SITE.address[1]}.`,
  },
]

export default function Terms() {
  usePageMeta({
    title: 'Terms of Use | Squad Digital Classes',
    description: 'Terms of use for the Squad Digital Classes (SDC) website.',
  })

  return (
    <section className="section-pad relative pt-36 md:pt-44">
      <div className="container-sdc max-w-3xl">
        <SectionHeading
          eyebrow="Legal"
          title={
            <>
              Terms of <span className="text-gradient-gold">Use</span>
            </>
          }
          subtitle="Last updated: January 2026"
        />
        <div className="mt-12 space-y-5">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-navy-800/60 p-6">
                <h2 className="font-display text-lg font-bold text-white">{s.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
