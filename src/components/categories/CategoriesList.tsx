"use client";

import { getCategories } from "@/lib/api/categories";
import { Category } from "@/types/categories";
import { Button, Card, CardFooter, CardHeader, Image } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  console.log(123123, { data });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <>
      {data.map((category: Category) => (
        <Card
          key={category.id}
          isFooterBlurred
          className="group w-full max-w-[720px] h-100 overflow-hidden transition-all duration-300"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-white font-medium text-2xl">
              {category.name_en}
            </h4>
          </CardHeader>

          <Image
            removeWrapper
            alt={category.name_en}
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={category.image}
          />

          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-tiny">${category.slug_en}</p>
              <p className="text-white text-tiny">Available soon.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CategoriesList;
