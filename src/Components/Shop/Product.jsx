import React from "react";
import "../../Styles/Product.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
const Product = ({ data }) => {
  const { AddToCart } = useContext(CartContext);
  const handleAdd = () => {
    AddToCart(data);
  };
  return (
    <div className="products">
     
      <div className="card">
      <img src={data.productImage} alt="" />
        <h4>{data.productName}</h4>
        <h3>$ {data.price}</h3>
        <button onClick={handleAdd}> Add</button>
      </div>
    </div>
  );
};

export default Product;
