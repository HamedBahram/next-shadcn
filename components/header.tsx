import Link from 'next/link'

import { ThemeToggle } from '@/components/theme-toggle'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'

import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/20 py-6 backdrop-blur-sm'>
      <nav className='container flex items-center justify-between'>
        <Sheet>
          <SheetTrigger className='sm:hidden'>
            <Menu className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent side='left'>
            <ul className='flex flex-col gap-3 text-sm'>
              <li className='font-sans text-2xl'>
                <SheetClose asChild>
                  <Link href='/'>Broker</Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        <ul className='hidden items-center gap-14 text-sm font-medium sm:flex'>
          <li className='font-serif text-lg font-bold'>
            <Link href='/'>Broker Logo</Link>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
