import React from "react";
import "./ImageContainer.css";

const ImageContainer = props => {
  return (
    <div className="container">
      <div className="imageShell">
        <img src={props.image} alt={props.alt} className="image" />
      </div>
      {props.label ? <p className="label">{props.label}</p> : null}
    </div>
  );
};

export default ImageContainer;
