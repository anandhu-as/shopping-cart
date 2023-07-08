import React, { useContext, useState } from "react";
import { useAuth } from "../../Auth/Auth";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const Auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    Auth.login(user);
    navigate("/cart");
  };
  return (
    <>
      <div className="box">
        <h6 className="message">
          login To Acess the cart <i className="fa-solid fa-cart-shopping"></i>
        </h6>
      </div>

      <div className="login-container">
        <h1>{Auth.user}</h1>
        <label>
          username:{" "}
          <input
            className="input"
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
