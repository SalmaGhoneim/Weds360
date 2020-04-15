import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services = () => {
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
    <div>
      {loading ? null : (
        <div className="servicesContainer">
          <p className="statement">{data.statement}</p>
          {data.services.map((service, i) => {
            return (
              <div className="serviceCard" key={i}>
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

export default Services;
