import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Header.css";
import logo from "../../assets/weds360Logo.png";

const NavButton = styled.label`
  font-size: 14px;
  font-family: Lato;
  font-weight: 550;
  height: 100%;
  line-height: 45px;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
`;

const NavBarDropDown = styled.div`
  flex-direction: column;
  width: 100px;
  display: flex;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 999;
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
  let options = [
    { id: "1", name: "Designers", to: "" },
    { id: "2", name: "Bridal Boutique", to: "" },
    { id: "3", name: "Wedding Dresses", to: "" }
  ];
  const [dropDownStatus, setDropDownStatus] = useState({
    isOpen: false,
    parent: parent,
    options: options,
    left: "0px"
  });

  const ShowDropDown = () => {
    let parentInfo = parent.getBoundingClientRect();
    let centerX = parentInfo.left + 0.5 * parentInfo.width;
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
      left: centerX - 50
    });
  };
  const HideDropDown = () => {
    setDropDownStatus({ ...dropDownStatus, isOpen: false });
  };
  return (
    <div style={{ height: "150px" }}>
      <div className="navBar">
        <div className="navBarSegment">
          <NavButton>360 Planner</NavButton>
          <NavButton
            onMouseEnter={ShowDropDown}
            onMouseLeave={HideDropDown}
            ref={el => (parent = el)}
          >
            Her
          </NavButton>

          <NavButton>Him</NavButton>
          <NavButton>The Wedding</NavButton>
        </div>
        <img className="navBarLogo" src={logo} alt="Weds 360 Logo"></img>
        <div className="navBarSegment">
          <NavButton>Vendors</NavButton>
          <NavButton>Gallery</NavButton>
          <NavButton>Ideas & more</NavButton>
        </div>
      </div>
      <NavBarDropDown
        onMouseEnter={ShowDropDown}
        onMouseLeave={HideDropDown}
        style={{
          left: dropDownStatus.left,
          position: "absolute",
          display: dropDownStatus.isOpen ? "flex" : "none"
        }}
      >
        {dropDownStatus.options.map((option, i) => {
          let styles = {};
          if (i == dropDownStatus.options.length - 1) {
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
  );
};

export default Header;
