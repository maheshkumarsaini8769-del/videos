import { ExternalLink, MapPin, Navigation, Phone, UserRound } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { SITE } from '../data/courses'
import Reveal from './Reveal'

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="container-sdc">
        <SectionHeading
          eyebrow="Visit Us"
          title={
            <>
              Come <span className="text-gradient-gold">MEET US</span>
            </>
          }
          subtitle="SDC classroom training at Sikar — come, see and know."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-navy-800/60 p-7 md:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(255,255,255,0.04),transparent_70%)]" aria-hidden="true" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                <MapPin size={26} />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">ADDRESS</p>
              <address className="mt-3 space-y-1 font-display text-xl font-bold leading-snug text-white not-italic sm:text-2xl">
                <p>{SITE.address[0]}</p>
                <p>{SITE.address[1]}</p>
              </address>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-7 w-fit"
              >
                <Navigation size={16} />
                Open in Google Maps
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <div className="flex flex-1 items-center gap-5 rounded-3xl border border-white/10 bg-navy-800/60 p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-950">
                  <Phone size={26} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">CALL US</p>
                  <a href={SITE.phoneHref} className="mt-2 block font-display text-xl font-bold text-white transition hover:text-slate-300 sm:text-2xl">
                    {SITE.phone}
                  </a>
                  <p className="mt-1 text-sm text-slate-400">Course enquiry &amp; admission details</p>
                </div>
              </div>
              <div className="flex flex-1 items-center gap-5 rounded-3xl border border-white/10 bg-navy-800/60 p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                  <UserRound size={26} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">DIRECTOR</p>
                  <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">{SITE.name}</p>
                  <p className="mt-1 text-sm text-slate-400">SDC — Squad Digital Classes</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
