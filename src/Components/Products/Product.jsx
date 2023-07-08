import React from "react";
import "../../Styles/Product/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, logout } from "../../Redux/features/CartSlice";
import { avatar } from "../../images/avatar";

const Product = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.cart.username);
  return (
    <div className="container">
      {username && (
        <>
          <img
            src={avatar}
            className="avatar"
            onDoubleClick={() => dispatch(logout())}
          />
          <h6 className="username">{username}</h6>
        </>
      )}
      {products.map((item) => {
        return (
          <>
            <div key={item.id} className="card">
              <img src={item.productImage} alt="" />
              <h2>{item.productName}</h2>
              <p> ${item.price}</p>
              <button
                onClick={() => dispatch(addToCart({ item, id: item.id }))}
              >
                add
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
