import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dropDown from "../assets/icons/dropDown.png";

import Services from "../components/Services";
import CategoriesBoxWithToggle from "../components/CategoriesBoxWithToggle";
import ImageWithOverlay from "../components/ImageWithOverlay";

const Categories = props => {
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
    <div className={props.className}>
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

export default styled(Categories)`
  .categoriesContainer {
    display: flex;
    flex-direction: column;
  }
  .categoriesBoxesContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .categoriesBox {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 49%;
    font-family: Lato;
    text-transform: uppercase;
  }
  .dropDownIcon {
    width: auto;
    color: rgb(51, 51, 51);
  }
  .categoriesSearchBar {
    text-align: center;
    height: 36px;
  }

  input.categoriesSearchBar::placeholder {
    color: black;
  }

  .categoriesButton {
    cursor: pointer;
    height: 42px;
    padding: 0px;
    background-color: white;
    outline: none;
  }

  .marginTop {
    margin-top: 50px;
  }
  @media only screen and (min-width: 320px) {
    /* For mobiles */
    .categoriesBox {
      font-size: 9px;
      letter-spacing: 1px;
      font-weight: normal;
    }
    .dropDownIcon {
      height: 10px;
      margin-left: 0px;
    }
    .categoriesBoxesContainer {
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 450px) {
    /* For tablet: */
    .categoriesBox {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 4.1px;
    }
    .dropDownIcon {
      height: 30px;
      margin-left: 10px;
    }
  }

  @media only screen and (min-width: 790px) {
    /* For desktop : */
    .categoriesBoxesContainer {
      margin-top: 60px;
    }
  }
`;
