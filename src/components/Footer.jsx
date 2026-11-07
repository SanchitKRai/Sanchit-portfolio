import React, { useState, useEffect } from 'react'
import { ArrowUp, Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-[#060c08] border-t border-white/[0.08] text-sm text-[#82a08f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c5f13b] to-[#e2a84b] p-0.5">
              <div className="w-full h-full bg-[#0b140f] rounded-[6px] flex items-center justify-center">
                <span className="font-bold text-xs text-[#c5f13b]">S</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-base text-[#faf8f5] tracking-wider">SANCHIT KUMAR RAI</span>
              <p className="text-xs text-[#82a08f]">Turning biology into evidence.</p>
            </div>
          </div>

          {/* Time & Location */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5f13b] animate-pulse" />
              Delhi, India: <span className="text-[#faf8f5]">{currentTime || '14:15 IST'}</span>
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-[#faf8f5] border border-white/10 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Sanchit Kumar Rai. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/SanchitKRai" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5f13b] transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sanchitkrai" target="_blank" rel="noopener noreferrer" className="hover:text-[#e2a84b] transition-colors">
              LinkedIn
            </a>
            <a href="mailto:sanchitkrai.work@gmail.com" className="hover:text-[#faf8f5] transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
