import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/Cart/Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  };
  return <CartItem cartItems={cartItems} totalAmount={totalAmount} />;
};

export default Cart;
