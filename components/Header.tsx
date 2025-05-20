'use client';

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';


export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Quranium
      </Link>
      <DarkModeToggle />

      <nav className="space-x-6">
        <Link href="/" className="hover:underline text-gray-700 dark:text-gray-300">Home</Link>
        <Link href="/about" className="hover:underline text-gray-700 dark:text-gray-300">About</Link>
      </nav>
    </header>
  );
}
