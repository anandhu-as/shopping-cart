import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const { username } = useSelector((state) => state.cart.username);
  if (!username) {
    return <Navigate to="/login" />;
    {
      /* if not logged in ? navigate back to login page */
    }
  }
  return <div>{children}</div>;
};

export default RequiredAuth;
