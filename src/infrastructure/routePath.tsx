import React from "react";
import { Route, Routes } from "react-router-dom";
import AnonymousRoutes from "./routes/AnonymousRoutes";
import Registration from "../ features/authorization/Registration";
import LoginPage from "../screens/Login-page";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import CatPage from "../screens/Cat-page";

const RoutePath = () => {
  return (
    <Routes>
      <Route
        path="/registration"
        element={
          <AnonymousRoutes>
            <Registration />
          </AnonymousRoutes>
        }
      ></Route>
      <Route
        path="/auth"
        element={
          <AnonymousRoutes>
            <LoginPage />
          </AnonymousRoutes>
        }
      ></Route>
        <Route
            path="*"
            element={
                <AnonymousRoutes>
                    <LoginPage />
                </AnonymousRoutes>
            }
        ></Route>
      <Route
        path="/cat"
        element={
          <ProtectedRoutes>
            <CatPage />
          </ProtectedRoutes>
        }
      ></Route>
    </Routes>
  );
};

export default RoutePath;
