import React, { useState } from "react";
import "./RelatedPhotos.css";
import image from "../../assets/salma_ghoneim_portrait.jpg";
import image2 from "../../assets/yoda.jpeg";
import { NavLink } from "react-router-dom";

const RelatedPhotos = () => {
  const [data, setData] = useState([
    image,
    image2,
    image,
    image2,
    image,
    image2,
    image,
    image2,
    image
  ]);
  return (
    <div className="allPhotosContainer">
      {data.map((photo, i) => (
        <NavLink key={i} to="/" className="card">
          <div className="imageContainer">
            <img className="image" src={photo} />
          </div>
          <p className="imageTitle">Seashells-themed guestbook</p>
        </NavLink>
      ))}
    </div>
  );
};

export default RelatedPhotos;
