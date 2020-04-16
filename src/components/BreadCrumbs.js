import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import arrowRight from "../assets/icons/arrowRight.svg";
import styled from "styled-components";
const BreadCrumbs = props => {
  const [finalJSX, setFinalJSX] = useState([]);

  useEffect(() => {
    let newJSX = [];
    props.tree.map((component, i) => {
      if (component.to) {
        newJSX.push(
          <NavLink className="treeNavLink" key={component.id} to={component.to}>
            {component.name}
          </NavLink>
        );
      } else {
        newJSX.push(
          <p className="treeLabel" key={component.id}>
            {component.name}
          </p>
        );
      }
      if (i < props.tree.length - 1) {
        newJSX.push(
          <img
            className="treeArrow"
            key={component.id + "arrow"}
            src={arrowRight}
            alt=""
          />
        );
      }
      return null;
    });
    setFinalJSX(newJSX);
  }, [props]);

  return (
    <div className={props.className}>
      <div className="main font">{finalJSX}</div>
    </div>
  );
};

export default styled(BreadCrumbs)`
  .main {
    max-width: 1100px;
    min-width: 300px;
    width: 92%;
    text-align: start;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    align-items: center;
  }

  .treeNavLink {
    color: #008174;
    text-transform: uppercase;
    text-decoration: none;
  }

  .treeLabel {
    margin: 0px;
    text-transform: uppercase;
  }

  .treeArrow {
    height: 100%;
    width: auto;
  }
  .font {
    font-weight: 600;
  }
  @media only screen and (min-width: 320px) {
    /* For mobiles */
    .font {
      font-size: 15px;
    }
  }
  @media only screen and (min-width: 450px) {
    /* For tablet: */
    .font {
      font-size: 18px;
    }
  }
`;
