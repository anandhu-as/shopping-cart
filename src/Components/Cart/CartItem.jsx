import React from "react";
import {
  clearCart,
  decrement,
  increment,
  logout,
  removeItem,
} from "../../Redux/features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
const CartItem = ({ cartItems, totalAmount }) => {
  const { username } = useSelector((state) => state.cart.username);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2 className="user">Welcome {username}</h2>
        <button className="logout" onClick={() => dispatch(logout())}>
          Logut
        </button>
        {cartItems.length == 0 && <h4 className="empty">Cart is Empty</h4>}
        {cartItems.map((item, id) => {
          return (
            <div key={id}>
              <div className="product">
                {/* onclicking image i can increment the quantity */}

                <img
                  src={item.productImage}
                  alt=""
                  onClick={() => dispatch(increment({ id: item.id }))}
                />

                <h4>
                  {item.productName} <br /> quantity: {item.quantity} <br />
                </h4>

                <br />
                <p>{item.productdesc}</p>
                <p>$ {item.price}</p>
                <button
                  className="dec"
                  onClick={() => dispatch(increment({ id: item.id }))}
                >
                  +
                </button>
                <br />

                <button
                  className="dec"
                  onClick={() =>
                    item.quantity > 1 && dispatch(decrement({ id: item.id }))
                  }
                >
                  -
                </button>
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
      <h1>
        <span> total price</span> <br /> $: {totalAmount()}{" "}
      </h1>
    </>
  );
};

export default CartItem;
