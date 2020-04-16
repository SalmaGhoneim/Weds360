import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import twitterCircle from "../assets/icons/twitterCircle.png";
import facebookCircle from "../assets/icons/facebookCircle.png";

const PhotoView = props => {
  return (
    <div className={props.className}>
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
    </div>
  );
};

export default styled(PhotoView)`
  .photoViewContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .bigPhoto {
    height: 100%;
    object-fit: cover;
  }
  .bigPhotoText {
    text-align: start;
    width: 37%;
    padding: 15px 20px;
  }
  .title {
    margin-bottom: 35px;
    font-weight: 600;
  }
  .socialMediaContainer {
    width: 100%;
    display: flex;
    margin: 20px 0px 10px 0px;
  }
  .socialMediaCircle {
    width: 35px;
    height: auto;
    margin: 0px 5px 0px 0px;
  }
  .link {
    color: #337ab7;
  }

  @media only screen and (min-width: 320px) {
    /* For mobiles */
    .bigPhoto {
      width: 100%;
    }
    .photoViewContainer {
      flex-wrap: wrap;
    }
    .bigPhotoText {
      width: 100%;
      padding: 0px;
    }
    .socialMediaContainer {
      justify-content: center;
    }
    .title {
      font-size: 25px;
    }
    .photoViewContainer {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 450px) {
    /* For tablet: */
    .bigPhoto {
      width: 63%;
    }
    .photoViewContainer {
      flex-wrap: nowrap;
    }
    .bigPhotoText {
      width: 37%;
      padding: 15px 20px;
    }
    .socialMediaContainer {
      justify-content: center;
    }
    .title {
      font-size: 25px;
    }
    .photoViewContainer {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 790px) {
    /* For desktop : */
    .socialMediaContainer {
      justify-content: flex-start;
    }
    .title {
      font-size: 35px;
    }
    .photoViewContainer {
      font-size: 25px;
    }
  }
`;
