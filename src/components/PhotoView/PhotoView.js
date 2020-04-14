import React from "react";
import { NavLink } from "react-router-dom";
import weddingDetails from "../../assets/weddingDetails.png";
import twitterCircle from "../../assets/icons/twitterCircle.png";
import facebookCircle from "../../assets/icons/facebookCircle.png";

import "./PhotoView.css";

const PhotoView = () => {
  return (
    <div className="photoViewContainer">
      <img className="bigPhoto" src={weddingDetails} />
      <div className="bigPhotoText">
        <p className="title">Wedding Details</p>
        <p>Bits and pieces of the wedding's bigger picture.</p>
        <NavLink to="/" className="link">
          Al Khardawaty
        </NavLink>
        <div className="socialMediaContainer">
          <img className="socialMediaCircle" src={facebookCircle} />
          <img className="socialMediaCircle" src={twitterCircle} />
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
