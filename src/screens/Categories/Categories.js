import React, { useState, useEffect } from "react";
import dropDown from "../../assets/icons/dropDown.png";

import "./Categories.css";
import Services from "../../components/Services/Services";
import CategoriesBoxWithToggle from "../../components/CategoriesBoxWithToggle/CategoriesBoxWithToggle";
import ImageWithOverlay from "../../components/ImgaeWithOverlay/ImageWithOverlay";

const Categories = () => {
  const [searchWord, setSearchWord] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <div className="categoriesContainer">
      <div className="categoriesBoxesContainer">
        <button
          className="categoriesBox categoriesButton"
          onClick={toggleCategories}
        >
          Find Categories here
          <img className="dropDownIcon" src={dropDown} />
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

      <ImageWithOverlay />
      <div className="marginTop">
        <Services />
      </div>
    </div>
  );
};

export default Categories;
