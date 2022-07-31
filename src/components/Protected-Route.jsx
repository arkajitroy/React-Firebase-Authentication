import React from "react";
import { Navigate } from "react-router-dom";
import { UseUserAuth } from "../context/UserAuth-Context";

const ProtectedRoute = ({ children }) => {
  // checking the authentication status
  let { user } = UseUserAuth();
  if (!user) {
    <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
