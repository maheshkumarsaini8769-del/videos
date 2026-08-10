import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Phone, X, Zap } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/courses'

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="SDC — Squad Digital Classes, home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white font-display text-sm font-bold text-navy-950">
        SDC
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-wide text-white">
          SQUAD <span className="text-slate-300">DIGITAL</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500">Classes</span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const enrollTarget =
    location.pathname === '/' ? { hash: '#enquiry', replace: true } : '/contact#enquiry'

  return (
    <>
      <motion.header
        initial={{ y: reduce ? 0 : -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-base/70 backdrop-blur-xl shadow-card'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div
          className={`container-sdc flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive && link.to !== '/#' && link.to !== '#benefits'
                      ? 'bg-white/10 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 sm:inline-flex"
            >
              <Phone size={15} />
              {SITE.phone}
            </a>
            <Link
              to={enrollTarget}
              className="btn-primary !px-5 !py-2 text-sm"
            >
              <Zap size={15} fill="currentColor" />
              Enroll Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-base/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              role="dialog"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-white/10 bg-navy-800/95 p-6 backdrop-blur-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/50"
                  aria-label="Close menu"
                >
                  <X size={19} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1.5" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: reduce ? 0 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 font-display text-lg font-semibold transition ${
                          isActive && link.to !== '/#' && link.to !== '#benefits'
                            ? 'bg-white/10 text-white'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-8">
                <a href={SITE.phoneHref} className="btn-ghost w-full">
                  <Phone size={16} /> Call {SITE.phone}
                </a>
                <Link to="/contact#enquiry" onClick={() => setOpen(false)} className="btn-primary w-full">
                  <Zap size={16} fill="currentColor" /> Enroll Now
                </Link>
                <p className="pt-2 text-center text-xs leading-relaxed text-slate-500">
                  {SITE.address[0]}, {SITE.address[1]}
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
