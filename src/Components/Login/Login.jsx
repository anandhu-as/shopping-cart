import React, { useState } from "react";

import "../../Styles/Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/features/CartSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.cart.username);
  const handleLogin = () => {
    dispatch(login({ username: name }));
    username && navigate("/cart");
  };
  return (
    <>
      <div className="box">
        <h6 className="message">
          login To Acess the cart <i className="fa-solid fa-cart-shopping"></i>
        </h6>
      </div>

      <div className="login-container">
        <label>
          username:
          <input
            className="input"
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    </>
  );
};

export default Login;
