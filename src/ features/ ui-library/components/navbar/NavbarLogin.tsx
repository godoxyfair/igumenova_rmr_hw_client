import React, {useState} from 'react';
import logo from "../../../../assets/img/RMDIcon.jpeg";
import './navbar.css'
import {logout} from "../../../../ service/API/user";
import Button from "../../ui/button/Button";

const NavbarLogin = () => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <img src={logo} className="navbar__logo" width="40px" height="40px"/>
                    <div className="navbar__header">KittyTools</div>
                    <div className="navbar__header">UserName</div>
                    <Button disabled={false} onClick={() => (logout(email,phone, password))}>Logout</Button>
                </div>
            </div>
        </div>
    );
};

export default NavbarLogin;