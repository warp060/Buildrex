import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-3 mb-4 focus:outline-none">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-navy-900 p-1 ring-1 ring-white/20 group-hover:ring-blue-400/50 shadow-md transition-all duration-300 group-hover:scale-105">
                <img
                  src="/buildrex-emblem.png"
                  alt="Buildrex Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white font-[family-name:var(--font-heading)] tracking-tight leading-none transition-colors group-hover:text-blue-200">
                  BUILDREX
                </span>
                <span className="text-[10px] uppercase tracking-widest text-navy-400 font-medium mt-1">
                  For Builders. By Builders.
                </span>
              </div>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed max-w-md mb-4">
              An innovation ecosystem where technology, media, events, and startups come together to empower the next generation of builders.
            </p>
            <p className="text-navy-400 text-sm font-medium italic">
              "For Builders. By Builders."
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-navy-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-navy-300 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link to="/divisions" className="text-navy-300 hover:text-white text-sm transition-colors">Divisions</Link></li>
              <li><Link to="/contact" className="text-navy-300 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">Divisions</h4>
            <ul className="space-y-3">
              <li><Link to="/divisions/tech" className="text-navy-300 hover:text-white text-sm transition-colors">Buildrex Tech</Link></li>
              <li><Link to="/divisions/media" className="text-navy-300 hover:text-white text-sm transition-colors">Buildrex Media</Link></li>
              <li><Link to="/divisions/events" className="text-navy-300 hover:text-white text-sm transition-colors">Buildrex Events</Link></li>
              <li><Link to="/divisions/startups" className="text-navy-300 hover:text-white text-sm transition-colors">Buildrex Startups</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Buildrex. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/buildrex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com/company/buildrex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
