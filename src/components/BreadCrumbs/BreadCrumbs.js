import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import arrowRight from "../../assets/icons/arrowRight.svg";
import "./BreadCrumbs.css";

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
    });
    setFinalJSX(newJSX);
  }, [props]);

  return (
    <div className="allWidth">
      <div className="main">{finalJSX}</div>
    </div>
  );
};

export default BreadCrumbs;
