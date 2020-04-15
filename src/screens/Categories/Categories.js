import React, { useState, useEffect } from "react";
import dropDown from "../../assets/icons/dropDown.png";

import "./Categories.css";
import Services from "../../components/Services/Services";
import CategoriesBoxWithToggle from "../../components/CategoriesBoxWithToggle/CategoriesBoxWithToggle";
import ImageWithOverlay from "../../components/ImgaeWithOverlay/ImageWithOverlay";

const Categories = () => {
  const [searchWord, setSearchWord] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3001/categoriesPageImage";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <div>
      {loading ? null : (
        <div className="categoriesContainer">
          <div className="categoriesBoxesContainer">
            <button
              className="categoriesBox categoriesButton"
              onClick={toggleCategories}
            >
              Find Categories here
              <img alt="" className="dropDownIcon" src={dropDown} />
            </button>
            <input
              className="categoriesBox categoriesSearchBar"
              type="text"
              value={searchWord}
              onChange={e => setSearchWord(e.value)}
              placeholder="Search"
            />
          </div>
          <CategoriesBoxWithToggle categoriesOpen={categoriesOpen} />

          <ImageWithOverlay image={data.image} title={data.title} />
          <div className="marginTop">
            <Services />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
