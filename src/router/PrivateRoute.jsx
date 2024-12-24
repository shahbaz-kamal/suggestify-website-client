import React from "react";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <div></div>;
};

export default PrivateRoute;
