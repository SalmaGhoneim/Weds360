import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BreadCrumbs from "../components/BreadCrumbs";
import SideBar from "../components/SideBar";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Pagination from "../components/Pagination";

const Home = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({ currPage: 1, pageCount: 0 });

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3001/home";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setData(data);
        setPageInfo({ currPage: 1, pageCount: data.gallery.pageCount });
        setLoading(false);
      });
  }, []);

  return (
    <div className={props.className}>
      {loading ? null : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginTop: "20px"
          }}
        >
          <BreadCrumbs tree={data.tree} />

          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "40px" }}>
            <div className="sideBar">
              <SideBar />
            </div>
            <div className="gallery">
              <Gallery
                data={
                  pageInfo.currPage % 2 === 1
                    ? data.gallery["odd"]
                    : data.gallery["even"]
                }
              />
            </div>
          </div>
          <div style={{ margin: "40px 0px 30px 0px" }}>
            <Pagination
              pageCount={parseInt(pageInfo.pageCount)}
              currPage={pageInfo.currPage}
              incrementPage={() =>
                setPageInfo({
                  ...pageInfo,
                  currPage: Math.min(pageInfo.currPage + 1, pageInfo.pageCount)
                })
              }
              decrementPage={() =>
                setPageInfo({
                  ...pageInfo,
                  currPage: Math.max(pageInfo.currPage - 1, 1)
                })
              }
              goToPage={page =>
                setPageInfo({ ...pageInfo, currPage: parseInt(page) })
              }
            />
          </div>

          <Services />
        </div>
      )}
    </div>
  );
};

export default styled(Home)`
  .pagination {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 40px 0px 10px 0px;
    flex-wrap: wrap;
  }
  .pageNumberBox {
    width: 25px;
    height: 25px;
    background-color: transparent;
    color: rgb(2, 77, 76);
    border: 1px solid rgb(211, 211, 211);
    border-radius: 2px;
    line-height: 25px;
    padding: 2px 5px 2px 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .prevNextBox {
    width: auto;
    padding: 2px 8px 2px 8px;
  }

  .statement {
    font-size: 24px;
    line-height: 1.25;
    text-transform: uppercase;
    margin-top: 60px;
    font-weight: 900;
  }

  @media only screen and (min-width: 320px) {
    /* For tablets: */
    .sideBar {
      width: 100%;
    }
    .gallery {
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */

    .sideBar {
      flex: 3;
    }
    .gallery {
      flex: 9;
    }
  }
`;
