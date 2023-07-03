import React from "react";
import { products } from "../../Data/Data";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="product-container">
      {products.map((item, id) => {
        return <Product data={item} key={id} />;
      })}
    </div>
  );
};

export default Shop;
