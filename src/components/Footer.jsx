import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { courses, NAV_LINKS, SITE } from '../data/courses'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950/80">
      <div className="container-sdc py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src={`${import.meta.env.BASE_URL}sdc.png`}
                alt="SDC logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-base font-bold tracking-wide text-white">
                SQUAD <span className="text-slate-300">DIGITAL</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {SITE.brand} — practical digital skills training at Sikar.
              Learn Skills | Build Careers | Shape Your Future.
            </p>
            <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              <Phone size={15} /> {SITE.phone}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-slate-400 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-sm text-slate-400 transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-slate-400 transition hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Courses</h3>
            <ul className="mt-4 space-y-2.5">
              {courses.map((c) => (
                <li key={c.id}>
                  <Link to={`/courses/${c.id}`} className="text-sm text-slate-400 transition hover:text-white">
                    {c.number}. {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
                <span>
                  {SITE.address[0]}
                  <br />
                  {SITE.address[1]}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-white" />
                <a href={SITE.phoneHref} className="transition hover:text-white">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-sdc flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Squad Digital Classes. All Rights Reserved.</p>
          <p className="flex items-center gap-4">
            <Link to="/privacy" className="transition hover:text-slate-300">
              Privacy
            </Link>
            <Link to="/terms" className="transition hover:text-slate-300">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
