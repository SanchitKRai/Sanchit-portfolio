import React from 'react'
import { ArrowDown, ArrowUpRight, Sparkles, Brain, Dna, Database, Terminal } from 'lucide-react'
import DataWaveCanvas from './DataWaveCanvas'

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow / Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13241b]/80 border border-[#274b39] text-xs font-mono tracking-wider text-[#c5f13b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5f13b] animate-pulse" />
            SANCHIT KUMAR RAI
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#a3bdae]">
            <Dna className="w-3.5 h-3.5 text-[#e2a84b]" />
            Computational Biology
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#a3bdae]">
            <Brain className="w-3.5 h-3.5 text-[#c5f13b]" />
            Machine Learning & AI
          </div>
        </div>

        {/* Two-column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#faf8f5] leading-[1.08]">
                Complex ideas.{' '}
                <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-[#e2a84b] hover:text-[#f5c879] transition-colors">
                  Compelling digital
                </span>{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#e2a84b] via-[#c5f13b] to-[#faf8f5]">
                  experiences.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#a3bdae] max-w-2xl font-normal leading-relaxed">
                Life sciences researcher and data scientist fusing <strong className="text-[#faf8f5] font-medium">computational biology</strong>, predictive modeling, and <strong className="text-[#faf8f5] font-medium">high-impact product engineering</strong>. Turning biological data into evidence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e2a84b] text-[#0b140f] font-semibold text-sm hover:bg-[#f5c879] transition-all hover:shadow-[0_0_25px_rgba(226,168,75,0.4)] hover:-translate-y-0.5"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-medium text-[#eae4d7] hover:bg-white/[0.09] hover:border-[#c5f13b]/40 transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5f13b]" />
              </a>
            </div>

            {/* Waveform Visualization Canvas */}
            <div className="pt-2">
              <DataWaveCanvas />
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
              <div>
                <div className="text-2xl font-mono font-bold text-[#faf8f5]">0.71 <span className="text-xs text-[#c5f13b]">R²</span></div>
                <div className="text-xs text-[#82a08f] mt-0.5">CDK2 Affinity Validation</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[#faf8f5]">10+</div>
                <div className="text-xs text-[#82a08f] mt-0.5">Production Apps & Systems</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[#faf8f5]">2 hrs</div>
                <div className="text-xs text-[#82a08f] mt-0.5">Early Spike Glucose Warning</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Glow backdrop behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1b3629] via-[#c5f13b]/20 to-[#e2a84b]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-emerald-500/20 shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="./images/sanchit-hero.jpg"
                    alt="Sanchit Kumar Rai"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b140f] via-transparent to-transparent opacity-90" />
                </div>

                {/* Overlaid Information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#c5f13b] bg-[#0b140f]/80 px-2.5 py-1 rounded-md border border-[#c5f13b]/30">
                      University of Delhi
                    </span>
                    <span className="text-[11px] font-mono text-[#a3bdae]">
                      Available for hire
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#faf8f5]">Sanchit Kumar Rai</h3>
                    <p className="text-xs text-[#a3bdae] font-mono mt-0.5">
                      Data Science · ML · Computational Biology
                    </p>
                  </div>

                  {/* Badges strip */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] text-[#eae4d7]">
                      AutoDock Vina
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] text-[#eae4d7]">
                      RDKit
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] text-[#eae4d7]">
                      XGBoost
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] text-[#eae4d7]">
                      FastAPI
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] text-[#eae4d7]">
                      React / Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
