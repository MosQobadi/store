"use client";

import { Button, Card, CardFooter, CardHeader, Image } from "@heroui/react";

// FIXME: change any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryCard({ category }: { category: any }) {
  return (
    <Card
      isFooterBlurred
      className="
        group
        w-full
        aspect-[4/3]
        sm:aspect-[3/2]
        lg:aspect-[16/9]
        overflow-hidden
        transition-all
        duration-300
      "
    >
      <CardHeader className="absolute z-10 top-2 left-2 flex-col items-start">
        <p className="text-[10px] text-white/60 uppercase font-bold">New</p>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl">
          {category.name_en}
        </h4>
      </CardHeader>

      <Image
        removeWrapper
        alt={category.name}
        className="
          z-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
        src={category.image}
      />

      <CardFooter className="absolute bottom-0 z-10 bg-white/30 border-t border-zinc-100/50 justify-between">
        <div>
          <p className="text-white text-[10px] sm:text-tiny">Available soon.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  );
}
