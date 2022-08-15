import React, { useEffect, useState } from "react";
import { getCat } from "../ features/ service/API/user";
import "./catPage.css";

const CatPage = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    getCat().then((src) => setImage(src));
  }, []);

  return (
    <div className="cat__page">
      <div className="header_page">This is your cat &#9829;</div>
      <img
        src={image}
        alt="kitty"
        className="cat__image"
        width="300px"
        height="300px"
      />
    </div>
  );
};

export default CatPage;
