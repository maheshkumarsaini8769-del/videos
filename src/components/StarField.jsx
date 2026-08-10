import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'

const STARS = 44

export default function StarField() {
  const reduce = useReducedMotion()

  const stars = useMemo(
    () =>
      Array.from({ length: STARS }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: 2.5 + Math.random() * 4,
      })),
    []
  )

  if (reduce) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_0%,rgba(255,255,255,0.045),transparent_70%),radial-gradient(ellipse_50%_40%_at_85%_15%,rgba(255,255,255,0.03),transparent_70%),radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(255,255,255,0.025),transparent_70%)]" />
      <div className="absolute inset-0 bg-radial-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
