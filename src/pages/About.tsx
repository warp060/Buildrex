import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Lightbulb, Users, Zap, Star, ArrowUpRight, Sparkles } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const timeline = [
  {
    title: 'WhatsApp Community',
    description: 'Buildrex began as a WhatsApp community bringing together like-minded builders, developers, and creators.',
  },
  {
    title: 'Buildrex Formation',
    description: 'The community evolved into a structured innovation company with a clear mission and identity.',
  },
  {
    title: 'Leadership Formation',
    description: 'A dedicated leadership council was established to guide Buildrex\'s vision and operations.',
  },
  {
    title: 'Departments Created',
    description: 'Four independent divisions — Tech, Media, Events, and Startups — were formed to drive impact across verticals.',
  },
]

const coreValues = [
  { icon: Lightbulb, title: 'Innovation', description: 'We push boundaries and challenge the status quo.' },
  { icon: Heart, title: 'Impact', description: 'Every initiative is driven by the desire to create real, measurable change.' },
  { icon: Shield, title: 'Integrity', description: 'We operate with transparency, honesty, and accountability.' },
  { icon: Users, title: 'Community', description: 'We believe in the power of collective growth and collaboration.' },
  { icon: Zap, title: 'Execution', description: 'Ideas are nothing without action. We build and ship.' },
  { icon: Star, title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we do.' },
]

const leadership = [
  {
    title: 'Co-Founder & President',
    roleCategory: 'Vision & Governance',
    image: '/team/president.jpg',
    status: 'active',
  },
  {
    title: 'Co-Founder, Vice President & CEO',
    roleCategory: 'Strategy & Execution',
    image: '/team/ceo.jpg',
    status: 'active',
  },
  {
    title: 'Chief Operating Officer (COO)',
    roleCategory: 'Operations & Scaling',
    image: '/team/coo.jpg',
    status: 'active',
  },
]

const futurePositions = [
  { title: 'Chief Financial Officer (CFO)', status: 'upcoming' },
  { title: 'Chief Technology Officer (CTO)', status: 'upcoming' },
  { title: 'Chief Marketing Officer (CMO)', status: 'upcoming' },
]

export default function About() {
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
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">About Buildrex</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight leading-tight">
                An Ecosystem Built for Builders
              </h1>
              <p className="mt-6 text-lg text-navy-900/60 leading-relaxed">
                Buildrex is not just a company — it's an innovation ecosystem. We connect technology, media, events, and startups to empower the next generation of builders across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-20 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">Our Story</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                  From Community to Company
                </h2>
                <p className="mt-5 text-navy-900/60 leading-relaxed">
                  Buildrex started as a simple WhatsApp community — a space where builders, developers, and creators could connect, share ideas, and collaborate. What began as conversations between passionate individuals evolved into something much bigger.
                </p>
                <p className="mt-4 text-navy-900/60 leading-relaxed">
                  Today, Buildrex operates as a multi-vertical innovation company with four independent divisions, a structured leadership council, and a clear mission to build real impact across technology, education, and entrepreneurship.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-100/70 to-navy-50/90 border border-navy-100 flex items-center justify-center p-8">
                  <div className="relative w-56 h-56 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-navy-200/40 rounded-full animate-pulse-glow" />
                    <div className="absolute inset-4 border border-navy-300/30 rounded-full" />
                    <div className="absolute inset-8 border border-navy-200/20 rounded-full" />
                    <div className="relative w-36 h-36 rounded-full p-1 bg-navy-950 shadow-2xl ring-2 ring-navy-400/30 transition-all duration-500 hover:scale-108 group">
                      <img
                        src="/buildrex-logo.png"
                        alt="Buildrex Official Logo"
                        className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:rotate-6"
                      />
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-lg -z-10 animate-pulse-glow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">Our Journey</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                The Buildrex Timeline
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px timeline-line lg:-translate-x-px" />

            {timeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-start gap-6 mb-12 last:mb-0 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 w-3 h-3 bg-navy-600 rounded-full -translate-x-1.5 mt-2 ring-4 ring-white shadow" />
                  
                  {/* Card */}
                  <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-0' : 'lg:text-left lg:pl-0'
                  }`}>
                    <div className="p-6 rounded-xl border border-navy-100/90 bg-white shadow-sm card-hover-lift">
                      <h3 className="text-lg font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal>
              <div className="p-8 lg:p-10 rounded-2xl bg-white border border-navy-100/90 card-hover-lift h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center shadow-md">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                  Our Mission
                </h3>
                <p className="mt-4 text-navy-900/60 leading-relaxed text-lg">
                  Build startups, technology, education, and innovation ecosystems that create real impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 lg:p-10 rounded-2xl bg-white border border-navy-100/90 card-hover-lift h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-600 flex items-center justify-center shadow-md">
                  <Eye size={22} className="text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                  Our Vision
                </h3>
                <p className="mt-4 text-navy-900/60 leading-relaxed text-lg">
                  Become India's most trusted innovation company empowering builders across the country.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">What Drives Us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                Core Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.06} distance={16}>
                <div className="p-6 rounded-xl border border-navy-100/90 bg-white card-hover-lift h-full group">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <value.icon size={22} className="text-navy-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-navy-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-navy-600 bg-navy-100/70 px-4 py-1.5 rounded-full border border-navy-200/60">
                Leadership
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                Leading Council
              </h2>
              <p className="mt-4 text-navy-900/60 max-w-xl mx-auto text-base sm:text-lg">
                The visionary builders steering Buildrex's mission, ecosystem expansion, and multi-vertical operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadership.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1} distance={20}>
                <div className="group relative rounded-3xl bg-white border border-navy-100/90 overflow-hidden card-hover-lift shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  {/* Photo Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                    <img
                      src={member.image}
                      alt={member.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Active Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        Council Member
                      </span>
                    </div>

                    {/* Overlaid Title on Photo */}
                    <div className="absolute bottom-5 left-5 right-5 text-left">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                        {member.roleCategory}
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
                    <div className="flex items-center gap-1 text-xs font-semibold text-navy-600 group-hover:text-cyan-600 transition-colors">
                      <span>Executive Council</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Upcoming Council Positions */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                Upcoming Council Positions
              </h3>
              <p className="mt-2 text-sm text-navy-900/50">
                These executive leadership roles will be inducted as Buildrex scales nationwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {futurePositions.map((pos, index) => (
              <ScrollReveal key={index} delay={index * 0.08} distance={14}>
                <div className="p-6 rounded-2xl border border-dashed border-navy-200/90 bg-white/70 hover:bg-white text-center transition-colors">
                  <h4 className="text-sm font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                    {pos.title}
                  </h4>
                  <span className="inline-block mt-2.5 px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-xs font-medium border border-navy-100">
                    Opening Soon
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
