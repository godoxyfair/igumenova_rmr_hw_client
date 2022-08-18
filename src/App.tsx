import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./ features/sticky-footer/Footer";
import Navbar from "./ features/navbar/Navbar";
import RoutePath from "./infrastructure/routePath";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="wrap">
          <RoutePath />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
