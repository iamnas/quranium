'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function AboutPage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       transition={{ duration: 0.6 }}
//       className="h-screen flex flex-col justify-center items-center bg-white text-black"
//     >
//       <h1 className="text-4xl font-bold mb-4">About Quranium</h1>
//       <p className="max-w-md text-center mb-8">
//         Quranium leverages post-quantum cryptography and distributed ledger tech to secure the digital future.
//       </p>
//       <Link href="/" className="text-indigo-600 hover:underline">
//         ← Back to Home
//       </Link>
//     </motion.div>
//   );
// }



import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <section className="min-h-screen p-10">
        <h1 className="text-4xl font-bold mb-4">About Quranium</h1>
        <p className="text-lg max-w-2xl">
          Quranium is the future of digital security - Quantum-proof, Layer 1 DLT for the next generation.
        </p>
      </section>
    </motion.div>
  );
}
