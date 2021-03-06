import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const RelatedPhotos = props => {
  return (
    <div className={props.className}>
      <div className="allPhotosContainer">
        {props.data.map((photo, i) => (
          <NavLink key={photo.id} to={photo.to} className="card">
            <div className="imageContainer">
              <img alt="" className="image" src={photo.image} />
            </div>
            <p className="imageTitle">{photo.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default styled(RelatedPhotos)`
  .allPhotosContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    margin: 20px 5px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    text-align: start;
  }
  .imageContainer {
    display: flex;
    justify-content: space-between;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: 320px) {
    /* For mobiles */
    .imageContainer {
      height: 120px;
    }
    .card {
      height: 180px;
      min-width: 46%;
      width: 46%;
      font-size: 13px;
    }
  }
  @media only screen and (min-width: 450px) {
    /* For tablet: */
    .imageContainer {
      height: 230px;
    }
    .card {
      height: 280px;
      min-width: 31%;
      width: 31%;
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 790px) {
    /* For desktop : */
    .imageContainer {
      height: 230px;
    }
    .card {
      height: 280px;
      min-width: 23%;
      width: 23%;
      font-size: 18px;
    }
  }
`;
