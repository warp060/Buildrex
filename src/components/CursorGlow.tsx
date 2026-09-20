import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on desktop with mouse pointer and without reduced motion preference
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasFinePointer || prefersReducedMotion) {
      return
    }

    setEnabled(true)

    let mouseX = -500
    let mouseY = -500
    let currentX = -500
    let currentY = -500
    let dotX = -500
    let dotY = -500
    let isHoveringInteractive = false
    let isVisible = false
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) {
        isVisible = true
        if (glowRef.current) glowRef.current.style.opacity = '1'
        if (dotRef.current) dotRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      isVisible = false
      if (glowRef.current) glowRef.current.style.opacity = '0'
      if (dotRef.current) dotRef.current.style.opacity = '0'
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .card-hover-lift, .division-card-glow, .btn-glow, .btn-glow-light'
      )
      isHoveringInteractive = !!interactive
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    // Buttery smooth lerp animation loop on compositor thread
    const animate = () => {
      // Glow follows with fluid gentle easing (lerp 0.08)
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      // Dot follows more crisply (lerp 0.22)
      dotX += (mouseX - dotX) * 0.22
      dotY += (mouseY - dotY) * 0.22

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      if (dotRef.current) {
        const scale = isHoveringInteractive ? 2.4 : 1
        const bg = isHoveringInteractive ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.85)'
        const border = isHoveringInteractive ? '1px solid rgba(37, 99, 235, 0.5)' : 'none'
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${scale})`
        dotRef.current.style.backgroundColor = bg
        dotRef.current.style.border = border
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* Ambient background glow follower */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-30 w-[420px] h-[420px] rounded-full opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      {/* Interactive micro-follower dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 w-2.5 h-2.5 rounded-full opacity-0 transition-[transform,opacity,background-color,border] duration-150 ease-out"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  )
}
