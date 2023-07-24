import React from "react";
import "./index.css";
import logo from "../../assests/images/background/AllCanFarm Logo 02 White.svg";
import playstore from "../../assests/images/playstore.png";
import appstore from "../../assests/images/apple.svg";
import List from "../list";
import data from "../../assests/data/data";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import Button from "../button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  // let links = [
  // {
  //   name: "HOME",
  //   url: "/",
  // },
  //   {
  //     name: "ABOUT",
  //     url: "/about",
  //   },
  //   {
  //     name: "ALLCANFARM",
  //     url: "/allcanfarm",
  //   },
  //   {
  //     name: "MAATI",
  //     url: "/maati ",
  //   },

  //   {
  //     name: "CONTACT",
  //     url: "/contact",
  //   },
  // ];

  return (
    <>
      <div className="footer ">
        <div className="bg-footer p-2">
          <div className="container">
            <div className="row ">
              <div className="col-sm-4">
                <NavLink to="/">
                  <img src={logo}  className="footerlogo mt-4"/>
                </NavLink>
                <p className="parag text-white mt-2">
                  AllCanFarm empowers farmers to achieve higher yields, increase
                  profitability, and embrace sustainable farming practices.
                </p>
              </div>
              <div className="col-sm-4 imp">
                <List heading="Important Links" data={data.footerLinks} />
              </div>

              {/* <div className="col-sm-4 footer__links">
                {links.map((val) => (
                  <NavLink to={val.url} className="mx-3 links_footer mb-3">
                    {val.name}
                  </NavLink>
                ))}
              </div> */}

               <div className="col-sm-4 px-5 pull">
               <h2 className="text-white ourapp mt-5 ">OUR APP</h2> 
                <a href="https://play.google.com/store/apps/details?id=com.allcanfarmapp.avigna">
                  <Button
                    bg="#ffff"
                    border="transparent"
                    color="#ffffff"
                    // padding="1px"
                    rounded="10px"
                    width="150px"
                     height="
                     50px"
                    className="hover mt-1"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                   
                      <img src={playstore} className="playbut" />

                      <div className="googlebut">
                        <p className="getin mb-0">Get in on </p>
                        <span className="playgoo">Google Play</span>
                      </div>
                    </div>
                  </Button>
                </a>
                <a href="#" className="mx-3">
                  <Button
                     bg="#ffff"
                     border="transparent"
                     color="#ffffff"
                    //  padding="1px"
                     rounded="10px"
                     width="150px"
                     height="
                     50px"
                     className="hover mt-2"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                    <img src={appstore} className="playbut me-1 " />
                      <div>
                        <p className="getin mb-0 ms-1 ">Download on</p>
                        <span n className="playgoo">Apple Store</span>
                      </div>
                    </div>
                  </Button>
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
