import React from "react";
import {
  clearCart,
  decrement,
  increment,
  removeItem,
} from "../../Redux/features/CartSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Auth/Auth";

const CartItem = ({ cartItems, totalAmount }) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const handleLogout = () => auth.logout();
  return (
    <>
      <div>
        <h2 className="user">Welcome user: {auth.user}</h2>
        <button className="logout" onClick={handleLogout}>
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
        <span> total price</span> <br /> $: {totalAmount()} {" "}
      </h1>
    </>
  );
};

export default CartItem;
