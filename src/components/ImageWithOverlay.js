import React, { useState } from "react";
import home from "../assets/icons/home.png";
import styled from "styled-components";

const ImageWithOverlay = props => {
  const [overlayInfo, setOverlayInfo] = useState({
    isOpen: false,
    imageInfo: { width: 0, height: 0, left: 0, top: 0 }
  });
  let currImage = null;

  const hideOverlay = () => {
    setOverlayInfo({ ...overlayInfo, isOpen: false });
  };
  const showOverlay = () => {
    let imageInfo = currImage.getBoundingClientRect();
    setOverlayInfo({ isOpen: true, imageInfo: imageInfo });
  };
  let overlayposition = {
    width: overlayInfo.imageInfo.width * 0.7,
    height: overlayInfo.imageInfo.height * 0.7,
    left: overlayInfo.imageInfo.left + 0.15 * overlayInfo.imageInfo.width,
    top:
      overlayInfo.imageInfo.top +
      0.15 * overlayInfo.imageInfo.height +
      window.pageYOffset,
    opacity: overlayInfo.isOpen ? "1" : "0"
  };
  return (
    <div className={props.className}>
      <div className=" weddingIdeasContainer">
        <img
          alt=""
          className="weddingIdeas"
          src={props.image}
          ref={el => (currImage = el)}
          onMouseEnter={showOverlay}
          onMouseLeave={hideOverlay}
        />
        {!overlayInfo.isOpen ? null : (
          <div
            className="overlay"
            onMouseEnter={showOverlay}
            style={overlayposition}
          >
            <img src={home} alt="" className="homeIcon" />
            <p className="overlayText"> {props.title} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default styled(ImageWithOverlay)`
  .weddingIdeasContainer {
    display: flex;
    margin-top: 10px;
  }
  .weddingIdeas {
    height: 230px;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    background-color: white;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .homeIcon {
    height: 35px;
    width: 30;
  }
  .overlayText {
    font-size: 20px;
    font-weight: 600;
  }

  @media only screen and (min-width: 320px) {
    .weddingIdeasContainer {
      width: 100%;
    }
  }
  @media only screen and (min-width: 450px) {
    .weddingIdeasContainer {
      width: 49%;
    }
  }

  @media only screen and (min-width: 790px) {
    .weddingIdeasContainer {
      width: 32%;
    }
  }
`;
