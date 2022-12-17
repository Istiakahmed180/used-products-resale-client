import { useQuery } from "@tanstack/react-query";
import React from "react";
import MyProductsCard from "./MyProductsCard";

const MyProducts = () => {
  const { data: myProducts } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addproducts");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-10">My Products</h1>
      <div className="gird grid-cols-1 lg:grid-cols-3 gap-5">
        {myProducts &&
          myProducts.map((product) =>
            product?.role === "seller" ? (
              <MyProductsCard
                key={product._id}
                product={product}
              ></MyProductsCard>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

export default MyProducts;
