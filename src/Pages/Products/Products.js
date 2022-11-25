import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PurchaseModal from "../PurchaseModal/PurchaseModal";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [sellerProduct, setSellerProduct] = useState(null);
  const products = useLoaderData();
  return (
    <div>
      <div className="">
        {products &&
          products.map((product) => (
            <ProductsCard
              key={product._id}
              product={product}
              setSellerProduct={setSellerProduct}
            ></ProductsCard>
          ))}
      </div>
      {sellerProduct && (
        <PurchaseModal
          sellerProduct={sellerProduct}
          setSellerProduct={setSellerProduct}
        ></PurchaseModal>
      )}
    </div>
  );
};

export default Products;
