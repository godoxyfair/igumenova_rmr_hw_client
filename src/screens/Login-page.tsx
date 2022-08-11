import React from 'react';
import Navbar from "../ features/ ui-library/components/navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import Registration from "../ features/ ui-library/components/authorization/Registration";
import Login from "../ features/ ui-library/components/authorization/Login";
import Footer from "../ features/ ui-library/components/sticky-footer/Footer";
import {useSelector} from "react-redux";

const LoginPage = () => {

    const isAuth = useSelector((state: any) => state.user.isAuth)

    return (
            <div className="app">
                <Navbar/>
                <div className="wrap">
                    {!isAuth &&
                        <Routes>
                            <Route path="/registration" element={<Registration/>}></Route>
                            <Route path="/auth" element={<Login/>}></Route>
                        </Routes>
                    }

                </div>
                <Footer/>
            </div>
    );
};

export default LoginPage;