import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Services = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3001/services";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={props.className}>
      {loading ? null : (
        <div className="servicesContainer">
          <p className="statement">{data.statement}</p>
          {data.services.map((service, i) => {
            return (
              <div className="serviceCard" key={service.id}>
                <div className="serviceImageContainer">
                  <img alt="" className="serviceImage" src={service.image} />
                </div>
                <div className="textContainer">
                  <p className="serviceTitle">{service.title}</p>
                  <p className="basicParagraph">{service.text}</p>
                  <NavLink className="basicLink" to={service.linkTo}>
                    {service.linkText}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default styled(Services)`
  .basicLink {
    text-decoration: none;
    font-size: 12px;
    color: rgb(2, 77, 76);
    line-height: 2;
  }
  .basicParagraph {
    font-size: 12px;
    color: rgb(51, 51, 51);
    line-height: 2;
    margin-bottom: 0px;
  }
  .servicesContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space_between;
  }
  .serviceCard {
    flex: 3;
    height: 250px;
    margin: 10px;
    min-width: 290px;
    max-width: 500px;
    display: flex;
  }
  .serviceImageContainer {
    display: block;
    min-width: 90px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .serviceImage {
    width: 80px;
    height: auto;
  }
  .textContainer {
    margin: auto;
    margin-left: 10px;
    text-align: start;
  }
  .statement {
    font-size: 24px;
    line-height: 1.25;
    text-transform: uppercase;
    margin-top: 60px;
    font-weight: 900;
    margin-bottom: 50px;
  }
  .serviceTitle {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 320px) {
    /* For Mobiles */
    .statement {
      font-size: 19px;
    }
  }
  @media only screen and (min-width: 450px) {
    /* For Tablets */
    .statement {
      font-size: 24px;
    }
  }
  @media only screen and (min-width: 790px) {
    /* For Desktop */
  }
`;
