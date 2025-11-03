import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // replace with real auth logic
  return isAuthenticated ? children : <Navigate to="/student-login" replace />;
};

export default PrivateRoute;
