"use client";

import { getCategories } from "@/lib/api/categories";
import { useQuery } from "@tanstack/react-query";

const CategoriesList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  console.log({ data });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return <div>CategoriesList</div>;
};

export default CategoriesList;
