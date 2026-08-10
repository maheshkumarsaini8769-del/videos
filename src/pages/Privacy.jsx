import { usePageMeta } from '../hooks/usePageMeta'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { SITE } from '../data/courses'

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you submit the enquiry form on this website, we collect the name, phone number, selected course and any message you choose to provide. This information is used only to respond to your enquiry.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your details are used to contact you about courses, admissions and enquiries at Squad Digital Classes. We do not sell, rent or share your personal information with third parties for marketing purposes.',
  },
  {
    title: '3. Phone Calls',
    body: 'By submitting your phone number, you agree that our team may contact you by phone or message to discuss your enquiry.',
  },
  {
    title: '4. Data Security',
    body: 'We take reasonable measures to protect the information you provide. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '5. Third-Party Links',
    body: 'This website may link to external services such as Google Maps and telephony links. We are not responsible for the privacy practices of external websites.',
  },
  {
    title: '6. Contact Us',
    body: `For any privacy-related questions, contact us at ${SITE.phone} or visit us at ${SITE.address[0]}, ${SITE.address[1]}.`,
  },
]

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy | Squad Digital Classes',
    description: 'Privacy policy of Squad Digital Classes (SDC), Sikar — how enquiry information is collected and used.',
  })

  return (
    <section className="section-pad relative pt-36 md:pt-44">
      <div className="container-sdc max-w-3xl">
        <SectionHeading
          eyebrow="Legal"
          title={
            <>
              Privacy <span className="text-gradient-gold">Policy</span>
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
