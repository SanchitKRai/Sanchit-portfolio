import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle, Cpu, Layers } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b140f] border border-white/10 shadow-2xl glass-panel p-6 sm:p-8 space-y-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.08] hover:bg-white/20 text-[#faf8f5] transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header / Badges */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#c5f13b]/15 text-[#c5f13b] border border-[#c5f13b]/30">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] text-[#a3bdae]">
              {project.category}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#faf8f5]">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#e2a84b] font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#060c09] shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[420px] object-cover object-top"
          />
        </div>

        {/* If secondary image exists (e.g. Defender chassis) */}
        {project.secondaryImage && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#a3bdae]">Sub-system Breakdown View:</div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#060c09]">
              <img
                src={project.secondaryImage}
                alt={`${project.title} chassis`}
                className="w-full max-h-[350px] object-cover object-top"
              />
            </div>
          </div>
        )}

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#09120c] border border-white/[0.06]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-2 text-center">
              <div className="text-[11px] font-mono uppercase text-[#82a08f]">{m.label}</div>
              <div className="text-base sm:text-lg font-mono font-bold text-[#c5f13b] mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Highlights & Architecture */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#faf8f5] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#e2a84b]" />
            <span>Key Engineering Highlights</span>
          </h3>
          <div className="space-y-2.5">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <CheckCircle className="w-4 h-4 text-[#c5f13b] shrink-0 mt-0.5" />
                <span className="text-sm text-[#c6d7cc] leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-mono uppercase text-[#82a08f]">Technologies & Frameworks:</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.06] border border-white/10 text-[#faf8f5]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#e2a84b] hover:bg-[#f5c879] text-[#0b140f] font-semibold text-xs flex items-center gap-2 shadow-lg"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/15 text-[#faf8f5] font-semibold text-xs flex items-center gap-2 border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#a3bdae] hover:text-[#faf8f5] px-4 py-2"
          >
            Close Window (Esc)
          </button>
        </div>

      </div>
    </div>
  )
}
