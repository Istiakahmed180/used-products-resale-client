import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const CategoriesProduct = () => {
  const { data: categories } = useQuery({
    queryKey: ["categoriesProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  console.log(categories);
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold">Chose Categories</h1>
      <div className="grid grid-cols-3 gap-5">
        {categories &&
          categories.map((category) => (
            <CategoriesCard
              key={category._id}
              categories={category}
            ></CategoriesCard>
          ))}
      </div>
    </div>
  );
};

export default CategoriesProduct;
