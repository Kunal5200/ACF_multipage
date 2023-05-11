import React from "react";
import "./index.css";
import logo from "../../assests/images/AllCanFarmLogoWhite.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import Button from "../button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  let links = [
    {
      name: "About",
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
      name: "FAQ",
      url: "/faq",
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
            <div className="col-sm-3 ">
              <img src={logo} />
              <p className="text-left text-white">
                AllCanFarm empowers farmers to achieve higher yields, increase
                profitability, and embrace sustainable farming practices.
              </p>
              {/* <div className="d-flex align-items-center justify-content-between my-3">
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <FaTwitter />
              </div>
              <div className="icons">
                <FaLinkedinIn />
              </div>
              <div className="icons">
                <FaInstagram />
              </div>
            </div> */}
              <div className="text-start">
                <a href="https://play.google.com/store/apps/details?id=com.allcanfarmapp.avigna">
                  <Button
                    border="1px solid #222"
                    bg="#222"
                    rounded="50px"
                    color="#ffffff"
                    width="250px"
                    height="60px"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <AiFillAndroid size={30} />
                      <div className="d-block">
                        <p className="mb-0">Get it on</p>
                        <span className="fs-5">Google Play</span>
                      </div>
                    </div>
                  </Button>
                </a>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-white ">
              <h4>Quick Links</h4>
              {links.map((val) => (
                <div className="footer_links   my-3">
                  <NavLink className="links_footer" to={val.url}>
                    {val.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
