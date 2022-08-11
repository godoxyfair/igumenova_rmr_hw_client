import React, {useEffect, useState} from 'react';
import Footer from "../ features/ ui-library/components/sticky-footer/Footer";
import NavbarLogin from "../ features/ ui-library/components/navbar/NavbarLogin";
import {getCat} from "../ service/API/user";



const CatPage = () => {


    const [image, setImage] = useState('');

    useEffect(()=> {
        getCat().then(src =>  setImage(src))
    },[])




    return (
        <div>
            <div>This is your cat</div>
            <img src={image}
                 className="navbar__logo"
                 width="300px" height="300px"/>
        </div>
    );
};

export default CatPage;