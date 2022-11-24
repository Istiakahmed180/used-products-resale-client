import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const ProductsForCategory = () => {
  const products = useLoaderData();
  console.log(products.products);
  return (
    <div>
      <h1>Category Products</h1>
      <div className="mx-auto w-3/4">
        {products.products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsForCategory;
