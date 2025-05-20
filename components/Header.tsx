'use client'

import Link from 'next/link'
import useDarkMode from '@/hooks/useDarkMode'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const [isDark, toggleDark] = useDarkMode()

  return (
    <header className="flex justify-between items-center px-4 py-3 border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-xl font-bold">
        <Link href="/">Quranium</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <button
          onClick={toggleDark}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  )
}
