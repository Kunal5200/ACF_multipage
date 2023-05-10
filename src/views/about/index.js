import React from "react";
import "./index.css";
import Rotate from "../../components/rotate_components";
import Lifecycle from "../../assests/data/constant";
import { FaArrowRight } from "react-icons/fa";
import arrow from "../../assests/images/arrow.svg";
const About = () => {
  return (
    <div>
      <div className="bg-about">
        <div className="bg__about">
          <h4 className="text-white animate__animated animate__lightSpeedInLeft ">
            About
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-sm-11 p-4">
            <h4>Lifecycle of AllCanFarm </h4>
            <p className="text-justify">
              At AllCanFarm, farmers meet the angel farmer, who supports farmers
              in improving produce, profiting, and reducing carbon footprints
            </p>
          </div>
        </div>

        {/* <div className="row  ">
          <div className="col-sm-4  center  ">
            <Rotate
              heading={Lifecycle.Lifecycle.heading}
              desc={Lifecycle.Lifecycle.desc}
            />
          </div>
          <div className="col-sm-2">
            <img src={arrow} />
          </div>
          <div className="col-sm-3">
            <div className="  ">
              <ul className="list-unstyled">
                <li className="benefits_list"> Farmer Onboarding</li>
                <li className="benefits_list"> Farm Onboarding</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
