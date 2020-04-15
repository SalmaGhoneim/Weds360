import React from "react";
import ImageContainer from "./ImageContainer";
import { NavLink } from "react-router-dom";

const Gallery = props => {
  return (
    <div
      style={{
        width: "100%",
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {props.data.map((image, i) => (
        <NavLink
          key={image.id}
          to="/photo"
          style={{ display: "contents", textDecoration: "none" }}
        >
          <ImageContainer
            image={image.image}
            containerHeight="290px"
            photoHeight="230px"
            photoWidth="100%"
            alt={image.label}
            label={image.label}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Gallery;
