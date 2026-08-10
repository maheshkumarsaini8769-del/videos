import { Star } from 'lucide-react'
import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, stars = false, align = 'center' }) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      {stars && (
        <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} text-slate-500`}>
          <Star size={16} fill="currentColor" className="animate-[twinkle_3s_ease-in-out_infinite]" />
          <span className="h-px w-10 bg-white/20" />
          <Star size={10} fill="currentColor" className="animate-[twinkle_3.5s_ease-in-out_infinite]" />
          <Star size={14} fill="currentColor" className="animate-[twinkle_4s_ease-in-out_infinite]" />
          <span className="h-px w-10 bg-white/20" />
          <Star size={16} fill="currentColor" className="animate-[twinkle_3s_ease-in-out_infinite]" />
        </div>
      )}
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
