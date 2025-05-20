// 'use client';

// import './globals.css';
// import { Inter } from 'next/font/google';
// import { AnimatePresence, motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <html lang="en" suppressHydrationWarning className="dark">
//       <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
//         <Header />
//         <AnimatePresence mode="wait">
//           <motion.main
//             key={pathname}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.5 }}
//           >
//             {children}
//           </motion.main>
//         </AnimatePresence>
//         <Footer />
//       </body>
//     </html>
//   );
// }



import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Quranium',
  description: 'Quantum-proof Layer 1 DLT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}