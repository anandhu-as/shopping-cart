import React from "react";
import { useAuth } from "../../Auth/Auth";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
    {
      /* if not logged in ? navigate back to login page */
    }
  }
  return <div>{children}</div>;
};

export default RequiredAuth;
