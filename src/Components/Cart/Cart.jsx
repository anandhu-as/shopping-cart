import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import "../../Styles/Cart.css";
const Cart = () => {
  const { cartItems, removeFromCart,ClearCart } = useContext(CartContext);
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  return (
    <div>
      <button className="clear-button" onClick={ClearCart}>ClearCart</button>
      {cartItems.map((product) => {
        return (
          <div key={product.id} className="product-container">
            <img className="product-image" src={product.productImage} alt="" />
            <h1 className="product-name">
              {product.productName} <br />
              {product.count}
            </h1>
            {/* in cartContext conditionally checked */}
            <button
              className="remove-button"
              onClick={() => handleRemove(product.id)}
            >
              {" "}
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
