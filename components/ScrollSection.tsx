'use client'
import { useEffect, useRef } from 'react'

export default function ScrollSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current?.getBoundingClientRect().top ?? 0
      const scale = 1 + Math.max(-top / 1000, 0)
      ref.current?.style.setProperty('--scale', `${scale}`)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-4xl"
      style={{ transform: 'scale(var(--scale, 1))' }}
    >
      Scroll to see magic ✨
    </div>
  )
}
