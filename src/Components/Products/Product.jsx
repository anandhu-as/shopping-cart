import React from "react";
import "../../Styles/Product/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/features/CartSlice";
const Product = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {products.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.productImage} alt="" />
            <h2>{item.productName}</h2>
            <p> ${item.price}</p>
            <button onClick={() => dispatch(addToCart({ item, id: item.id }))}>
              add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
