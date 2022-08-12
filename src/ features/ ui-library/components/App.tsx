import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./sticky-footer/Footer";
import Navbar from "./navbar/Navbar";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import CatPage from "../../../screens/Cat-page";
import {useSelector} from "react-redux";
// export type RootState = ReturnType<typeof store.getState>


function App() {
  const isAuth = useSelector((state: any) => state.user.isAuth);

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
              element={!isAuth ? <Login /> : <CatPage />}
            ></Route>
            <Route path="/cat" element={isAuth && <CatPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
