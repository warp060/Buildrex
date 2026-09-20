import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface StatItemProps {
  value: string
  label: string
  isNumber?: boolean
  target?: number
  suffix?: string
}

function StatItem({ value, label, isNumber, target, suffix = '' }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(isNumber ? '00' : value)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || !isNumber || target === undefined) return

    if (shouldReduceMotion) {
      setDisplayValue(String(target).padStart(2, '0') + suffix)
      return
    }

    let startTimestamp: number | null = null
    const duration = 1600 // ms

    // Smooth easeOutExpo curve for buttery smooth deceleration
    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
    }

    let frameId: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easedProgress = easeOutExpo(progress)
      const current = Math.round(easedProgress * target)

      setDisplayValue(String(current).padStart(2, '0') + suffix)

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setDisplayValue(String(target).padStart(2, '0') + suffix)
      }
    }

    frameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(frameId)
  }, [isInView, isNumber, target, suffix, shouldReduceMotion])

  return (
    <div ref={ref} className="text-center lg:text-left">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight"
      >
        {displayValue}
      </motion.div>
      <div className="mt-2 text-sm sm:text-base text-navy-900/50 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-white/80 border border-navy-100/80 card-hover-lift">
              <StatItem value="04" label="Business Divisions" isNumber target={4} />
            </div>
            <div className="p-8 rounded-2xl bg-white/80 border border-navy-100/80 card-hover-lift">
              <StatItem value="01" label="Startup Ecosystem" isNumber target={1} />
            </div>
            <div className="p-8 rounded-2xl bg-white/80 border border-navy-100/80 card-hover-lift">
              <StatItem value="Growing" label="Community" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
