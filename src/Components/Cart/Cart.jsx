import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import "../../Styles/Cart.css";
const Cart = () => {
  const { cartItems, removeFromCart, ClearCart } = useContext(CartContext);
  const handleRemove = (productId) => removeFromCart(productId);
  return (
    <div>
      <button className="clear-button" onClick={ClearCart}>
        ClearCart
      </button>
      {cartItems.map((product) => {
        return (
          <div key={product.id} className="product-container">
            <img className="product-image" src={product.productImage} />
            <h1 className="product-name">
              {product.productName} <br />${product.price}
              <h4>{product.count} items</h4>{" "}
            </h1>
            {/* in cartContext conditionally checked */}
            <button className="buy-button">Buy Now</button>
            <button
              className="remove-button"
              onClick={() => handleRemove(product.id)}
            >
              {" "}
              Remove ❌{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
