import React from "react";
import ShoppingCart from "../../components/Card/ShoppingCart";
// @ts-ignore
import headphones from "./../../assets/headphones.jpg";

function LandingPage() {
  return (
    <>
      <p>LandingPage </p>
      <ShoppingCart
        imgSrc={headphones}
        counter={<p>counter</p>}
        title="Apple iPhone 11 Pro 256GB Memory"
        price="$499.99"
        salePrice="$499"
      />
    </>
  );
}

export default LandingPage as React.FC;
