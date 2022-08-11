import React from 'react';
import './App.css';
import LoginPage from "../../../screens/Login-page";
import {BrowserRouter} from "react-router-dom";
// export type RootState = ReturnType<typeof store.getState>

function App() {


  return (
      <>
          <BrowserRouter>
              <LoginPage/>
          </BrowserRouter>

      </>
  );
}

export default App;
