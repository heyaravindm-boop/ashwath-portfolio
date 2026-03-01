'use client'

import React, { useEffect, useRef, useState } from 'react'

import { BookCard } from '@/components/BookCard'

export type Project = {
  title: string
  category: string
  description: string
  coverImage: string
  pageColor: string
  href: string
}

export const MyWorkGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
      {projects.map((project, i) => (
        <div
          key={project.title}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(50px)',
            transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
          }}
        >
          <BookCard {...project} />
        </div>
      ))}
    </div>
  )
}
