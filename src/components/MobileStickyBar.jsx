import { Link } from 'react-router-dom'
import { Phone, Zap } from 'lucide-react'
import { SITE } from '../data/courses'
import WhatsAppButton from './WhatsAppButton'

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-base/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white transition active:scale-95"
        >
          <Phone size={18} className="text-gold" />
          Call
        </a>
        <WhatsAppButton
          variant="round"
          className="!h-auto !w-full !rounded-xl !py-2.5"
          label=""
        />
        <Link
          to="/contact#enquiry"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 py-2.5 text-xs font-bold text-navy-950 transition active:scale-95"
        >
          <Zap size={18} fill="currentColor" />
          Enroll
        </Link>
      </div>
    </div>
  )
}
