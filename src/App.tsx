import React from "react";
import "./App.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Footer from "./ features/components/sticky-footer/Footer";
import Navbar from "./ features/components/navbar/Navbar";
import Registration from "./ features/components/authorization/Registration";
import CatPage from "./screens/Cat-page";
import { useSelector } from "react-redux";
import LoginPage from "./screens/Login-page";

function App() {
  const isAuth = useSelector((state: any) => state.user.isAuth);
//TODO path вынести в константы
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="wrap">
          <Routes>
            <Route
              path="/registration"
              element={!isAuth && <Registration />}
            ></Route>
            <Route
              path="/auth"
              element={!isAuth ? <LoginPage /> : <Navigate to={"/cat"}/>}
            ></Route>
            <Route path="/cat" element={isAuth ? <CatPage /> : <Navigate to={"/auth"}/> }></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
