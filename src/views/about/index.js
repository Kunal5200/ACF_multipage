import React from "react";
import "./index.css";
import Rotate from "../../components/rotate_components";
import Lifecycle from "../../assests/data/constant";
import arrow from "../../assests/images/background/Web-05.png";
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
      </div>
      <div className="container-fluid">
        <div className=" arrow_up text-center">
          <p className="mb-0">Farmer Onboarding</p>
          <img src={arrow} />
          <p>Farm Onboarding</p>
        </div>
        <div className="cycle__div">
          <Rotate
            className="circle_top_left text-white"
            heading={Lifecycle.Lifecycle.heading1}
            desc={Lifecycle.Lifecycle.desc1}
          />
          <Rotate
            className="circle_top_right text-white"
            heading={Lifecycle.Lifecycle.heading2}
            desc={Lifecycle.Lifecycle.desc2}
          />
        </div>

        <div className="cycle__div my-7">
          <Rotate
            className="circle_bottom_right text-white"
            heading={Lifecycle.Lifecycle.heading3}
            desc={Lifecycle.Lifecycle.desc3}
            para="pt-4"
          />
          <Rotate
            className="circle_bottom_left text-white"
            heading={Lifecycle.Lifecycle.heading4}
            desc={Lifecycle.Lifecycle.desc4}
          />
        </div>
        <div className="arrow_down text-center">
          <p className="mb-0">Food Packaging</p>
          <img src={arrow} className="rotate_img" />
          <p className="mb-0">ISO-certified and FSSAI-compliant yield</p>
        </div>
        <div className="arrow_rotate text-center">
          <p className="mb-0">Farm Adoption </p>
          <img src={arrow} className="" />
          <p className="mb-0">Yield Processing</p>
        </div>
        <div className="arrow_left">
          <p className="mb-0">Technology-backed marketplace</p>
          <img src={arrow} />
          <p className="mb-0">Revenue generation</p>
        </div>
      </div>
    </div>
  );
};

export default About;
