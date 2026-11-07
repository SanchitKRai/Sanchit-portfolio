import React, { useState } from 'react'
import { Mail, Check, Copy, Send, Sparkles, MapPin, Clock } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Machine Learning & Bioinformatics',
    message: ''
  })

  const email = 'sanchitkrai.work@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's mail client or display simulated submission success
    const subject = encodeURIComponent(`[Project Inquiry] ${formData.projectType} - ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`)
    
    // Direct trigger mailto
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 relative bg-[#09120c] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5f13b]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Collaborate</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf8f5] leading-[1.1]">
                Have a complex idea? <br />
                <span className="font-serif italic font-normal text-[#e2a84b]">Let's fix that.</span>
              </h2>

              <p className="text-base text-[#a3bdae] leading-relaxed">
                Whether you need a specialized predictive model in computational biology, a high-converting luxury web experience, or an end-to-end data product—I'm open for conversations.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] bg-[#0e1a14]/90 space-y-4">
              <div className="text-xs font-mono text-[#82a08f]">Direct Inquiries:</div>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="font-mono text-sm sm:text-base text-[#faf8f5] select-all truncate">
                  {email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-[#c5f13b] hover:text-[#0b140f] text-xs font-mono text-[#c6d7cc] transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#a3bdae]">
              <div className="p-4 rounded-xl bg-[#0e1a14]/60 border border-white/[0.05] flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#e2a84b]" />
                <div>
                  <div className="text-[#faf8f5] font-semibold">Delhi, India</div>
                  <div className="text-[10px]">UTC +05:30</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1a14]/60 border border-white/[0.05] flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5f13b]" />
                <div>
                  <div className="text-[#faf8f5] font-semibold">Available</div>
                  <div className="text-[10px]">Q4 2026 / 2027</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#82a08f]">Connect on Social Channels:</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/SanchitKRai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1a14] border border-white/10 hover:border-[#c5f13b] hover:text-[#c5f13b] text-[#faf8f5] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sanchitkrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1a14] border border-white/10 hover:border-[#e2a84b] hover:text-[#e2a84b] text-[#faf8f5] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sanchitkrai.work@gmail.com"
                  className="p-3 rounded-xl bg-[#0e1a14] border border-white/10 hover:border-[#c5f13b] hover:text-[#c5f13b] text-[#faf8f5] transition-colors"
                  aria-label="Email Directly"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/[0.08] bg-[#0e1a14]/95 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#faf8f5] mb-6">
                Send a Project Brief
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#c5f13b]/20 text-[#c5f13b] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#faf8f5]">Opening Your Email Client!</h4>
                  <p className="text-sm text-[#a3bdae]">
                    Your message draft has been generated. You can also reach out directly to <code>{email}</code>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#c5f13b] underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#a3bdae]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Jane Doe / Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#c5f13b] focus:outline-none text-sm text-[#faf8f5] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#a3bdae]">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#c5f13b] focus:outline-none text-sm text-[#faf8f5] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-[#a3bdae]">Project Scope / Focus</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09120c] border border-white/10 focus:border-[#c5f13b] focus:outline-none text-sm text-[#faf8f5] transition-colors"
                    >
                      <option value="Machine Learning & Bioinformatics">Machine Learning & Computational Biology</option>
                      <option value="Web UI/UX & Product Design">Web UI/UX & High-Converting Landing Page</option>
                      <option value="End-to-End Data Web Application">End-to-End Data Web Application (FastAPI / Streamlit / React)</option>
                      <option value="Research Collaboration or Full-Time Opportunity">Research Collaboration or Full-Time Role</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-[#a3bdae]">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your dataset, objectives, desired timeline, or interface requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#c5f13b] focus:outline-none text-sm text-[#faf8f5] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#e2a84b] hover:bg-[#f5c879] text-[#0b140f] font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-[0_0_25px_rgba(226,168,75,0.4)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Schedule Discovery</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
