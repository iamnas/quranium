export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-10">
      © {new Date().getFullYear()} Quranium. All rights reserved.
    </footer>
  );
}
