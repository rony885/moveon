import React from "react";
import CartInfo from "./CartInfo";
import Product from "./Product";
import HighlightsSection from "../../components/HighlightsSection";

const Cart = () => {
  return (
    <div>
      <CartInfo />
      <Product />
      <HighlightsSection />
    </div>
  );
};

export default Cart;
