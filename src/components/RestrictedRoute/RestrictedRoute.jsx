import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
