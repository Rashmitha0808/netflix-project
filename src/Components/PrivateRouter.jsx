import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const token = localStorage.getItem("netflix_token");

  return token ? children : <Navigate to="/login" />;
}
 
export default PrivateRouter;
