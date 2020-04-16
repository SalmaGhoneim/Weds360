import React, { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";

import PhotoView from "../components/PhotoView";
import RelatedPhotos from "../components/RelatedPhotos";
import Services from "../components/Services";
import styled from "styled-components";

const SinglePhoto = props => {
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
    <div className={props.className}>
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

export default styled(SinglePhoto)`
  .singlePhotoContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .marginTop {
    margin-top: 20px;
  }
  .title {
    font-size: 35px;
    font-weight: 900;
    text-align: start;
  }
`;
