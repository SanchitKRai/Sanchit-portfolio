import React, { useEffect, useRef } from 'react'

export default function DataWaveCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.015
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      ctx.clearRect(0, 0, width, height)

      // Center baseline
      const centerY = height * 0.55

      // Draw normal distribution / gaussian bell curve waves
      const waves = [
        { color: 'rgba(226, 168, 75, 0.45)', freq: 0.012, speed: 1.0, amp: 28, offset: 0 },
        { color: 'rgba(197, 241, 59, 0.35)', freq: 0.018, speed: 1.4, amp: 18, offset: 2 },
        { color: 'rgba(130, 160, 143, 0.25)', freq: 0.008, speed: 0.7, amp: 34, offset: 4 }
      ]

      waves.forEach(w => {
        ctx.beginPath()
        ctx.strokeStyle = w.color
        ctx.lineWidth = 1.5

        for (let x = 0; x < width; x += 4) {
          // Gaussian envelope to concentrate waves in center
          const distFromCenter = Math.abs(x - width / 2) / (width / 2)
          const envelope = Math.exp(-Math.pow(distFromCenter * 1.8, 2))

          const y = centerY + Math.sin(x * w.freq + time * w.speed + w.offset) * w.amp * envelope
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      // Draw distribution histogram bars on the right side (as in the mockup)
      const numBars = 18
      const startX = width * 0.55
      const barWidth = (width * 0.4) / numBars

      for (let i = 0; i < numBars; i++) {
        const bx = startX + i * barWidth
        const norm = i / numBars
        const baseH = (Math.sin(norm * Math.PI) * 45 + Math.sin(time * 2 + i * 0.3) * 8) + 12
        
        ctx.fillStyle = i % 2 === 0 ? 'rgba(226, 168, 75, 0.35)' : 'rgba(197, 241, 59, 0.25)'
        ctx.fillRect(bx, centerY - baseH / 2, barWidth - 4, baseH)
      }

      // Draw floating glowing nodes
      const numNodes = 7
      for (let i = 0; i < numNodes; i++) {
        const nx = (width * 0.15) + (i * (width * 0.7) / numNodes)
        const distFromCenter = Math.abs(nx - width / 2) / (width / 2)
        const envelope = Math.exp(-Math.pow(distFromCenter * 1.8, 2))
        const ny = centerY + Math.sin(nx * 0.015 + time * 1.2) * 25 * envelope

        // Node circle
        ctx.beginPath()
        ctx.arc(nx, ny, 3, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? '#e2a84b' : '#c5f13b'
        ctx.shadowColor = i % 2 === 0 ? '#e2a84b' : '#c5f13b'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full h-32 md:h-40 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0e1c15]/60 via-[#12241b]/80 to-[#0e1c15]/60 border border-emerald-900/30 p-2 backdrop-blur-md">
      <div className="absolute top-2 left-3 flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#a3bdae]/60">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c5f13b] animate-ping" />
        Neural / Telemetry Distribution Waveform
      </div>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
