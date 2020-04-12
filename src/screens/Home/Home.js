import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import Gallery from "../../components/Gallery/Gallery";
import Services from "../../components/Services/Services";
import styled from "styled-components";

const pageNumberBox = styled.div`
  width: 25px;
  height: 25px;
  background-color: transparent;
  color: #008174;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 2px;
  line-height: 25px;
  padding: 2px 5px 2px 5px;
  cursor: pointer;
  font-size: 14px;
`;

const Home = () => {
  let tree = [
    { id: "1", name: "Gallery", to: "/categories" },
    { id: "2", name: "Wedding Ideas" }
  ];
  let pageCount = 10;
  let currPage = 1;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column"
      }}
    >
      <BreadCrumbs tree={tree} />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "40px" }}>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="gallery">
          <Gallery />
        </div>
      </div>

      <div className="pagination">
        <div className=" pageNumberBox prevNextBox">Previous</div>
        {Array(pageCount)
          .fill()
          .map((page, i) => (
            <div
              key={i}
              className="pageNumberBox"
              style={{
                background: currPage == i + 1 ? "#008174" : "transparent",
                color: currPage == i + 1 ? "white" : "#008174",
                cursor: currPage == i + 1 ? "default" : "pointer"
              }}
            >
              {i + 1}
            </div>
          ))}
        <div
          className="pageNumberBox"
          style={{
            background: currPage == pageCount - 1 ? "#008174" : "transparent",
            color: currPage == pageCount - 1 ? "white" : "#008174",
            cursor: currPage == pageCount - 1 ? "default" : "pointer"
          }}
        >
          {pageCount - 1}
        </div>
        <div
          className="pageNumberBox"
          style={{
            background: currPage == pageCount - 1 ? "#008174" : "transparent",
            color: currPage == pageCount - 1 ? "white" : "#008174",
            cursor: currPage == pageCount - 1 ? "default" : "pointer"
          }}
        >
          {pageCount}
        </div>
        <div className="pageNumberBox prevNextBox">Next</div>
      </div>
      <p className="statement">
        WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS
        MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
      </p>
      <Services />
    </div>
  );
};

export default Home;
