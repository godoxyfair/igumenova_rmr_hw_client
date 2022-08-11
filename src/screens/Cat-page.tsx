import React from 'react';
import Footer from "../ features/ ui-library/components/sticky-footer/Footer";
import NavbarLogin from "../ features/ ui-library/components/navbar/NavbarLogin";



const CatPage = () => {
    return (
        <div>
            <div>This is your cat</div>
            <img src={'http://51.250.65.73/api/v1/kitty'}
                 className="navbar__logo"
                 width="300px" height="300px"/>
        </div>
    );
};

export default CatPage;