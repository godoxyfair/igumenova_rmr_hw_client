import { Navigate } from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import LoginPage from "../../screens/Login-page";

// type Props = {
//     isAuth: boolean,
//     children: ReactNode
// }

//TODO не выкупаю как
const ProtectedRoutes = ({ children }) => {

  const Auth = useSelector((state) => state.user.isAuth);

  if (Auth) {
    return <Navigate to="/cat" replace />;
  }

  return  <LoginPage/> ;
};

export default ProtectedRoutes;
