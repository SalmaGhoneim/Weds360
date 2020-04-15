import React from "react";
import "./RelatedPhotos.css";
import { NavLink } from "react-router-dom";

const RelatedPhotos = props => {
  return (
    <div className="allPhotosContainer">
      {props.data.map((photo, i) => (
        <NavLink key={i} to={photo.to} className="card">
          <div className="imageContainer">
            <img alt="" className="image" src={photo.image} />
          </div>
          <p className="imageTitle">{photo.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default RelatedPhotos;
