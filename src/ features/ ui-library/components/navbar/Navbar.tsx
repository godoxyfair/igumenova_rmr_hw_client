import React from 'react';
import './navbar.css'
import logo from '../../../../assets/img/RMDIcon.jpeg'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={logo} className="navbar__logo" width="40px" height="40px"/>
                <div className="navbar__header">KittyTools</div>
                <Link className="navbar__login" to="/auth">Login</Link>
                <Link className="navbar__registration" to="/registration">Registration</Link>
            </div>

        </div>
    );
};

export default Navbar;