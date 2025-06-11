import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useContext(AuthContext);
  if (!user || !allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;