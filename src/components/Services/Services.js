import React from "react";
import image1 from "../../assets/services/wedWebsite.png";
import image2 from "../../assets/services/budgeter.png";
import image3 from "../../assets/services/checklist.png";
import image4 from "../../assets/services/guestlist.png";
import image5 from "../../assets/services/vendors.png";
import image6 from "../../assets/services/registry.png";
import { NavLink } from "react-router-dom";
import "./Services.css";

let services = [
  {
    image: image1,
    text:
      "Where you will save all your wedding memories forever," +
      " where you will choose your own personalized template, manage every event detail and let your guests share" +
      " their pictures, videos and moments with you.",
    title: "WEDDING WEBSITE",
    linkText: "Create you website",
    linkTo: "/categories"
  }
];

let arr = [image1, image2, image3, image4, image5, image6];

const Services = () => {
  return (
    <div className="servicesContainer">
      <p className="statement">
        WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS
        MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
      </p>
      {Array(6)
        .fill()
        .map((x, i) => {
          return (
            <div className="serviceCard" key={i}>
              <div className="imageContainer">
                <img className="image" src={arr[i]} />
              </div>
              <div className="textContainer">
                <p className="serviceTitle">{services[0].title}</p>
                <p className="basicParagraph">{services[0].text}</p>
                <NavLink className="basicLink" to="/categories">
                  Create your website
                </NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Services;
