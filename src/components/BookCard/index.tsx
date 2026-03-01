import Image from 'next/image'
import React from 'react'

import styles from './book.module.css'

type BookCardProps = {
  title: string
  category: string
  description: string
  href?: string
  coverImage: string
  pageColor: string
}

export const BookCard: React.FC<BookCardProps> = ({
  title,
  category,
  description,
  href = '#',
  coverImage,
  pageColor,
}) => {
  const insideStyle = {
    border: `1px solid ${pageColor}`,
    boxShadow: [
      '10px 40px 40px -10px rgba(0,0,0,0.19)',
      `inset -2px 0 0 ${pageColor}`,
      'inset -3px 0 0 #dbdbdb',
      'inset -4px 0 0 white',
      'inset -5px 0 0 #dbdbdb',
      'inset -6px 0 0 white',
      'inset -7px 0 0 #dbdbdb',
      'inset -8px 0 0 white',
      'inset -9px 0 0 #dbdbdb',
    ].join(', '),
  }

  return (
    <div className={styles.book}>
      {/* Inside — book pages, revealed when cover opens */}
      <div className={styles.inside} style={insideStyle}>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
          {category}
        </span>
        <h3 className="text-sm font-bold text-gray-800 leading-tight mb-3">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-5">{description}</p>
        <a
          href={href}
          className="text-xs font-bold uppercase tracking-widest text-[#B8574D] border-b border-[#B8574D] pb-0.5 hover:opacity-70 transition-opacity"
        >
          View Project →
        </a>
      </div>

      {/* Front cover — image + spine shimmer + cover sheen */}
      <div className={styles.cover}>
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 240px, 360px"
        />
        <div className={styles.effect} />
        <div className={styles.light} />
      </div>
    </div>
  )
}
