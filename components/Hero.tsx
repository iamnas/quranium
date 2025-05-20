// 'use client';

// import Spline from '@splinetool/react-spline';

// export default function Hero() {
//   return (
//     <section className="h-screen flex items-center justify-center relative bg-black">
//       <div className="absolute inset-0 z-0">
//         <Spline
//           scene="https://prod.spline.design/BWkdp8Zl3mswVPZT/scene.splinecode"
//         />
//       </div>

//       <div className="relative z-10 text-white text-center">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Quranium</h1>
//         <p className="text-xl mb-6">A web3-native Quran experience</p>
//         <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import Spline from '@splinetool/react-spline';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function Hero() {
//   const splineRef = useRef<any>(null);
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start']
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
//   const yShift = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   return (
//     <>
//       <section
//         ref={containerRef}
//         className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
//       >
//         <motion.div
//           style={{ scale, y: yShift }}
//           className="absolute inset-0 z-0"
//         >
//           <Spline
//             scene="https://prod.spline.design/BWkdp8Zl3mswVPZT/scene.splinecode"
//             ref={splineRef}
//           />
//         </motion.div>

//         <div className="relative z-10 text-white text-center">
//           <h1 className="text-5xl font-bold mb-4">Welcome to Quranium</h1>
//           <p className="text-xl mb-6">A web3-native Quran experience</p>
//           <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all">
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* Scroll Section */}
//       <section className="h-screen bg-white text-black flex flex-col justify-center items-center space-y-8">
//         <motion.h2
//           initial={{ y: 100, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold"
//         >
//           Discover the Future of Faith
//         </motion.h2>
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-xl text-center"
//         >
//           Scroll-based animations and 3D interactions powered by Spline and Web3.
//         </motion.p>
//       </section>
//     </>
//   );
// }



'use client';

import Spline from '@splinetool/react-spline';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css'; // we’ll add this in next step
import Link from 'next/link';

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
        className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
      >
        <motion.div
          style={{ scale, y: yShift }}
          className={`absolute inset-0 z-0 transition-transform duration-700 ${isRotating ? 'rotate-animation' : ''
            }`}
          ref={splineWrapperRef}
        >
          <Spline scene="https://prod.spline.design/BWkdp8Zl3mswVPZT/scene.splinecode" />
        </motion.div>

        <div className="relative z-10 text-white text-center max-w-xl px-4">

          <h1 className="text-5xl font-bold mb-4">Welcome to Quranium</h1>

          <p className='text-sm'>
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

      {/* Scroll Section */}
      <section className="h-screen bg-white text-black flex flex-col justify-center items-center space-y-8">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Discover the Future of Faith
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center"
        >
          Scroll-based animations and 3D interactions powered by Spline and Web3.
        </motion.p>
        <Link href="/about" className="mt-4 inline-block text-indigo-300 underline">
          Learn More →
        </Link>

      </section>
    </>
  );
}
