import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Category, Media } from '@/payload-types'

import { MyWorkGrid } from './Grid'

export const MyWork: React.FC = async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    where: { showInMyWork: { equals: true } },
    draft: false,
    depth: 1,
    limit: 8,
  })

  const projects = result.docs.map((post) => {
    const heroImage = post.heroImage as Media | null | undefined
    const firstCategory =
      Array.isArray(post.categories) && post.categories.length > 0
        ? (post.categories[0] as Category)
        : null

    return {
      title: post.title,
      category: firstCategory?.title ?? 'Portfolio',
      description: post.meta?.description ?? '',
      coverImage: heroImage?.url ?? '/books/cover1.png',
      pageColor: (post as any).bookPageColor ?? '#E4E1DE',
      href: `/posts/${post.slug}`,
    }
  })

  return (
    <section className="py-20 px-6 bg-[#fffaf3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-black text-gray-900 mb-2">My Work</h2>
        <div className="w-12 h-[3px] bg-[#F5C200] mb-14" />
        <MyWorkGrid projects={projects} />
      </div>
    </section>
  )
}
