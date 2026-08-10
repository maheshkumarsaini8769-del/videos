import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Bot, Camera, Film, Megaphone, Sparkles } from 'lucide-react'

const chips = [
  { label: 'Instagram', color: 'bg-white/15', pos: 'left-[-6%] top-[16%] sm:left-[-10%]', delay: 0, icon: null },
  { label: 'YouTube', color: 'bg-white/15', pos: 'right-[-4%] top-[8%] sm:right-[-8%]', delay: 0.8, icon: null },
  { label: 'Meta', color: 'bg-white/15', pos: 'left-[-8%] bottom-[30%] sm:left-[-12%]', delay: 1.6, icon: null },
  { label: 'Adobe Pr', color: 'bg-white/15', pos: 'right-[-2%] bottom-[38%] sm:right-[-6%]', delay: 2.4, icon: <Film size={13} /> },
  { label: 'Adobe Ai', color: 'bg-white/15', pos: 'left-[14%] bottom-[-6%] sm:left-[10%]', delay: 3.2, icon: <Sparkles size={13} /> },
  { label: 'AI Tools', color: 'bg-white/15', pos: 'right-[12%] bottom-[-4%] sm:right-[8%]', delay: 4, icon: <Bot size={13} /> },
]

function FloatingChip({ chip }) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      className={`absolute z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-700/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-card backdrop-blur-md ${chip.pos}`}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + chip.delay * 0.12, duration: 0.5, ease: 'easeOut' }}
    >
      <motion.span
        className="inline-flex"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, delay: chip.delay * 0.3, ease: 'easeInOut' }}
      >
        <span className={`flex h-4 w-4 items-center justify-center rounded-full text-white ${chip.color}`}>
          {chip.icon}
        </span>
        <span className="ml-1.5">{chip.label}</span>
      </motion.span>
    </motion.span>
  )
}

export default function HeroVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute inset-0 rounded-[2rem] bg-white/[0.04] blur-2xl" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {chips.map((chip) => (
          <FloatingChip key={chip.label} chip={chip} />
        ))}

        <div className="relative rounded-[1.4rem] border border-white/15 bg-navy-800/80 p-3 shadow-card backdrop-blur-md">
          <div className="rounded-t-xl rounded-b-md bg-gradient-to-b from-navy-700 to-navy-800 px-4 pt-4">
            <div className="mx-auto mb-3 flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-flame/70" />
              <span className="h-2 w-2 rounded-full bg-gold/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
              <span className="ml-2 h-3 w-24 rounded bg-white/10" />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-navy-900/90 px-4 py-3">
              <div>
                <p className="font-display text-sm font-bold text-white">Growth Dashboard</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Digital Skills Academy</p>
              </div>
              <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold text-gold">+124%</span>
            </div>

            <div className="mt-3 space-y-2 pb-4" aria-hidden="true">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1/3 rounded-full bg-slate-500/70" />
                <span className="text-[9px] font-semibold text-slate-400">SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-2/3 rounded-full bg-slate-400/70" />
                <span className="text-[9px] font-semibold text-slate-400">Social</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1/2 rounded-full bg-slate-500/70" />
                <span className="text-[9px] font-semibold text-slate-400">Ads</span>
              </div>
            </div>
          </div>

          <div className="mx-auto -mt-0.5 flex items-end justify-center gap-1 pb-1" aria-hidden="true">
            <span className="h-2 w-14 rounded-b-md bg-navy-700/90" />
            <span className="h-3.5 w-24 rounded-b-md bg-navy-700/90" />
            <span className="h-2 w-14 rounded-b-md bg-navy-700/90" />
          </div>
        </div>

        <motion.div
          className="absolute -right-4 -top-4 z-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-navy-700/90 px-4 py-2.5 shadow-card backdrop-blur-md sm:flex"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
            <BarChart3 size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Learn → Skill</p>
            <p className="font-display text-xs font-bold text-white">Career Ready</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -left-5 bottom-16 z-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-navy-700/90 px-4 py-2.5 shadow-card backdrop-blur-md sm:flex"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          aria-hidden="true"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
            <Megaphone size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Digital Media</p>
            <p className="font-display text-xs font-bold text-white">Real Projects</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-5 right-8 z-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-navy-700/90 px-4 py-2.5 shadow-card backdrop-blur-md sm:flex"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          aria-hidden="true"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
            <Camera size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Create</p>
            <p className="font-display text-xs font-bold text-white">Shoot & Edit</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
