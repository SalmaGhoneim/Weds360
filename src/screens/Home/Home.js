import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import Gallery from "../../components/Gallery/Gallery";
import Services from "../../components/Services/Services";
import styled from "styled-components";
import Pagination from "../../components/Pagination/Pagination";

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
      <div style={{ margin: "40px 0px 10px 0px" }}>
        <Pagination pageCount={13} currPage={2} />
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
