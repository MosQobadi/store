"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const ProductCard = ({ product }: { product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="overflow-hidden rounded-2xl bg-neutral-50">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="object-cover w-full h-96 transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-4 text-center">
      <h3 className="font-medium">{product.name}</h3>
      <p className="text-subtle mt-1">${product.price}</p>
    </div>
  </motion.div>
);
