import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_50%)]" />

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] tracking-tight">
                Ready to Build Something Bigger?
              </h2>
              <p className="mt-5 text-lg text-navy-200/80 leading-relaxed">
                Whether you're a founder, developer, student, or creator — Buildrex is where ambitious builders come together to make real impact.
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="btn-glow-light inline-flex items-center gap-2.5 px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg group shadow-lg focus:outline-none"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200 ease-out" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
