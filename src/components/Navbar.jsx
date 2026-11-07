import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [soundActive, setSoundActive] = useState(false)
  const [audioCtx, setAudioCtx] = useState(null)
  const [oscillatorNodes, setOscillatorNodes] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ambient sound generator via Web Audio API (satisfies ambient audio feature)
  const toggleAmbientSound = () => {
    if (!soundActive) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        // Ambient soft harmonic chord (F# minor / D maj7 peaceful drone)
        const freqs = [185.0, 220.0, 277.18, 329.63]
        const masterGain = ctx.createGain()
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime)
        masterGain.connect(ctx.destination)

        const oscs = freqs.map(freq => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          osc.frequency.setValueAtTime(freq, ctx.currentTime)
          gain.gain.setValueAtTime(0.03, ctx.currentTime)
          osc.connect(gain)
          gain.connect(masterGain)
          osc.start()
          return { osc, gain }
        })

        setAudioCtx(ctx)
        setOscillatorNodes(oscs)
        setSoundActive(true)
      } catch (e) {
        console.error('Audio not supported:', e)
      }
    } else {
      if (audioCtx) {
        audioCtx.close()
      }
      setSoundActive(false)
      setOscillatorNodes([])
    }
  }

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Personality', href: '#personality' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#09120c]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c5f13b] to-[#e2a84b] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b140f] rounded-[10px] flex items-center justify-center">
              <span className="font-bold text-sm tracking-tighter text-[#c5f13b]">S</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-base sm:text-lg text-[#faf8f5] group-hover:text-[#c5f13b] transition-colors">
              SANCHIT
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#a3bdae]">
              Data · ML · Bioinformatics
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#c6d7cc]">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="hover:text-[#faf8f5] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#c5f13b] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Ambient Audio Pill */}
          <button
            onClick={toggleAmbientSound}
            title={soundActive ? 'Mute ambient sound' : 'Turn on ambient soundscape'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
              soundActive 
                ? 'bg-[#c5f13b]/15 text-[#c5f13b] border-[#c5f13b]/40 shadow-[0_0_15px_rgba(197,241,59,0.2)]' 
                : 'bg-white/[0.03] text-[#a3bdae] border-white/[0.08] hover:border-white/20'
            }`}
          >
            {soundActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#c5f13b]" />
                <span>Ambient: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Sound</span>
              </>
            )}
          </button>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-xs text-[#a3bdae]">
            <span className="w-2 h-2 rounded-full bg-[#c5f13b] animate-ping" />
            <span className="text-emerald-300 font-medium">Available for Projects</span>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#e2a84b] text-[#0b140f] hover:bg-[#f5c879] transition-all hover:shadow-[0_0_20px_rgba(226,168,75,0.4)] hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#09120c]/98 border-b border-white/10 px-6 py-6 mt-2 backdrop-blur-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#c6d7cc] hover:text-[#c5f13b] py-1 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={toggleAmbientSound}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono border border-white/10 bg-white/[0.04] text-[#a3bdae]"
              >
                {soundActive ? <Volume2 className="w-4 h-4 text-[#c5f13b]" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundActive ? 'Disable Ambient Drone' : 'Enable Ambient Drone'}</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#e2a84b] text-[#0b140f] font-semibold text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
