import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import Gallery from "../../components/Gallery/Gallery";
import Services from "../../components/Services/Services";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
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
    <div>
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
                setPageInfo({ ...pageInfo, currPage: pageInfo.currPage + 1 })
              }
              decrementPage={() =>
                setPageInfo({ ...pageInfo, currPage: pageInfo.currPage - 1 })
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

export default Home;
