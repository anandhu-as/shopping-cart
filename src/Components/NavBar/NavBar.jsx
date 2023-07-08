import React from "react";
import "../../Styles/NavBar/NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../Auth/Auth";
const NavBar = () => {
  const auth = useAuth();
  const { productCount } = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      {/* Links */}

      <Link to="/">
        {" "}
        <h4>
          <i className="fa fa-home" aria-hidden="true"></i>
        </h4>
      </Link>
      <Link to="/notifications">
        <h4>
          <i className="fa-solid fa-bell"></i> 
        </h4>
      </Link>
      <Link to="/cart">
        <h4>
        <i className="fa fa-shopping-bag" aria-hidden="true"></i> {productCount}
        </h4>
      </Link>
      {!auth.user && (
        <Link to="/login">
          <h4>
            <i className="fa-solid fa-user"></i>
          </h4>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
