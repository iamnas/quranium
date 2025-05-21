'use client';

import Spline from '@splinetool/react-spline';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css'; // we’ll add this in next step
import Link from 'next/link';

// import Spline from '@splinetool/react-spline/next';


export default function Hero() {
  const splineWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const [isRotating, setIsRotating] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // reset after 1s
  };



  return (
    <>
      <section
        ref={containerRef}
        className="h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
      >
        <motion.div
          style={{ scale, y: yShift }}
          className={`absolute inset-0 z-0 transition-transform duration-700 ${isRotating ? 'rotate-animation' : ''}`}
          ref={splineWrapperRef}
        >
          <Spline scene="https://prod.spline.design/BWkdp8Zl3mswVPZT/scene.splinecode" />
        </motion.div>

        {/* <motion.div
  style={{ scale, y: yShift }}
  className={`absolute inset-0 z-0 transition-transform duration-700 overflow-hidden rounded-xl ${
    isRotating ? 'rotate-animation' : ''
  }`}
  ref={splineWrapperRef}
>

  <Spline scene="https://prod.spline.design/BWkdp8Zl3mswVPZT/scene.splinecode" />
</motion.div> */}

        <div className="relative z-10 text-black dark:text-white text-center max-w-xl px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Quranium</h1>

          <p className="text-sm">
            The Uncrackable Foundation for the Digital Era.
          </p>
          <p className="text-sm mb-6">
            Quranium is the future of digital security — Quantum-proof, Layer 1 DLT for the next generation.
          </p>

          <div className="relative inline-block group" onClick={handleClick}>
            <span className="ripple" />
            <button className="relative z-10 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-4 space-y-8 transition-colors duration-500">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Discover the Future of Faith
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center text-base md:text-lg text-gray-700 dark:text-gray-300"
        >
          Scroll-based animations and 3D interactions powered by Spline and Web3.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="inline-block px-5 py-2 rounded-md text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            Learn More →
          </Link>
        </motion.div>
      </section>

    </>
  );
}
