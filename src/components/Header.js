import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/weds360Logo.png";
import burgerIcon from "../assets/icons/burgerIcon.png";
import LanguageLogin from "./LanguageLogin";

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

const Header = props => {
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
    <div className={props.className}>
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
    </div>
  );
};

export default styled(Header)`
  .allScreenHeader {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .mainAppHeader {
    display: flex;
    max-width: 1100px;
    width: 92%;
    max-width: 100%;
    justify-content: center;
    flex-direction: column;
    height: 150px;
  }

  .navBar {
    margin: 15px 0px 0px 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    align-self: center;
    flex-direction: row;
    max-width: 1100px;
    height: 100px;
    position: relative;
  }

  .navBarSegment {
    padding: 0px 15px 0px 15px;
    display: inline-flex;
    height: 45px;
    width: 43%;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    position: relative;
  }

  /* Fixed Header */
  .mainAppHeaderFixed {
    transition: all ease 1s;
    background-color: white;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    height: 60px;
    max-height: 60px;
  }
  .navBarFixed {
    width: 100%;
    margin: 0px 0px 0px 50px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 60px;
    position: relative;
  }
  .navBarSegmentFixed {
    padding: 0px 15px 0px 15px;
    display: inline-flex;
    height: 45px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
  .navBarLogoFixed {
    height: 50px;
    width: auto;
    margin-right: 15px;
    order: 1;
  }
  .languageLoginFixed {
    margin-left: 30px;
    order: 4;
  }

  @media only screen and (min-width: 320px) {
    /* For mobiles */

    .mainAppHeaderFixed {
      display: none;
    }
    .navBar {
      height: 60px;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
    .mainAppHeader {
      height: 60px;
      margin-bottom: 20px;
    }
    .burgerIconContainer {
      display: inline;
      margin-right: 20px;
      order: 2;
    }
    .burgerIcon {
      width: 20px;
      height: 20px;
    }
    .navBarLogo {
      height: 40px;
      width: auto;
      order: 1;
      margin: 0px;
    }
    .navBarSegment {
      display: none;
    }
    .scrollAnchor {
      display: none;
    }
    .languageLogin {
      display: block;
      /* width: 60px; */
    }
  }
  @media only screen and (min-width: 450px) {
    /* For tablet: */
    .mainAppHeaderFixed {
      display: none;
    }
    .mainAppHeader {
      height: 100px;
    }
    .adjustWidth {
      font-size: 9px;
      min-width: 60px;
    }
    .navBar {
      display: inline-flex;
      margin: 15px 0px 0px 0px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      align-self: center;
      flex-direction: row;
      max-width: 1100px;
      height: 100px;
      position: relative;
    }
    .navBarSegment {
      display: inline-flex;
    }
    .burgerIconContainer {
      display: none;
    }
    .navBarLogo {
      width: 10%;
      height: auto;
      margin-right: 15px;
      margin-left: 15px;
      order: 2;
    }
    .languageLogin {
      position: relative;
      top: -50px;
      width: 0px;
      left: 15px;
    }
  }

  @media only screen and (min-width: 790px) {
    /* For desktop : */
    .mainAppHeaderFixed {
      display: block;
    }
    .adjustWidth {
      font-size: 10px;
      min-width: 80px;
    }
    .navBar {
      display: inline-flex;
    }
    .navBarSegment {
      display: inline-flex;
    }
    .mainAppHeader {
      height: 120px;
    }
    .scrollAnchor {
      display: block;
      height: 120px;
    }
  }
  @media only screen and (min-width: 1025px) {
    .adjustWidth {
      font-size: 14px;
      min-width: 100px;
    }
  }
`;
