"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/products";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* FIXME: change any */}
      {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data?.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
