import React from "react";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductBanner from "./ProductBanner";
import Product from "./Product";

const ProductDetails = () => {
  return (
    <div>
      <ProductDetailsInfo />
      <ProductBanner />
      <Product />
    </div>
  );
};

export default ProductDetails;
