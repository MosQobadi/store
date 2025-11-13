"use client";

import { Button, Card, CardFooter, CardHeader, Image } from "@heroui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductCard({ product }: { product: any }) {
  return (
    <Card
      isFooterBlurred
      className="group w-full max-w-[720px] h-100 overflow-hidden transition-all duration-300"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-white font-medium text-2xl">{product.name}</h4>
      </CardHeader>

      <Image
        removeWrapper
        alt={product.name}
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={product.image}
      />

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white text-tiny">${product.price}</p>
          <p className="text-white text-tiny">Available soon.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  );
}
