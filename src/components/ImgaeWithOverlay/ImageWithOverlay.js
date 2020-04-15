import React, { useState } from "react";
import "./ImageWithOverlay.css";
import home from "../../assets/icons/home.png";

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
    <div className="weddingIdeasContainer">
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
  );
};

export default ImageWithOverlay;
