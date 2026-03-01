'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export const HeroLanding: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Background drifts up at 30% of scroll speed — slower than content = parallax
        bgRef.current.style.transform = `translateY(${-window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeUp = (delay: number) => ({
    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
    opacity: mounted ? 1 : 0,
    transition: `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 0.7s ease ${delay}ms`,
  })

  const fadeIn = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transition: `opacity 0.6s ease ${delay}ms`,
  })

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-10 pt-28 pb-16"
    >
      {/* Parallax background — moves up at 30% of scroll speed */}
      <div
        ref={bgRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '160vh',   /* taller than viewport so upward drift never exposes a gap */
          zIndex: -1,
          background: 'linear-gradient(135deg, #0f0807 0%, #3d1814 45%, #5c2a22 100%)',
          willChange: 'transform',
        }}
      />

      <div className="flex flex-col md:flex-row items-center gap-14 max-w-5xl w-full">
        {/* Left — card */}
        <div className="relative flex-shrink-0" style={fadeUp(0)}>
          {/* Card */}
          <div
            className="group w-80 rounded-3xl overflow-hidden"
            style={{
              border: '1px solid rgba(255, 250, 243, 0.18)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Card top */}
            <div className="flex flex-col items-center pt-10 pb-8 px-6">
              <div
                className="relative w-44 h-44 rounded-full overflow-hidden flex-shrink-0"
                style={{ background: '#9A463D' }}
              >
                <Image src="/profile.png" alt="Ashwath" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>

              <h2
                className="mt-5 text-3xl text-center leading-tight"
                style={{ fontFamily: 'var(--font-seasons)', color: '#FFFAF3' }}
              >
                Ashwath
              </h2>

              <div className="mt-2 w-10 h-[2px] bg-[#F5C200]" />

              <p
                className="mt-3 text-[10px] font-semibold tracking-[0.25em] uppercase text-center"
                style={{ color: '#FFFAF3', opacity: 0.8, fontFamily: 'var(--font-league-spartan)' }}
              >
                Passionately Creative
              </p>
            </div>

            {/* Card bottom — contact links */}
            <div
              className="py-5 flex justify-center gap-6"
              style={{ background: '#D2958E' }}
            >
              {/* LinkedIn */}
              <a
                href="https://au.linkedin.com/in/ashwathabinaya"
                target="_blank"
                rel="noreferrer"
                className="text-[#FFFAF3]/60 hover:text-[#FFFAF3] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Call */}
              <a
                href="tel:+61468335609"
                className="text-[#FFFAF3]/60 hover:text-[#FFFAF3] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:ashwathcj8@gmail.com"
                className="text-[#FFFAF3]/60 hover:text-[#FFFAF3] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex-1">
          <h1
            className="text-8xl leading-none"
            style={{ fontFamily: 'var(--font-seasons)', color: '#FFFAF3' }}
          >
            {'Hello'.split('').map((letter, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.4s ease ${150 + i * 70}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${150 + i * 70}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <p
            className="mt-5 text-lg max-w-lg leading-relaxed"
            style={{ color: '#FFFAF3', opacity: 0.75, ...fadeIn(350) }}
          >
            I&apos;m a [your role] who loves [what you love]. Replace this with your personal
            tagline.
          </p>

          <div className="mt-8 flex items-center gap-4" style={fadeIn(500)}>
            <a
              href="/resume"
              className="px-8 py-3 bg-[#F5C200] font-bold rounded-full text-sm uppercase tracking-widest transition-all duration-300 ease-out hover:bg-[#E0B000] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_25px_rgba(245,194,0,0.45)] active:scale-95 active:translate-y-0"
              style={{ color: '#3d1814', fontFamily: 'var(--font-league-spartan)' }}
            >
              Resume
            </a>
            <a
              href="/portfolio"
              className="px-8 py-3 border-2 font-bold rounded-full text-sm uppercase tracking-widest transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_25px_rgba(255,250,243,0.2)] active:scale-95 active:translate-y-0"
              style={{
                color: '#FFFAF3',
                borderColor: '#FFFAF3',
                fontFamily: 'var(--font-league-spartan)',
              }}
            >
              Portfolio
            </a>
          </div>

          <p
            className="mt-10 leading-relaxed max-w-lg"
            style={{ color: '#FFFAF3', opacity: 0.6, ...fadeIn(650) }}
          >
            Replace this with your bio. I&apos;m a highly motivated professional eager to join a
            challenging and passionate team. As a self-starter and quick learner, I&apos;m ready to
            exceed expectations and bring fresh ideas to the table.
          </p>
        </div>
      </div>
    </section>
  )
}
