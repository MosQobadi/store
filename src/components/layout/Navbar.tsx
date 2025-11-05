"use client";

import Link from "next/link";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
    <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-4">
      <span className="font-semibold text-lg tracking-tight">store.</span>
      <div className="flex gap-8 text-sm text-neutral-700">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <Link href="/products" className="hover:text-black">
          Products
        </Link>
        <Link href="/cart" className="hover:text-black">
          Cart
        </Link>
      </div>
    </div>
  </nav>
);
