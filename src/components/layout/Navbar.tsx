'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Logo
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className={isActive('/')}>
              Home
            </Link>
            <Link href="/blog" className={isActive('/blog')}>
              Blog
            </Link>
            <Link href="/about" className={isActive('/about')}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}