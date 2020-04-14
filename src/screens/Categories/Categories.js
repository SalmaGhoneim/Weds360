import React, { useState, useEffect } from "react";
import dropDown from "../../assets/icons/dropDown.png";
import arrowRight from "../../assets/icons/arrowRight.png";

import "./Categories.css";
import category1 from "../../assets/categories/weddingDresses.png";
import category2 from "../../assets/categories/videographers.png";
import category3 from "../../assets/categories/rings.png";
import weddingIdeas from "../../assets/weddingIdeas.jpg";
import Services from "../../components/Services/Services";

const Categories = () => {
  const [searchWord, setSearchWord] = useState("");
  const [categoriesInfo, setCategoriesInfo] = useState({
    startIndex: 0,
    catPerRow: 10
  });
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [overlayInfo, setOverlayInfo] = useState({
    isOpen: false,
    imageInfo: {}
  });

  let currImage = null;

  const categories = [
    { image: category1, name: "Wedding Dresses", to: "/category" },
    { image: category2, name: "Videographers", to: "/category" },
    { image: category3, name: "Rings", to: "/category" },
    { image: category1, name: "Wedding Dresses", to: "/category" },
    { image: category2, name: "Videographers", to: "/category" },
    { image: category3, name: "Rings", to: "/category" },
    { image: category1, name: "Wedding Dresses", to: "/category" },
    { image: category2, name: "Videographers", to: "/category" },
    { image: category3, name: "Rings", to: "/category" },
    { image: category1, name: "Wedding Dresses", to: "/category" },
    { image: category2, name: "Videographers", to: "/category" },
    { image: category3, name: "Rings", to: "/category" }
  ];

  const arrowClick = direction => {
    let newStartIndex = categoriesInfo.startIndex + direction;

    if (
      (newStartIndex < 0) |
      (newStartIndex + categoriesInfo.catPerRow > categories.length)
    ) {
      return;
    }
    setCategoriesInfo({ ...categoriesInfo, startIndex: newStartIndex });
  };
  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  useEffect(() => {
    updateCatPerRow();
    window.addEventListener("resize", updateCatPerRow, { passive: true });
    return () => window.removeEventListener("resize", updateCatPerRow);
  }, []);
  const updateCatPerRow = () => {
    if (window.matchMedia("(min-width: 1440px)").matches) {
      setCategoriesInfo({ ...categoriesInfo, catPerRow: 10 });
      return 10;
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      setCategoriesInfo({ ...categoriesInfo, catPerRow: 8 });
      return 8;
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      setCategoriesInfo({ ...categoriesInfo, catPerRow: 6 });
      return 6;
    } else setCategoriesInfo({ ...categoriesInfo, catPerRow: 2 });
    return 2;
  };
  const hideOverlay = () => {
    setOverlayInfo({ isOpen: false });
  };
  const showOverlay = () => {
    console.log("dsunsxj");
    let imageInfo = currImage.getBoundingClientRect();
    console.log(imageInfo);
    setOverlayInfo({ isOpen: true, imageInfo: imageInfo });
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
      <div className={categoriesOpen ? "categories" : "hidden"}>
        <img
          onClick={() => arrowClick(-1)}
          className={
            categoriesInfo.startIndex > 0
              ? "arrow rotate180"
              : "arrow rotate180 disabled"
          }
          src={arrowRight}
        />
        {categories
          .slice(
            categoriesInfo.startIndex,
            categoriesInfo.startIndex + categoriesInfo.catPerRow
          )
          .map((category, i) => (
            <div key={i} className="categoryContainer">
              <img src={category.image} className="categoryImage" />
              <p className="categoryTitle">{category.name}</p>
            </div>
          ))}
        <img
          onClick={() => arrowClick(1)}
          className={
            categoriesInfo.startIndex + categoriesInfo.catPerRow <
            categories.length
              ? "arrow"
              : "arrow disabled"
          }
          src={arrowRight}
        />
      </div>
      <div className="weddingIdeasContainer">
        <img
          className="weddingIdeas"
          src={weddingIdeas}
          ref={el => (currImage = el)}
          onMouseEnter={showOverlay}
          onMouseLeave={hideOverlay}
        />
        {!overlayInfo.isOpen ? null : (
          <div
            className="overlay"
            onMouseEnter={showOverlay}
            style={{
              width: overlayInfo.imageInfo.width * 0.8,
              height: overlayInfo.imageInfo.height * 0.8,
              left:
                overlayInfo.imageInfo.left + 0.1 * overlayInfo.imageInfo.width,
              top:
                overlayInfo.imageInfo.top + 0.1 * overlayInfo.imageInfo.height
            }}
          ></div>
        )}
      </div>
      <div className="marginTop">
        <Services />
      </div>
    </div>
  );
};

export default Categories;
