import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AnonymousRoutes: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const Auth = useSelector((state: any) => state.user.isAuth);

  if (Auth) {
    return <Navigate to="/cat" replace />;
  }

  return children;
};

export default AnonymousRoutes;
