import { Navigate } from "react-router-dom";
import React from "react";

// type Props = {
//     isAuth: boolean,
//     children: ReactNode
// }

//TODO не выкупаю как
const ProtectedRoutes = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/cat" replace />;
  }
  return children;
};

export default ProtectedRoutes;
