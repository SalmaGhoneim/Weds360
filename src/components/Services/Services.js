import React from "react";
import image1 from "../../assets/services/wedWebsite.png";
import image2 from "../../assets/services/budgeter.png";
import image3 from "../../assets/services/checklist.png";
import image4 from "../../assets/services/guestlist.png";
import image5 from "../../assets/services/vendors.png";
import image6 from "../../assets/services/registry.png";
import { NavLink } from "react-router-dom";

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
  let styles = {
    flex: "3",
    height: "250px",
    margin: "10px",
    minWidth: "290px",
    maxWidth: "500px",
    display: "flex"
  };
  let text = {};
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space_between"
      }}
    >
      {Array(6)
        .fill()
        .map((x, i) => {
          return (
            <div style={styles} key={i}>
              <div
                style={{
                  display: "block",
                  minWidth: "90px",
                  marginTop: "auto",
                  marginBottom: "auto"
                }}
              >
                <img style={{ width: "80px", height: "auto" }} src={arr[i]} />
              </div>
              <div
                style={{
                  margin: "auto",
                  marginLeft: "10px",
                  textAlign: "start"
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "rgb(51,51,51)",
                    fontWeight: "600"
                  }}
                >
                  {services[0].title}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgb(51,51,51)",
                    lineHeight: "2"
                  }}
                >
                  {services[0].text}
                </p>
                <NavLink
                  to="/categories"
                  style={{
                    fontSize: "12px",
                    color: "#008174",
                    lineHeight: "2",
                    textDecoration: "none"
                  }}
                >
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
