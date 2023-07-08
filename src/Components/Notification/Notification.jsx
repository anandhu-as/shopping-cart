import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/Notification/Notification.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Auth/Auth";
const Notification = () => {
  const { cartItems, productCount } = useSelector((state) => state.cart);
  const auth = useAuth();
  return (
    <div className="message-container">
      {cartItems.length == 0 && auth.user == null ? (
        <h5>no notifications</h5>
      ) : (
        ""
      )}
      {auth.user && <h5>{auth.user} just logged in</h5>}
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.productName} added to cart</h5>
          </div>
        );
      })}
      <Link to="/cart">
        <h4>
          CheckoutCart <i className="fa-solid fa-cart-shopping"></i>
          {productCount}
        </h4>
      </Link>
    </div>
  );
};

export default Notification;
