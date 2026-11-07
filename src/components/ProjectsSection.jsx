import React, { useState } from 'react'
import { ExternalLink, ArrowRight, Activity, Filter, Eye } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Data Science & Bio-ML', 'Web UI/UX & Product Design']

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="work" className="py-24 relative bg-[#09120d] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5f13b]">
              <Activity className="w-3.5 h-3.5" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf8f5]">
              Built to make <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#e2a84b]">consistently</span> useful.
            </h2>
            <p className="text-base text-[#a3bdae] max-w-xl">
              From molecular docking surrogates and health signal forecasts to luxury e-commerce interfaces and automated EDA engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0e1a14] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#e2a84b] text-[#0b140f] font-semibold shadow-lg'
                    : 'text-[#a3bdae] hover:text-[#faf8f5] hover:bg-white/[0.04]'
                }`}
              >
                {cat === 'All' ? `All Works (${projects.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#c5f13b]/30 transition-all duration-300 flex flex-col bg-[#0d1812]/90 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)]"
            >
              {/* Image Container with Hover Overlay */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#060c09] cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1812] via-transparent to-transparent opacity-60" />
                
                {/* Category Pill on top left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0b140f]/90 text-[#c5f13b] border border-[#c5f13b]/30 backdrop-blur-md shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* View Details Hover Button */}
                <div className="absolute inset-0 bg-[#09120d]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl bg-[#faf8f5] text-[#0b140f] text-xs font-semibold flex items-center gap-2 hover:bg-[#e2a84b] transition-colors shadow-xl"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-[#0b140f] text-[#faf8f5] border border-white/20 hover:border-[#c5f13b] hover:text-[#c5f13b] transition-colors"
                      title="Open Live App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-xl sm:text-2xl font-bold text-[#faf8f5] group-hover:text-[#e2a84b] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#a3bdae] leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-black/30 border border-white/[0.05]">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] font-mono uppercase text-[#82a08f] truncate">{m.label}</div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-[#faf8f5] truncate">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & Links Footer */}
                <div className="pt-2 flex items-center justify-between gap-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-[#c6d7cc]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#82a08f]">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e2a84b] hover:text-[#f5c879] transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
