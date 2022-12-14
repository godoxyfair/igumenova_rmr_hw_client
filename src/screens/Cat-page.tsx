import React, { useEffect, useState } from "react";
import { getCat } from "../ features/ service/API/userAPI";
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
        width="500px"
        height="500px"
      />
    </div>
  );
};

export default CatPage;
