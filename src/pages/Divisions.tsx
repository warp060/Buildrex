import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code2, Radio, Calendar, Rocket, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const divisions = [
  {
    slug: 'tech',
    name: 'Buildrex Tech',
    tagline: 'Technology & Development',
    description: 'Our technology division builds software, websites, AI solutions, and MVPs for startups and businesses. From concept to deployment, Buildrex Tech turns ideas into production-ready products.',
    icon: Code2,
    services: ['Website Development', 'MVP Building', 'AI Solutions', 'Software Engineering', 'Mobile Apps', 'Technical Consulting'],
  },
  {
    slug: 'media',
    name: 'Buildrex Media',
    tagline: 'Content & Community',
    description: 'Buildrex Media focuses on educational content creation, social media growth, and building engaged communities. We help builders share their knowledge and reach wider audiences.',
    icon: Radio,
    services: ['Educational Content', 'Social Media Strategy', 'Community Building', 'Content Production', 'Brand Growth', 'Digital Presence'],
  },
  {
    slug: 'events',
    name: 'Buildrex Events',
    tagline: 'Experiences & Learning',
    description: 'From hackathons to workshops, Buildrex Events creates immersive learning experiences that bring builders together. We design events that inspire, educate, and connect.',
    icon: Calendar,
    services: ['Hackathons', 'Workshops', 'Competitions', 'Tech Meetups', 'Learning Sessions', 'Networking Events'],
  },
  {
    slug: 'startups',
    name: 'Buildrex Startups',
    tagline: 'Founders & Ecosystem',
    description: 'Buildrex Startups supports early-stage founders through mentorship programs, ecosystem connections, and resources needed to build sustainable companies.',
    icon: Rocket,
    services: ['Founder Programs', 'Mentorship', 'Startup Advisory', 'Ecosystem Access', 'Resource Network', 'Growth Support'],
  },
]

export default function Divisions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">Our Divisions</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight leading-tight">
                Four Verticals. Unified Impact.
              </h1>
              <p className="mt-6 text-lg text-navy-900/60 leading-relaxed">
                Each Buildrex division operates independently with its own mission, team, and focus area — yet together they form a powerful innovation ecosystem.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divisions Detail */}
      {divisions.map((division, index) => (
        <section key={division.slug} className={`py-16 lg:py-24 ${index % 2 === 0 ? '' : 'bg-navy-50/50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? 'lg:direction-rtl' : ''
              }`}>
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center">
                      <division.icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-navy-500 uppercase tracking-wider">{division.tagline}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                    {division.name}
                  </h2>
                  <p className="mt-4 text-navy-900/60 leading-relaxed text-lg">
                    {division.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">Capabilities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {division.services.map((service) => (
                        <div key={service} className="flex items-center gap-2 text-sm text-navy-900/70">
                          <div className="w-1.5 h-1.5 bg-navy-500 rounded-full" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={`/divisions/${division.slug}`}
                      className="inline-flex items-center gap-2 text-navy-600 font-medium hover:text-navy-800 transition-colors group"
                    >
                      Learn more about {division.name}
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-50 to-navy-100/50 border border-navy-100 flex items-center justify-center p-8"
                  >
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      {division.services.slice(0, 4).map((service, i) => (
                        <div key={i} className="p-3 rounded-lg bg-white border border-navy-100 text-center shadow-sm">
                          <span className="text-xs font-medium text-navy-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  )
}
