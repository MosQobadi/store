"use client";

import { getProducts } from "@/lib/api/products";
import { useQuery } from "@tanstack/react-query";

const TopProducts = () => {
  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const topProducts = data?.filter((product) => {
    return product.tags.includes("tag1");
  });

  return <div></div>;
};

export default TopProducts;
