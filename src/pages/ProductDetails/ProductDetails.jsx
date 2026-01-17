import React from "react";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductBanner from "./ProductBanner";
import Product from "./Product";
import HighlightsSection from "../../components/HighlightsSection";

const ProductDetails = () => {
  return (
    <div>
      <ProductDetailsInfo />
      <ProductBanner />
      <Product />
      <HighlightsSection />
    </div>
  );
};

export default ProductDetails;
