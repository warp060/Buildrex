import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const council = [
  {
    title: 'Co-Founder & President',
    category: 'Vision & Governance',
    image: '/team/president.jpg',
  },
  {
    title: 'Co-Founder, Vice President & CEO',
    category: 'Strategy & Execution',
    image: '/team/ceo.jpg',
  },
  {
    title: 'Chief Operating Officer (COO)',
    category: 'Operations & Scaling',
    image: '/team/coo.jpg',
  },
]

export default function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-50/40 relative overflow-hidden">
      {/* Subtle ambient light pools */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-navy-600 bg-navy-100/70 px-4 py-1.5 rounded-full border border-navy-200/60 inline-flex items-center gap-1.5">
                <Sparkles size={12} className="text-cyan-500" />
                Leadership
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                Built by Visionaries. <br className="hidden sm:block" />Led by Builders.
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-900 transition-colors group"
            >
              <span>Learn about our story & journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {council.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1} distance={20}>
              <div className="group relative rounded-3xl bg-white border border-navy-100/90 overflow-hidden card-hover-lift shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                {/* Photo Area */}
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Active Indicator Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                      Leading Council
                    </span>
                  </div>

                  {/* Overlaid Title on Photo */}
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                      {member.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)] leading-snug tracking-tight">
                      {member.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="p-5 bg-white flex items-center justify-between border-t border-navy-100/70">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-navy-950 p-0.5 flex items-center justify-center shadow-xs">
                      <img src="/buildrex-emblem.png" alt="Buildrex" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-navy-900 tracking-tight">BUILDREX HQ</span>
                  </div>
                  <Link
                    to="/about"
                    className="flex items-center gap-1 text-xs font-semibold text-navy-600 group-hover:text-cyan-600 transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
