import { useQuery } from "@tanstack/react-query";
import React from "react";
import HomeCategoriesCard from "./HomeCategoriesCard";

const HomeCategories = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://final-project-server-nine.vercel.app/category"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-10">
      <h1 className="text-2xl text-center font-semibold mb-10">
        Laptop Categories
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {categories &&
          categories.map((category) => (
            <HomeCategoriesCard
              key={category._id}
              categoryCard={category}
            ></HomeCategoriesCard>
          ))}
      </div>
    </div>
  );
};

export default HomeCategories;
