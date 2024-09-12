'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
