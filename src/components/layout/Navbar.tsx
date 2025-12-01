"use client";

import Link from "next/link";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      {/* Left: Logo */}
      <span className="font-semibold text-lg tracking-tight">store.</span>

      {/* Center: Menu */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex gap-8 text-sm text-neutral-700">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <Link href="/products" className="hover:text-black">
          Products
        </Link>
        <Link href="/categories" className="hover:text-black">
          Categories
        </Link>
      </div>
      <div className="w-8" />
    </div>
  </nav>
);
