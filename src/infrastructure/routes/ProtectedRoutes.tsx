import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const Auth = useSelector((state: any) => state.user.isAuth);

  if (!Auth) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoutes;
