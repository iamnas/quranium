'use client';

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
