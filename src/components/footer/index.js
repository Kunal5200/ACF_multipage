import React from "react";
import "./index.css";
import logo from "../../assests/images/AllCanFarmLogoWhite.svg";
import playstore from "../../assests/images/playstore.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGooglePlay,
} from "react-icons/fa";
import {GrAppleAppStore} from 'react-icons/gr'
import { AiFillAndroid } from "react-icons/ai";
import Button from "../button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  let links = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "ABOUT",
      url: "/about",
    },  
    {
      name: "ALLCANFARM",
      url: "/allcanfarm",
    },
    {
      name: "MAATI",
      url: "/maati ",
    },

    {
      name: "CONTACT",
      url: "/contact",
    },
  ];
  return (
    <div>
      <div className="footer">
        <div className="bg-footer p-5">
          <div className="row align-items-center">
            <div className="col-sm-11 m-auto  text-center">
            <NavLink to="/">
              <img src={logo} />
              </NavLink>
              {/* <p className="text-left text-white">
                AllCanFarm empowers farmers to achieve higher yields, increase
                profitability, and embrace sustainable farming practices.
              </p> */}
              <div className="footer__links my-3">
                {links.map((val) => (
                  <NavLink to={val.url} className="mx-3 links_footer">
                    {val.name}
                  </NavLink>
                ))}
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <a href="https://play.google.com/store/apps/details?id=com.allcanfarmapp.avigna">
                  <Button
                    bg="#36BA24"
                    border="2px solid #36BA24"
                    color="#ffffff"
                    padding="1px"
                    rounded="12px"
                    width="165px"
                    height="
                    55px"
                    className="hover"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      {/* <FaGooglePlay className="playbut me-3" /> */}
                      <img src={playstore} className="playbut"/>

                      <div className="googlebut">
                        <p className="getin mb-0">GET IN ON </p>
                        <span className="playgoo">Google Play</span>
                      </div>
                    </div>
                  </Button>
                </a>
                <a href="#" className="mx-3">
                  {/* <Button
                    bg="#36BA24"
                    border="2px solid #36BA24"
                    color="#ffffff"
                    padding="2px"
                    rounded="50px"
                    width="175px"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <GrAppleAppStore className="me-2" />
                      <div>
                        <p className="mb-0">Get it on</p>
                        <span>Apple Store</span>
                      </div>
                    </div>
                  </Button> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
