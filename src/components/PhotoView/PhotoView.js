import React from "react";
import { NavLink } from "react-router-dom";
import twitterCircle from "../../assets/icons/twitterCircle.png";
import facebookCircle from "../../assets/icons/facebookCircle.png";

import "./PhotoView.css";

const PhotoView = props => {
  return (
    <div className="photoViewContainer">
      <img alt="" className="bigPhoto" src={props.data.image} />
      <div className="bigPhotoText">
        <p className="title">{props.data.title}</p>
        <p>{props.data.text}</p>
        <NavLink to={props.data.linkTo} className="link">
          {props.data.link}
        </NavLink>
        <div className="socialMediaContainer">
          <img alt="" className="socialMediaCircle" src={facebookCircle} />
          <img alt="" className="socialMediaCircle" src={twitterCircle} />
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
