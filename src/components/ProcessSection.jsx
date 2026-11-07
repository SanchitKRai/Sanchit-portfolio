import React from 'react'
import { GitCommit, ArrowRight } from 'lucide-react'
import { processSteps } from '../data/projects'

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-[#0b140f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2a84b]">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf8f5]">
            Clear steps.{' '}
            <span className="font-serif italic font-normal text-[#c5f13b]">Shared</span> direction.
          </h2>
          <p className="text-base text-[#a3bdae]">
            A transparent, sprint-based workflow from initial formulation to validated production deployment.
          </p>
        </div>

        {/* 5-Step Horizontal/Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl glass-panel border border-white/[0.07] bg-[#0e1a14]/80 hover:border-[#c5f13b]/30 hover:bg-[#13241b] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-[#c5f13b]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#82a08f] bg-black/40 px-2 py-0.5 rounded">
                    {step.name}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#faf8f5] group-hover:text-[#e2a84b] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#a3bdae] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#82a08f]">
                Phase {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
