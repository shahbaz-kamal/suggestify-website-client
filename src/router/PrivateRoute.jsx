import React from "react";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Components/Loading";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/log-in"}></Navigate>;
};

export default PrivateRoute;
