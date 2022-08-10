import React from 'react';
import './App.css';
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./authorization/Registration";
import Footer from "./sticky-footer/Footer";
import Login from "./authorization/Login";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
            <Navbar/>
            <div className="wrap">
                <Routes>
                    <Route path="/registration" element={<Registration/>}></Route>
                    <Route path="/auth" element={<Login/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
