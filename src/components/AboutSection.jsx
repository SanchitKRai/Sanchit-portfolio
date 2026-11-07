import React from 'react'
import { Award, BookOpen, GraduationCap, Code2, Dna, Terminal, Check } from 'lucide-react'

export default function AboutSection() {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: <Terminal className="w-4 h-4 text-[#c5f13b]" />,
      skills: ['Scikit-Learn', 'XGBoost', 'SHAP Analysis', 'PyTorch', 'FastAPI', 'Time-Series Forecasting', 'LLM Agent Tooling']
    },
    {
      title: 'Computational Biology & Chem',
      icon: <Dna className="w-4 h-4 text-[#e2a84b]" />,
      skills: ['AutoDock Vina', 'RDKit', 'Biopython', 'Morgan Fingerprints', 'SMILES Processing', 'Protein-Ligand Docking', 'NCBI E-Utilities']
    },
    {
      title: 'Data Engineering & Analytics',
      icon: <Code2 className="w-4 h-4 text-[#c5f13b]" />,
      skills: ['Python 3.12+', 'Pandas & NumPy', 'SQL (PostgreSQL/DuckDB)', 'Streamlit', 'EDA Profiling', 'Matplotlib / Seaborn']
    },
    {
      title: 'UI/UX & Web Development',
      icon: <GraduationCap className="w-4 h-4 text-[#e2a84b]" />,
      skills: ['React 19', 'Tailwind CSS', 'Vite', 'Figma Auto-Layout', 'Design Systems', 'Modern JavaScript / ES6+', 'Git / GitHub CI/CD']
    }
  ]

  return (
    <section id="about" className="py-24 relative bg-[#09120c] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5f13b]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf8f5]">
            Scientific curiosity.{' '}
            <span className="font-serif italic font-normal text-[#e2a84b]">A maker's</span> mindset.
          </h2>
        </div>

        {/* 2-Column Story & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-[#a3bdae] text-base sm:text-lg leading-relaxed">
            <p>
              I am an undergraduate researcher in <strong className="text-[#faf8f5] font-semibold">Life Sciences at the University of Delhi</strong>, building software and data models at the frontier where biological complexity meets modern computing.
            </p>
            <p>
              My journey started with a fascination for molecular mechanisms: how small chemical changes govern cellular cascades, drug binding, and disease progression. To unpack these systems at scale, I taught myself computational chemistry, data science, and modern web engineering.
            </p>
            <p>
              Today, I build tools that span the full pipeline: training surrogate affinity models with <strong className="text-[#c5f13b]">AutoDock & RDKit</strong>, forecasting continuous glucose telemetry with <strong className="text-[#e2a84b]">XGBoost & SHAP</strong>, and engineering conversion-optimized, dark-mode web experiences in <strong className="text-[#faf8f5]">React & Tailwind CSS</strong>.
            </p>

            {/* Philosophy quote card */}
            <div className="p-6 rounded-2xl bg-[#0e1a14] border-l-4 border-[#e2a84b] border-t border-r border-b border-white/[0.06] space-y-2">
              <p className="font-serif italic text-xl text-[#faf8f5]">
                "Decisions from facts. Turning biology into evidence. Code that scales."
              </p>
              <div className="text-xs font-mono text-[#82a08f]">
                — Sanchit Kumar Rai
              </div>
            </div>
          </div>

          {/* Photo Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1b3629] via-[#c5f13b]/20 to-[#e2a84b]/20 rounded-3xl blur-xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-emerald-500/30 shadow-2xl">
                <img
                  src="./images/sanchit-portrait.jpg"
                  alt="Sanchit Kumar Rai - Data Scientist"
                  className="w-full object-cover"
                />
                <div className="p-5 bg-[#0b140f] border-t border-white/[0.08] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#c5f13b]">University of Delhi</span>
                    <span className="text-[#82a08f]">Delhi, India</span>
                  </div>
                  <div className="text-sm font-semibold text-[#faf8f5]">
                    Life Sciences · Data Science · ML
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Skills Matrix */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#faf8f5] flex items-center gap-2">
            <span>Technical Capabilities Matrix</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.05] text-[#82a08f]">Verified</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1a14]/80 border border-white/[0.07] hover:border-[#c5f13b]/30 transition-all space-y-4"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
                  {cat.icon}
                  <h4 className="text-sm font-bold text-[#faf8f5]">{cat.title}</h4>
                </div>

                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-[#c6d7cc]">
                      <span className="w-1 h-1 rounded-full bg-[#c5f13b]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
