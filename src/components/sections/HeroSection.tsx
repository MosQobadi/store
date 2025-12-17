"use client";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section
    className="
      relative
      flex
      min-h-[70vh]
      md:min-h-[80vh]
      items-center
      justify-center
      px-4
      sm:px-6
      bg-cover
      bg-center
      bg-no-repeat
    "
    style={{
      backgroundImage:
        "url('https://www-cdn.djiits.com/cms/uploads/a3f51196440a72a863363c35ce42e332@origin.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="relative z-10 max-w-3xl text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          font-semibold
          tracking-tight
          text-white
          leading-tight
        "
      >
        Experience Clarity
      </motion.h1>

      <p
        className="
          mt-4
          sm:mt-6
          text-sm
          sm:text-base
          md:text-lg
          text-white/90
          leading-relaxed
        "
      >
        Discover the next generation of minimal design products.
      </p>

      <div className="mt-8 sm:mt-10">
        <button
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-white
            px-6
            py-3
            text-sm
            sm:text-base
            font-medium
            text-black
            transition
            hover:bg-neutral-200
            active:scale-95
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  </section>
);
