import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">Contact</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 font-[family-name:var(--font-heading)] tracking-tight leading-tight">
                Let's Build Together
              </h1>
              <p className="mt-6 text-lg text-navy-900/60 leading-relaxed">
                Have a question, idea, or want to collaborate? Reach out and let's start a conversation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 lg:py-16 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 font-[family-name:var(--font-heading)]">Get in Touch</h3>
                    <p className="mt-2 text-navy-900/60 text-sm leading-relaxed">
                      Whether you're a startup founder, student, developer, or creator — we'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center">
                        <Mail size={18} className="text-navy-600" />
                      </div>
                      <div>
                        <p className="text-xs text-navy-900/50 uppercase tracking-wider font-medium">Email</p>
                        <a href="mailto:hq@buildrex.co.in" className="text-navy-900 font-medium hover:text-navy-600 transition-colors">
                          hq@buildrex.co.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">Follow Us</h4>
                    <div className="flex gap-3">
                      <a
                        href="https://instagram.com/buildrex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-600 hover:text-navy-900 hover:bg-navy-100 hover:border-navy-200 card-hover-lift focus:outline-none"
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="https://linkedin.com/company/buildrex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-600 hover:text-navy-900 hover:bg-navy-100 hover:border-navy-200 card-hover-lift focus:outline-none"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-navy-100 bg-white shadow-sm">
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle size={48} className="mx-auto text-green-500" />
                      <h3 className="mt-4 text-xl font-bold text-navy-900 font-[family-name:var(--font-heading)]">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-navy-900/60">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-6 py-2.5 bg-navy-900 text-white text-sm font-medium rounded-lg hover:bg-navy-800 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded-lg border ${
                              errors.name ? 'border-red-300 bg-red-50/50' : 'border-navy-200'
                            } focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all text-sm`}
                            placeholder="Your name"
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded-lg border ${
                              errors.email ? 'border-red-300 bg-red-50/50' : 'border-navy-200'
                            } focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all text-sm`}
                            placeholder="you@email.com"
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all text-sm"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-navy-900 mb-1.5">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all text-sm"
                            placeholder="What's this about?"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.message ? 'border-red-300 bg-red-50/50' : 'border-navy-200'
                          } focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all text-sm resize-none`}
                          placeholder="Tell us about your idea, question, or how we can help..."
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-100">
                          <AlertCircle size={16} className="text-red-500" />
                          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-900 text-white font-medium rounded-lg disabled:opacity-60 disabled:cursor-not-allowed group focus:outline-none"
                      >
                        {status === 'loading' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
