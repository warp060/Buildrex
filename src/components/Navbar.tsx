import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Code2,
  Radio,
  Calendar,
  Rocket,
  ChevronRight,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/', number: '01', desc: 'Overview & Ecosystem' },
  { label: 'About', path: '/about', number: '02', desc: 'Mission & Council' },
  { label: 'Divisions', path: '/divisions', number: '03', desc: '4 Specialized Verticals' },
]

const quickDivisions = [
  { name: 'Tech', path: '/divisions/tech', icon: Code2, accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  { name: 'Media', path: '/divisions/media', icon: Radio, accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  { name: 'Events', path: '/divisions/events', icon: Calendar, accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { name: 'Startups', path: '/divisions/startups', icon: Rocket, accent: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'nav-blur border-b border-navy-100/70 shadow-[0_4px_25px_rgba(11,29,58,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-out ${
              scrolled ? 'h-16 lg:h-18' : 'h-18 lg:h-22'
            }`}
          >
            {/* Brand Logo & Title */}
            <Link to="/" className="group flex items-center gap-3 focus:outline-none">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-navy-950 p-1 ring-1 ring-navy-900/15 group-hover:ring-cyan-500/40 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <img
                  src="/buildrex-emblem.png"
                  alt="Buildrex Logo"
                  className="w-full h-full object-contain"
                />
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight leading-none transition-colors duration-200 group-hover:text-navy-700">
                  BUILDREX
                </span>
                <span className="text-[9px] uppercase tracking-widest text-navy-500/80 font-medium mt-1 hidden sm:block">
                  For Builders. By Builders.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-navy-900 font-semibold'
                        : 'text-navy-900/70 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                  location.pathname === '/contact'
                    ? 'bg-navy-950 text-white ring-2 ring-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.25)]'
                    : 'bg-navy-900 hover:bg-navy-800 text-white btn-glow'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-navy-50/90 hover:bg-navy-100/90 border border-navy-200/60 flex items-center justify-center text-navy-900 transition-all active:scale-95 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Luxury Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#050C1A] text-white flex flex-col overflow-hidden"
          >
            {/* Ambient High-Tech Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="hero-grid opacity-15 absolute inset-0 pointer-events-none" />

            {/* Mobile Header Bar */}
            <div className="relative z-10 px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between border-b border-white/[0.08] bg-[#050C1A]/80 backdrop-blur-xl">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-black p-1 ring-1 ring-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <img src="/buildrex-emblem.png" alt="Buildrex Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
                    BUILDREX
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-semibold">
                    For Builders. By Builders.
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="relative z-10 flex-1 overflow-y-auto px-5 py-6 space-y-6">
              {/* Navigation Cards */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 block px-1">
                  Menu
                </span>
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/25 via-purple-600/15 to-transparent border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                            : 'bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.06] hover:border-white/20 active:scale-[0.99]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`text-xs font-mono font-semibold px-2 py-1 rounded-md border ${
                              isActive
                                ? 'text-cyan-300 bg-cyan-500/20 border-cyan-400/40'
                                : 'text-white/50 bg-white/[0.04] border-white/10'
                            }`}
                          >
                            {link.number}
                          </span>
                          <div>
                            <div className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] text-white tracking-tight flex items-center gap-2">
                              {link.label}
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                              )}
                            </div>
                            <p className="text-[11px] text-white/50">{link.desc}</p>
                          </div>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-200 ${
                            isActive
                              ? 'text-cyan-400 translate-x-0.5'
                              : 'text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Divisions Quick Access Grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-1"
              >
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    Our 4 Divisions
                  </span>
                  <Link
                    to="/divisions"
                    onClick={() => setMobileOpen(false)}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                  >
                    View all <ArrowUpRight size={12} />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {quickDivisions.map((div) => {
                    const Icon = div.icon
                    return (
                      <Link
                        key={div.path}
                        to={div.path}
                        onClick={() => setMobileOpen(false)}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15 transition-all flex items-center gap-2.5 group active:scale-[0.98]"
                      >
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${div.accent}`}>
                          <Icon size={16} />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-semibold text-white/90 group-hover:text-white">
                            {div.name}
                          </div>
                          <span className="text-[10px] text-white/40">Explore vertical</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>

              {/* Primary Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-2"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_4px_25px_rgba(37,99,235,0.4)] active:scale-[0.99] transition-all"
                >
                  <Sparkles size={16} className="text-cyan-300" />
                  <span>Contact Us & Collaborate</span>
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Footer Quick Tray */}
            <div className="relative z-10 px-6 py-4 border-t border-white/[0.08] bg-[#030814]/90 backdrop-blur-xl flex items-center justify-between text-xs text-white/50">
              <a
                href="mailto:hq@buildrex.co.in"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-cyan-400" />
                <span className="font-mono text-[11px]">hq@buildrex.co.in</span>
              </a>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com/buildrex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-400/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://linkedin.com/company/buildrex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-400/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
