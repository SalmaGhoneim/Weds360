import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3001/singlePhoto";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? null : (
        <div className="singlePhotoContainer marginTop">
          <BreadCrumbs tree={tree} />
          <div className="marginTop">
            <PhotoView data={data.mainPhoto} />
          </div>
          <div className="marginTop">
            <p className="title">Related Photos</p>
            <RelatedPhotos data={data.relatedPhotos} />
          </div>
          <div className="marginTop">
            <Services />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePhoto;
