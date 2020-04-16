import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Header.css";
import logo from "../../assets/weds360Logo.png";
import burgerIcon from "../../assets/icons/burgerIcon.png";
import LanguageLogin from "../LanguageLogin/LanguageLogin";

const NavButton = styled.label`
  font-family: Lato;
  font-weight: 550;
  height: 100%;
  line-height: 45px;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
`;

const NavBarDropDown = styled.div`
  background: white;
  flex-direction: column;
  width: 100px;
  display: flex;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
`;

const NavBarSelectOption = styled.p`
  font-size: 14px;
  border-bottom: 2px solid black;
  font-family: Lato;
  font-weight: 600;
  padding: 15px 10px 15px 10px;
  margin: 0px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
`;

const Header = () => {
  let parent = null;
  const [headerVisible, setHeaderVisible] = useState(true);

  const [dropDownStatus, setDropDownStatus] = useState({
    isOpen: false,
    parent: parent,
    options: [],
    left: "0px",
    top: "0px",
    offset: 0
  });

  const isHeaderVisible = () => {
    if (headerVisible !== Boolean(window.pageYOffset < 120)) {
      setHeaderVisible(window.pageYOffset < 120);
    }
    return window.pageYOffset < 120;
  };
  // Track header visibility
  useEffect(() => {
    window.addEventListener("scroll", isHeaderVisible, { passive: true });
    return () => window.removeEventListener("scroll", isHeaderVisible);
  });

  const ShowDropDown = () => {
    let parentInfo = parent.getBoundingClientRect();
    let centerX = parentInfo.left + 0.5 * parentInfo.width;
    let offset = window.pageYOffset < 120 ? window.pageYOffset : 0;
    let options = [
      { id: "1", name: "Designers", to: "https://medium.com/@salma_ghoneim" },
      {
        id: "2",
        name: "Bridal Boutique",
        to: "https://www.linkedin.com/in/salma-ghoneim/"
      },
      {
        id: "3",
        name: "Wedding Dresses",
        to: "https://medium.com/@salma_ghoneim"
      }
    ];
    setDropDownStatus({
      ...dropDownStatus,
      isOpen: true,
      options: options,
      left: centerX - 50,
      top: parentInfo.bottom + 1 + offset
    });
  };
  const HideDropDown = () => {
    setDropDownStatus({ ...dropDownStatus, isOpen: false });
  };

  return (
    <div className="allScreenHeader">
      {headerVisible ? null : <div className="scrollAnchor"></div>}
      <div className={headerVisible ? "mainAppHeader" : "mainAppHeaderFixed"}>
        <div className={headerVisible ? "navBar" : "navBarFixed"}>
          <div
            className={headerVisible ? "navBarSegment" : "navBarSegmentFixed"}
            style={{ order: headerVisible ? "1" : "2" }}
          >
            <NavButton className="adjustWidth">360 Planner</NavButton>
            <NavButton
              className="adjustWidth"
              onMouseEnter={ShowDropDown}
              onMouseLeave={HideDropDown}
              ref={el => (parent = el)}
            >
              Her
            </NavButton>

            <NavButton className="adjustWidth">Him</NavButton>
            <NavButton className="adjustWidth">The Wedding</NavButton>
          </div>
          <img
            className={headerVisible ? "navBarLogo" : "navBarLogoFixed"}
            src={logo}
            alt="Weds360 Logo"
          />

          <div
            className={headerVisible ? "languageLogin" : "languageLoginFixed"}
          >
            <LanguageLogin />
          </div>

          <div
            className={headerVisible ? "navBarSegment" : "navBarSegmentFixed"}
            style={{ order: headerVisible ? "3" : "3" }}
          >
            <NavButton className="adjustWidth">Vendors</NavButton>
            <NavButton className="adjustWidth">Gallery</NavButton>
            <NavButton className="adjustWidth">Ideas & more</NavButton>
          </div>
          <div className="burgerIconContainer">
            <img alt="" className="burgerIcon" src={burgerIcon}></img>
          </div>
        </div>
        <NavBarDropDown
          onMouseEnter={ShowDropDown}
          onMouseLeave={HideDropDown}
          style={{
            left: dropDownStatus.left,
            top: dropDownStatus.top,
            display: dropDownStatus.isOpen ? "flex" : "none"
          }}
        >
          {dropDownStatus.options.map((option, i) => {
            let styles = {};
            if (i === dropDownStatus.options.length - 1) {
              styles.borderBottom = "none";
            }
            return (
              <NavBarSelectOption style={styles} key={option.id}>
                <Link
                  href={option.to}
                  title={option.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.name}
                </Link>
              </NavBarSelectOption>
            );
          })}
        </NavBarDropDown>
      </div>
    </div>
  );
};

export default Header;
