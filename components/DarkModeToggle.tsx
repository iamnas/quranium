'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.documentElement.classList;
    isDark ? bodyClass.add(className) : bodyClass.remove(className);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="ml-4 px-2 py-1 border rounded text-sm border-gray-400 dark:border-gray-600"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
