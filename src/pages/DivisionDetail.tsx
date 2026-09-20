import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Code2, Radio, Calendar, Rocket, ArrowLeft, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const divisionData: Record<string, any> = {
  tech: {
    name: 'Buildrex Tech',
    tagline: 'Technology & Development',
    icon: Code2,
    description: 'Buildrex Tech is our technology division dedicated to building software, websites, AI-powered solutions, and minimum viable products. We partner with startups, entrepreneurs, and businesses to transform ideas into fully functional digital products.',
    longDescription: 'From rapid prototyping to full-scale development, our tech team brings deep expertise across modern web technologies, artificial intelligence, and software engineering. We don\'t just write code — we architect solutions that scale.',
    services: [
      { title: 'Website Development', description: 'Modern, responsive, high-performance websites built with cutting-edge technology stacks.' },
      { title: 'MVP Development', description: 'Rapid prototyping and minimum viable product development for startups and new ventures.' },
      { title: 'AI Solutions', description: 'Custom AI and machine learning solutions tailored to solve specific business challenges.' },
      { title: 'Software Engineering', description: 'End-to-end software development from architecture design to deployment and maintenance.' },
      { title: 'Mobile Applications', description: 'Cross-platform mobile apps that deliver seamless user experiences.' },
      { title: 'Technical Consulting', description: 'Strategic technology guidance to help businesses make informed technical decisions.' },
    ],
    status: 'active',
  },
  media: {
    name: 'Buildrex Media',
    tagline: 'Content & Community Growth',
    icon: Radio,
    description: 'Buildrex Media is our content and community division, focused on creating educational content, growing social media presence, and building engaged communities of builders and innovators.',
    longDescription: 'We believe knowledge should be accessible. Buildrex Media creates content that educates, inspires, and connects people across the innovation ecosystem. From tutorials to thought leadership, we amplify the voices of builders.',
    services: [
      { title: 'Educational Content', description: 'Tutorials, guides, and courses that make complex topics accessible.' },
      { title: 'Social Media Strategy', description: 'Data-driven social media growth strategies for brands and communities.' },
      { title: 'Community Building', description: 'Creating and nurturing engaged communities around shared interests.' },
      { title: 'Content Production', description: 'High-quality video, written, and visual content creation.' },
      { title: 'Brand Growth', description: 'Strategic brand development and audience expansion.' },
      { title: 'Digital Presence', description: 'Building and optimizing online presence across platforms.' },
    ],
    status: 'developing',
  },
  events: {
    name: 'Buildrex Events',
    tagline: 'Experiences & Learning',
    icon: Calendar,
    description: 'Buildrex Events creates immersive learning experiences through hackathons, workshops, competitions, and networking events that bring the builder community together.',
    longDescription: 'Great ideas are born from great experiences. Buildrex Events designs and executes events that inspire creativity, foster collaboration, and accelerate learning. Every event is crafted to deliver maximum value to participants.',
    services: [
      { title: 'Hackathons', description: 'Intensive coding events where builders create solutions to real-world challenges.' },
      { title: 'Workshops', description: 'Hands-on learning sessions led by industry practitioners.' },
      { title: 'Competitions', description: 'Skill-based competitions that push participants to excel.' },
      { title: 'Tech Meetups', description: 'Regular gatherings for knowledge sharing and networking.' },
      { title: 'Learning Sessions', description: 'Structured educational programs on emerging technologies.' },
      { title: 'Networking Events', description: 'Curated events to connect builders, founders, and industry leaders.' },
    ],
    status: 'developing',
  },
  startups: {
    name: 'Buildrex Startups',
    tagline: 'Founders & Ecosystem',
    icon: Rocket,
    description: 'Buildrex Startups supports the next generation of founders through mentorship programs, ecosystem access, and resources designed to help early-stage startups succeed.',
    longDescription: 'Building a startup is hard. Buildrex Startups makes it less lonely. We connect founders with mentors, resources, and each other — creating a support system that increases the odds of building something that lasts.',
    services: [
      { title: 'Founder Programs', description: 'Structured programs designed to accelerate early-stage founders.' },
      { title: 'Mentorship', description: 'One-on-one guidance from experienced entrepreneurs and industry experts.' },
      { title: 'Startup Advisory', description: 'Strategic advice on product, market, and growth decisions.' },
      { title: 'Ecosystem Access', description: 'Connections to investors, partners, and service providers.' },
      { title: 'Resource Network', description: 'Access to tools, templates, and resources that accelerate building.' },
      { title: 'Growth Support', description: 'Ongoing support for scaling operations and reaching milestones.' },
    ],
    status: 'developing',
  },
}

export default function DivisionDetail() {
  const { slug } = useParams()
  const division = divisionData[slug || '']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!division) {
    return (
      <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900">Division not found</h1>
          <Link to="/divisions" className="mt-4 inline-flex items-center gap-2 text-navy-600">
            <ArrowLeft size={16} /> Back to Divisions
          </Link>
        </div>
      </div>
    )
  }

  const Icon = division.icon

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/divisions"
            className="inline-flex items-center gap-2 text-sm text-navy-500 hover:text-navy-700 transition-colors mb-8"
          >
            <ArrowLeft size={16} /> All Divisions
          </Link>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center shadow-lg">
                <Icon size={28} className="text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-navy-500 uppercase tracking-wider">{division.tagline}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    division.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {division.status === 'active' ? 'Active' : 'Coming Soon'}
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
              {division.name}
            </h1>
            <p className="mt-6 text-lg text-navy-900/60 leading-relaxed max-w-3xl">
              {division.description}
            </p>
            <p className="mt-4 text-navy-900/50 leading-relaxed max-w-3xl">
              {division.longDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight mb-12">
              What We Offer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.services.map((service: any, index: number) => (
              <ScrollReveal key={index} delay={index * 0.06} distance={16}>
                <div className="p-6 rounded-xl bg-white border border-navy-100/90 card-hover-lift h-full group">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 size={20} className="text-navy-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight">
                Interested in {division.name}?
              </h2>
              <p className="mt-4 text-navy-900/60">
                Get in touch to learn more about how we can work together.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-medium rounded-lg btn-glow focus:outline-none"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
