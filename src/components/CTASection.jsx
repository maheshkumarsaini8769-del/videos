import { Phone, PhoneCall, UserRound } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { SITE } from '../data/courses'
import WhatsAppButton from './WhatsAppButton'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="section-pad relative">
      <div className="container-sdc">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800/60 px-6 py-12 text-center shadow-card sm:px-10 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" aria-hidden="true" />
            <span className="pointer-events-none absolute left-8 top-8 text-white/5" aria-hidden="true">
              <PhoneCall size={72} />
            </span>
            <span className="pointer-events-none absolute bottom-8 right-10 text-white/5" aria-hidden="true">
              <Phone size={80} />
            </span>

            <SectionHeading
              eyebrow="Call Now"
              title={
                <>
                  CALL US <span className="text-gradient-gold">TODAY</span>
                </>
              }
              subtitle="One call could change the start of your digital career."
            />

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-950">
                  <UserRound size={20} />
                </span>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Name</p>
                  <p className="font-display text-lg font-bold text-white">{SITE.name}</p>
                </div>
              </div>

              <a
                href={SITE.phoneHref}
                className="btn-flame w-full max-w-md !py-4 !text-lg"
              >
                <Phone size={20} />
                CALL NOW — {SITE.phone}
              </a>

              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <WhatsAppButton className="w-full sm:w-auto" label="Chat on WhatsApp" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
