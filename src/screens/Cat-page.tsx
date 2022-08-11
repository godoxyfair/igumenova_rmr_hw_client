import React from 'react';
import Footer from "../ features/ ui-library/components/sticky-footer/Footer";
import NavbarLogin from "../ features/ ui-library/components/navbar/NavbarLogin";



const CatPage = () => {
    return (
        <div>
            <NavbarLogin/>
            <div>This is your cat</div>
            <img src={'http://51.250.65.73/api/v1/kitty'} className="navbar__logo" width="100px" height="100px"/>
            <Footer/>
        </div>
    );
};

export default CatPage;