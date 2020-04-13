import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.png";
import copyright from "../../assets/icons/copyright.svg";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerBody">
        <div>
          <h3 className="largeText">Weds360</h3>
          <div className="imageAlign">
            <a target="_blank" href="https://www.facebook.com/Weds360/">
              <img className="socialMedia" src={facebook} />
            </a>
            <a target="_blank" href="https://www.instagram.com/weds360/">
              <img className="socialMedia" src={instagram} />
            </a>
          </div>
        </div>
        <div className="bottom oneLine lightWeight">
          <img className="copyright" src={copyright} />
          <p>copyright </p>
          <a target="_blank" href="https://plus360.xyz/">
            <p className="plus360"> Plus360 </p>
          </a>
          <p>all rights reserved</p>
        </div>
        <div className="bottom  textAlign">
          <p> Terms & Conditions</p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
