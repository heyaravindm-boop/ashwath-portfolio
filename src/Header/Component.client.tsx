'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent w-full" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="pt-10 pb-6 px-14 flex justify-between items-center">
        <Link href="/">
          {pathname === '/resume' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="https://wbfa6dvbvda3vgwp.public.blob.vercel-storage.com/website-images/3.png"
              alt="Ashwath Logo"
              className="w-auto h-[40px]"
              loading="eager"
            />
          ) : (
            <Logo loading="eager" priority="high" />
          )}
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
