import React from "react";
import styled from "styled-components";

const ImageContainer = props => {
  return (
    <div className={props.className}>
      <div className="imageShell">
        <img src={props.image} alt={props.alt} className="individualImage" />
      </div>
      {props.label ? <p className="label">{props.label}</p> : null}
    </div>
  );
};
export default styled(ImageContainer)`
  .individualImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .label {
    text-decoration: none;
    color: black;
    text-align: start;
    font-weight: 550;
    font-size: 18px;
    margin-top: 10px;
  }
  @media only screen and (min-width: 320px) {
    /* For tablets: */
    width: 48%;
    height: 180px;
    margin-bottom: 5px;

    .imageShell {
      height: 120px;
    }
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    width: 30%;
    height: 290px;
    margin-bottom: 5px;
    .imageShell {
      height: 230px;
    }
  }
`;
