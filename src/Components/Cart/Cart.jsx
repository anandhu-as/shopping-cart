import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/Cart/Cart.css";
import { clearCart, removeItem } from "../../Redux/features/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, cartItems } = useSelector((state) => state.cart);
  const totalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.price;
    });
    return total;
  };
  return (
    <>
      <div>
        {cartItems.map((item, id) => {
          return (
            <div key={id}>
              <div className="product">
                <img src={item.productImage} alt="" />
                <h4>{item.productName}</h4>
                <p>$ {item.price}</p>
                <button onClick={() => dispatch(removeItem({ id: item.id }))}>
                  ❌
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="clear" onClick={() => dispatch(clearCart())}>
        ClearCart
      </button>
      <h1>total $:{totalAmount()} </h1>
    </>
  );
};

export default Cart;
