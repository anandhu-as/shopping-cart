import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/Notification/Notification.css";
import { Link } from "react-router-dom";
const Notification = () => {
  const { cartItems, productCount } = useSelector((state) => state.cart);
  const { username } = useSelector((state) => state.cart.username);
  return (
    <div className="message-container">
      {cartItems.length == 0 && !username ? <h5>No notifications</h5> : null}
      {username && <h5>{username} just logged in </h5>}
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
