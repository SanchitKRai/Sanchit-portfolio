import React from 'react'
import { Sparkles, CheckCircle2, TrendingUp, Layers } from 'lucide-react'
import { personalityCards } from '../data/projects'

export default function PersonalitySection() {
  return (
    <section id="personality" className="py-24 relative bg-[#0b140f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2a84b]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design Ethos & Versatility</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf8f5]">
            Same idea.{' '}
            <span className="font-serif italic font-normal text-[#c5f13b]">Different</span> personality.
          </h2>
          <p className="text-base text-[#a3bdae]">
            A technical mind adaptable across tone and domain: from austere editorial restraint to high-voltage computational vitality.
          </p>
        </div>

        {/* 3 Interactive Personality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Clean Editorial */}
          <div className="rounded-3xl p-8 bg-[#121f17] border border-[#234230] hover:border-[#e2a84b]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#a3bdae]">
                  Vibe 01 · Minimal Editorial
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-serif text-[#faf8f5] tracking-tight">
                  Anything that’s clean.
                </h3>
                <p className="text-xs text-[#82a08f] font-mono">
                  Whitespace · Restraint · Hierarchy
                </p>
              </div>

              {/* Visual preview box */}
              <div className="p-4 rounded-2xl bg-[#09120c] border border-white/[0.06] space-y-2">
                <div className="h-2 w-16 bg-[#e2a84b]/70 rounded" />
                <div className="h-1.5 w-full bg-white/10 rounded" />
                <div className="h-1.5 w-4/5 bg-white/10 rounded" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] font-mono text-[#82a08f]">Focus: Signal &gt; Noise</span>
                  <span className="text-[10px] font-mono text-[#e2a84b]">0.0ms Fluff</span>
                </div>
              </div>

              <p className="text-sm text-[#a3bdae] leading-relaxed">
                Whitespace used as an active functional component. Razor-sharp typography where every pixel serves cognitive comprehension.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#d4a373] font-mono">
              <span>Used in: Vedica, Gali Labs</span>
              <span>→ Editorial</span>
            </div>
          </div>

          {/* Card 2: Cyber-Lime Vibrant */}
          <div className="rounded-3xl p-8 bg-[#c5f13b] text-[#0c1a11] border border-[#dcff5c] hover:shadow-[0_0_35px_rgba(197,241,59,0.3)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#1f3b28] font-bold">
                  Vibe 02 · Bio-Cybernetic
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0c1a11] animate-ping" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-extrabold tracking-tight text-[#0c1a11]">
                  Data, made human.
                </h3>
                <p className="text-xs text-[#1f3b28] font-mono font-semibold">
                  Vitality · Real-time · Conversational
                </p>
              </div>

              {/* Visual preview box */}
              <div className="p-4 rounded-2xl bg-[#0c1a11] text-[#faf8f5] space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#c5f13b]">
                  <span>Rosier AI Assistant</span>
                  <span>Active</span>
                </div>
                <div className="flex items-end gap-1.5 h-10 pt-2">
                  {[35, 60, 45, 80, 65, 95, 75, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#c5f13b] rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#1b3524] font-medium leading-relaxed">
                High-voltage digital experiences that bring dense biological sequences, telemetry signals, and ML predictions into palpable human terms.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0c1a11]/20 flex items-center justify-between text-xs font-mono font-bold text-[#0c1a11]">
              <span>Used in: BioEdge, NextUp</span>
              <span>→ Vitality</span>
            </div>
          </div>

          {/* Card 3: Deep Evidence Tech */}
          <div className="rounded-3xl p-8 bg-[#070e0a] border border-[#1b3626] hover:border-[#c5f13b]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#82a08f]">
                  Vibe 03 · Empirical Rigor
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#c5f13b]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#faf8f5] tracking-tight">
                  Decisions, from facts.
                </h3>
                <p className="text-xs text-[#c5f13b] font-mono">
                  R² Validation · SHAP Metrics · Empirical
                </p>
              </div>

              {/* Visual preview box */}
              <div className="p-4 rounded-2xl bg-[#0e1c15] border border-white/[0.07] font-mono text-xs space-y-1.5">
                <div className="flex justify-between text-[#a3bdae]">
                  <span>target_kinase:</span>
                  <span className="text-[#c5f13b]">CDK2</span>
                </div>
                <div className="flex justify-between text-[#a3bdae]">
                  <span>morgan_bits:</span>
                  <span className="text-[#e2a84b]">2048</span>
                </div>
                <div className="flex justify-between text-[#a3bdae]">
                  <span>validation_R2:</span>
                  <span className="text-[#faf8f5] font-bold">0.7103</span>
                </div>
              </div>

              <p className="text-sm text-[#a3bdae] leading-relaxed">
                No intuition hand-waving. Machine learning architectures backed by reproducible validation sets, sensitivity analyses, and auditable metrics.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#c5f13b] font-mono">
              <span>Used in: DockLens, T2D Twin</span>
              <span>→ Rigor</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
