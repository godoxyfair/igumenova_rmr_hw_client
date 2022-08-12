import React, {useEffect, useState} from 'react';
import {getCat, getUserData} from "../ service/API/user";
import './catPage.css'

const CatPage = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    getCat().then((src) => setImage(src));
  }, []);

    const [name, setName] = useState("");


    useEffect(() => {
        getUserData().then((name) => setName(name));
    }, []);


  return (
    <div className="cat__page">
      <div className="header_page">This is your cat &#9829;</div>
      <img
        src={image}
        alt="kitty-image"
        className="cat__image"
        width="300px"
        height="300px"
      />
    </div>
  );
};

export default CatPage;