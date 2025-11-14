"use client";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center text-center px-6 py-52 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://www-cdn.djiits.com/cms/uploads/a3f51196440a72a863363c35ce42e332@origin.jpg')",
    }}
  >
    {/* Optional: background overlay for better text readability */}
    <div className="absolute inset-0 bg-black/40" />

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 text-5xl md:text-7xl font-semibold tracking-tight text-white"
    >
      Experience Clarity
    </motion.h1>

    <p className="relative z-10 mt-6 text-white/90 max-w-xl">
      Discover the next generation of minimal design products.
    </p>

    <div className="relative z-10 mt-10">
      <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition">
        Shop Now
      </button>
    </div>
  </section>
);
