// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Card, CardBody, CardFooter } from "@heroui/card";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const ProductCard = ({ product }: { product: any }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     viewport={{ once: true }}
//     className="group cursor-pointer"
//   >
//     <Card
//       isPressable
//       shadow="sm"
//       className="flex flex-row-reverse items-center gap-4 overflow-hidden transition-all duration-300 hover:shadow-md"
//     >
//       {/* Left side: image */}
//       <CardBody className="flex-shrink-0 p-0 w-60 h-60 overflow-hidden">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={240}
//           height={240}
//           className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
//         />
//       </CardBody>

//       {/* Right side: info */}
//       <CardFooter className="flex flex-col items-start justify-center gap-2 py-4 px-6">
//         <h3 className="text-lg font-semibold text-default-900">
//           {product.name}
//         </h3>
//         <p className="text-default-500 text-base">${product.price}</p>
//         <p className="text-sm text-default-400 line-clamp-2">
//           {product.description}
//         </p>
//       </CardFooter>
//     </Card>
//   </motion.div>
// );

"use client";

import type { CardProps } from "@heroui/react";

import React from "react";
import { Card, CardBody, Image } from "@heroui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductCard({ product }: { product: any }) {
  return (
    <Card className="group w-full max-w-[720px] overflow-hidden transition-all duration-300">
      <CardBody className="flex flex-row-reverse flex-wrap p-0 sm:flex-nowrap">
        {/* Image section */}
        <div className="relative flex-none w-full md:w-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            removeWrapper
            className="object-cover object-top w-full h-full transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Info section */}
        <div className="px-4 py-5">
          <h3 className="text-large font-medium">Become an Acme Creator!</h3>
          <div className="text-small text-default-400 flex flex-col gap-3 pt-2">
            <p>
              Visit creators.acme.com to sign up today and start earning credits
              from your fans and followers.
            </p>
            <p>Acme supports YouTube, Twitch, Vimeo and more!</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
