"use client";

import { getCategories } from "@/lib/api/categories";
import { Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const CategoriesList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <Spinner />;
  if (error) return <p>Failed to load products.</p>;

  const visibleCategories = showAll ? data : data.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visibleCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      {!showAll && data.length > 4 && (
        <>
          <Button
            onClick={() => setShowAll(true)}
            variant="flat"
            radius="lg"
            color="primary"
            className="mx-auto mt-2 font-medium shadow-sm hover:shadow-md transition-all text-xs"
            endContent={<RiArrowDownSLine className="text-lg" />}
          >
            Show More Categories
          </Button>
        </>
      )}
    </div>
  );
};

export default CategoriesList;
