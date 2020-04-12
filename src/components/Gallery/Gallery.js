import React, { useEffect, useState } from "react";
import image from "../../assets/salma_ghoneim_portrait.jpg";
import image2 from "../../assets/yoda.jpeg";

import ImageContainer from "./ImageContainer";
import { NavLink } from "react-router-dom";

const Gallery = () => {
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
    <div
      style={{
        width: "100%",
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {data.map((image, i) => (
        <NavLink
          key={i}
          to="/photo"
          style={{ display: "contents", textDecoration: "none" }}
        >
          <ImageContainer
            image={image}
            containerHeight="290px"
            photoHeight="230px"
            photoWidth="100%"
            alt="salma"
            label="Wedding details"
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Gallery;
