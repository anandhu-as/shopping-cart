import React from "react";
import "../../Styles/NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>{" "}
        {cartItems.length == 0 ? "" : cartItems.length}
      </Link>
    </div>
  );
};

export default NavBar;
