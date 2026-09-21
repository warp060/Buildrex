import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code2, Radio, Calendar, Rocket, ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const divisions = [
  {
    slug: 'tech',
    name: 'Buildrex Tech',
    description: 'Cloud hosting, domain setup, AI chatbots, UI/UX dashboards, and startup technology solutions.',
    icon: Code2,
    color: 'from-cyan-500 to-blue-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  },
  {
    slug: 'media',
    name: 'Buildrex Media',
    description: 'Educational content, social media and community growth across platforms.',
    icon: Radio,
    color: 'from-purple-500 to-violet-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  },
  {
    slug: 'events',
    name: 'Buildrex Events',
    description: 'Hackathons, workshops, competitions and learning experiences that inspire.',
    icon: Calendar,
    color: 'from-blue-600 to-indigo-700',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
  },
  {
    slug: 'startups',
    name: 'Buildrex Startups',
    description: 'Founder programs, mentorship and startup ecosystem development.',
    icon: Rocket,
    color: 'from-violet-600 to-cyan-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
  },
]

export default function DivisionsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">Our Ecosystem</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
              Four Divisions. One Vision.
            </h2>
            <p className="mt-4 text-lg text-navy-900/60 max-w-2xl mx-auto">
              Each division operates independently while contributing to a unified mission of empowering builders.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {divisions.map((division, index) => (
            <ScrollReveal key={division.slug} delay={index * 0.08} distance={20}>
              <Link to={`/divisions/${division.slug}`} className="block h-full focus:outline-none">
                <div className="group relative h-full p-8 lg:p-10 rounded-2xl border border-navy-100/90 bg-white hover:border-cyan-500/30 division-card-glow card-hover-lift">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.color} flex items-center justify-center shadow-md ${division.glow} transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-2`}>
                      <division.icon size={22} className="text-white" />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-navy-300 group-hover:text-cyan-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out"
                    />
                  </div>
                  <h3 className="mt-6 text-xl lg:text-2xl font-bold text-navy-900 font-[family-name:var(--font-heading)] transition-colors duration-200 group-hover:text-navy-700">
                    {division.name}
                  </h3>
                  <p className="mt-3 text-navy-900/60 leading-relaxed">
                    {division.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-navy-600 transition-all duration-300 transform translate-y-1 opacity-80 group-hover:opacity-100 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
