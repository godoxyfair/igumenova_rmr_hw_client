import React from 'react';
import './App.css';
import LoginPage from "../../../screens/Login-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./sticky-footer/Footer";
import Navbar from "./navbar/Navbar";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import CatPage from "../../../screens/Cat-page";
import {useSelector} from "react-redux";
// export type RootState = ReturnType<typeof store.getState>
import { Navigate } from "react-router-dom"

function App() {
    const isAuth = useSelector((state: any) => state.user.isAuth)

  return (
      <div className="app">
          <BrowserRouter>
              <Navbar/>
              <div className="wrap">
                      <Routes>
                          <Route path="/registration" element={<Registration/>}></Route>
                          <Route path="/auth" element={<Login/>}></Route>
                          <Route path="/cat" element={!isAuth ? <Login/> : <CatPage/>}></Route>
                      </Routes>
              </div>
              <Footer/>
          </BrowserRouter>

      </div>
  );
}

export default App;
