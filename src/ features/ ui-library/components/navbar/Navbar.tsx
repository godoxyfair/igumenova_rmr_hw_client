import React, {useEffect, useState} from 'react';
import './navbar.css'
import logo from '../../../../assets/img/RMDIcon.jpeg'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import  {logout} from "../../../../reducers/userReducer";
import { getUserData, logoutFunc} from "../../../../ service/API/user";
import Button from "../../ui/button/Button";

const Navbar = () => {
  const [name, setName] = useState("");
  const isAuth = useSelector((state: any) => state.user.isAuth);
  //TODO fetch получает данные раньше логина и не ловит имя
  //TODO слишком дофига раз срабатывает
  useEffect(() => {
    isAuth && getUserData().then((name) => setName(name));
  }, );


  const dispatch = useDispatch();


  // isAuth && getUserData().then((name) => setName(name))
  return (
    <div className="navbar">
      <div className="container">
        <img
          src={logo}
          alt="rmr-kitty-logo"
          className="navbar__logo"
          width="40px"
          height="40px"
        />
        <div className="navbar__header">KittyTools</div>
        {!isAuth && (
          <Link className="navbar__login" to="/auth">
            Login
          </Link>
        )}
        {!isAuth && (
          <Link className="navbar__registration" to="/registration">
            Registration
          </Link>
        )}
        {isAuth && <div className="navbar__username">Welcome back {name}!</div>}
        {isAuth && (
          <Button
              type="button"
            onClick={() => {
              dispatch<any>(logout());
              logoutFunc();
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;