import React, { useEffect, useState } from "react";
import arrowRight from "../assets/icons/arrowRight.png";
import styled from "styled-components";

const CategoriesBoxWithToggle = props => {
  const [categoriesInfo, setCategoriesInfo] = useState({
    startIndex: 0,
    catPerRow: 10
  });
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3001/categories";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    updateCatPerRow();
    window.addEventListener("resize", updateCatPerRow, { passive: true });
    return () => window.removeEventListener("resize", updateCatPerRow);
  }, []);

  const arrowClick = direction => {
    let newStartIndex = categoriesInfo.startIndex + direction;

    if (
      (newStartIndex < 0) |
      (newStartIndex + categoriesInfo.catPerRow > data.length)
    ) {
      return;
    }
    setCategoriesInfo({ ...categoriesInfo, startIndex: newStartIndex });
  };

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
    <div className={props.className}>
      {loading ? null : (
        <div className={props.categoriesOpen ? "categories" : "hidden"}>
          <img
            alt=""
            onClick={() => arrowClick(-1)}
            className={
              categoriesInfo.startIndex > 0
                ? "arrow rotate180"
                : "arrow rotate180 disabled"
            }
            src={arrowRight}
          />
          {data
            .slice(
              categoriesInfo.startIndex,
              categoriesInfo.startIndex + categoriesInfo.catPerRow
            )
            .map((category, i) => (
              <div key={i} className="categoryContainer">
                <img src={category.image} className="categoryImage" alt="" />

                <p className="categoryTitle">{category.name}</p>
              </div>
            ))}
          <img
            alt=""
            onClick={() => arrowClick(1)}
            className={
              categoriesInfo.startIndex + categoriesInfo.catPerRow < data.length
                ? "arrow"
                : "arrow disabled"
            }
            src={arrowRight}
          />
        </div>
      )}
    </div>
  );
};

export default styled(CategoriesBoxWithToggle)`
  .categories {
    background-color: black;
    height: 140px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    transition: all ease 0.3s;
  }
  .hidden {
    opacity: 0;
    position: absolute;
  }
  .arrow {
    width: 10px;
    height: 10px;
    margin: 10px;
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }
  .rotate18 {
    transform: rotate(180);
  }
  .categoryContainer {
    display: block;
    flex: 2;
  }
  .categoryImage {
    width: 30px;
    height: 30px;
  }
  .categoryTitle {
    color: white;
    font-size: 12px;
  }
`;
