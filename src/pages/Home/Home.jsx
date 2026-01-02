import React from "react";
import FeaturedSection from "./FeaturedSection";
import BannerSection from "./BannerSection";
import CategorySection from "./CategorySection";
import ProductBanner from "./ProductBanner";
import Product from "./Product";
import ProductOthers from "./ProductOthers";
import ClientsSection from "./ClientsSection";
import ProductTab from "./ProductTab";

const Home = () => {
  return (
    <div>
      <FeaturedSection />
      <BannerSection />
      <CategorySection />
      <ProductBanner />
      <Product />
      <ProductOthers />
      <ClientsSection />
      <ProductTab />
    </div>
  );
};

export default Home;
