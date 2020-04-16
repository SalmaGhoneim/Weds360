import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.png";
import copyright from "../assets/icons/copyright.svg";
import styled from "styled-components";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="footerMain">
        <div className="footerBody">
          <div>
            <h3 className="largeText">Weds360</h3>
            <div className="imageAlign">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Weds360/"
              >
                <img alt="" className="socialMedia" src={facebook} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/weds360/"
              >
                <img alt="" className="socialMedia" src={instagram} />
              </a>
            </div>
          </div>
          <div className="noMargin oneLine lightWeight">
            <img alt="" className="copyright" src={copyright} />
            <p className="noMargin">copyright </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://plus360.xyz/"
            >
              <p className="plus360 noMargin"> Plus360 </p>
            </a>
            <p className="noMargin">all rights reserved</p>
          </div>
          <div className=" textAlign ">
            <p> Terms & Conditions</p>
            <p className="noMarginBottom"> Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Footer)`
  .footerMain {
    background-color: black;
    color: white;
    padding: 0px 10px 15px 10px;
  }
  .footerBody {
    height: 100%;
    display: flex;
  }
  .socialMedia {
    width: auto;
    height: 10px;
    margin: 0px 5px 0px 0px;
  }
  .copyright {
    width: auto;
    height: 8px;
  }
  .largeText {
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0px 10px 0px;
  }
  .lightWeight {
    font-weight: 100;
  }
  .oneLine {
    display: flex;
    justify-content: center;
  }
  .plus360 {
    padding: 0px 2px 0px 2px;
    color: rgb(51, 122, 183);
    font-weight: 500;
  }
  .noMargin {
    margin: 0px;
  }
  .noMarginBottom {
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 320px) {
    /* For Mobiles: */
    .footerMain {
      height: 120px;
      font-size: 8px;
    }
    .oneLine {
      margin-top: 5px;
    }
    .footerBody {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .middle {
      padding-bottom: 0px;
    }
    .socialMedia {
      height: 10px;
    }
    .copyright {
      margin: 2px 3px 0px 0px;
    }
  }
  @media only screen and (min-width: 450px) {
    /* For tablets: */
    .footerMain {
      height: 85px;
      font-size: 10px;
    }

    .footerBody {
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;
    }
    .copyright {
      margin: 3px 3px 0px 0px;
    }
    .oneLine {
      margin-top: 0px;
    }
    .textAlign {
      text-align: right;
    }
    .imageAlign {
      text-align: left;
    }
    .socialMedia {
      height: 15px;
    }
  }
  @media only screen and (min-width: 790px) {
    /* For desktop: */
  }
`;
