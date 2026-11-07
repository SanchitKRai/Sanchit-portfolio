import React from 'react'
import { Cpu, Layout, CheckCircle, ArrowUpRight, Zap } from 'lucide-react'
import { services } from '../data/projects'

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 relative bg-[#09120c] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5f13b]">
            <Zap className="w-3.5 h-3.5" />
            <span>Dual Domain Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf8f5]">
            What can we <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#e2a84b]">build</span> together?
          </h2>
          <p className="text-base text-[#a3bdae]">
            A rare intersection: deep domain fluency in life sciences and computational algorithms paired with production frontend craft.
          </p>
        </div>

        {/* Dual Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 sm:p-10 glass-panel border border-white/[0.08] hover:border-[#c5f13b]/30 transition-all duration-300 flex flex-col justify-between bg-[#0e1a14]/90 space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#1b3628] border border-[#2d5640] flex items-center justify-center text-[#c5f13b]">
                    {idx === 0 ? <Cpu className="w-6 h-6" /> : <Layout className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[#a3bdae] border border-white/[0.08]">
                    {srv.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#faf8f5]">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#a3bdae] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Offerings List */}
                <div className="space-y-4 pt-2">
                  {srv.offerings.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-4 rounded-xl bg-[#09120d]/70 border border-white/[0.05] space-y-1">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#c5f13b] shrink-0" />
                        <h4 className="text-sm font-semibold text-[#faf8f5]">{item.title}</h4>
                      </div>
                      <p className="text-xs text-[#a3bdae] pl-6.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#e2a84b] hover:text-[#f5c879] transition-colors"
                >
                  <span>Direct Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {srv.fiverrUrl && (
                  <a
                    href={srv.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1dbf73]/15 text-[#1dbf73] border border-[#1dbf73]/30 hover:bg-[#1dbf73]/25 text-xs font-mono font-medium transition-all"
                  >
                    <span>{srv.fiverrLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
