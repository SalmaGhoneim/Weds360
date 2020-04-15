import React, { useEffect, useState } from "react";
import "./CategoriesBoxWithToggle.css";
import arrowRight from "../../assets/icons/arrowRight.png";
import category1 from "../../assets/categories/weddingDresses.png";
import category2 from "../../assets/categories/videographers.png";
import category3 from "../../assets/categories/rings.png";

const CategoriesBoxWithToggle = props => {
  const [categoriesInfo, setCategoriesInfo] = useState({
    startIndex: 0,
    catPerRow: 10
  });

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
  return (
    <div className={props.categoriesOpen ? "categories" : "hidden"}>
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
  );
};

export default CategoriesBoxWithToggle;
