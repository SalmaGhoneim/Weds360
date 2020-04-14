import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

import "./SinglePhoto.css";
import PhotoView from "../../components/PhotoView/PhotoView";
import RelatedPhotos from "../../components/RelatedPhotos/RelatedPhotos";
import Services from "../../components/Services/Services";

const SinglePhoto = () => {
  let tree = [
    { id: "1", name: "Gallery", to: "/categories" },
    { id: "2", name: "Wedding Ideas", to: "/" },
    { id: "3", name: "Wedding Details" }
  ];
  return (
    <div className="singlePhotoContainer marginTop">
      <BreadCrumbs tree={tree} />
      <div className="marginTop">
        <PhotoView />
      </div>
      <div className="marginTop">
        <p className="title">Related Photos</p>
        <RelatedPhotos />
      </div>
      <div className="marginTop">
        <Services />
      </div>
    </div>
  );
};

export default SinglePhoto;
