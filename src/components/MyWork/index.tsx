'use client'

import React, { useEffect, useRef, useState } from 'react'

import { BookCard } from '@/components/BookCard'

const projects = [
  {
    title: 'Brand Identity',
    category: 'Branding',
    description:
      'Complete brand identity design including logo, color palette, and brand guidelines.',
    coverImage: '/books/cover1.png',
    pageColor: '#E4E1DE',
  },
  {
    title: 'Marketing Campaign',
    category: 'Marketing',
    description:
      'End-to-end digital marketing campaign strategy and execution with measurable results.',
    coverImage: '/books/cover2.png',
    pageColor: '#2C2827',
  },
  {
    title: 'Web Design',
    category: 'Design',
    description:
      'Modern, responsive web design focused on user experience and conversion optimization.',
    coverImage: '/books/cover3.jpg',
    pageColor: '#10B0D2',
  },
  {
    title: 'Social Strategy',
    category: 'Social Media',
    description:
      'Comprehensive social media strategy that grew engagement by 200% in three months.',
    coverImage: '/books/cover4.jpg',
    pageColor: '#181615',
  },
]

export const MyWork: React.FC = () => {
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
    <section className="py-20 px-6 bg-[#fffaf3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-black text-gray-900 mb-2">My Work</h2>
        <div className="w-12 h-[3px] bg-[#F5C200] mb-14" />

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
      </div>
    </section>
  )
}
