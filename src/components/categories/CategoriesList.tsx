"use client";

import { getCategories } from "@/lib/api/categories";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  console.log({ data });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {data.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
