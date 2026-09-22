import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-grid">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-navy-600/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Floating elements */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-navy-400/30 rounded-full animate-float" />
      <div className="absolute top-48 left-32 w-3 h-3 bg-navy-500/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-navy-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-navy-400/20 rounded-full animate-float-delayed" />

      {/* Grid lines accent */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-navy-200/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-navy-100 shadow-sm text-navy-800 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Innovation Ecosystem
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-[1.1] tracking-tight font-[family-name:var(--font-heading)]"
          >
            Building India's Next{' '}
            <span className="gradient-text-hero">Generation</span> of{' '}
            Innovators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-navy-900/60 leading-relaxed max-w-2xl"
          >
            Buildrex is an innovation company building technology, startups, educational experiences, and communities from the ground up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/divisions"
              className="btn-glow inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-navy-900 text-white font-medium rounded-lg group"
            >
              <span>Explore Buildrex</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200 ease-out" />
            </Link>
            <Link
              to="/contact"
              className="btn-glow-light inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy-900 font-medium rounded-lg border border-navy-200 hover:border-navy-300 transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
