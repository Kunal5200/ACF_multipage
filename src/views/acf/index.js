import React from "react";
import "./index.css";
import farmstead from "../../assests/images/green_field.jpg";
import description from "../../assests/data/constant";
import transportation from "../../assests/images/banner/transportation.webp";
import corporate from "../../assests/images/banner/corporate.webp";
import carbon from "../../assests/images/banner/carbo.webp";
import marketplace from "../../assests/images/banner/marketplace.webp";
import Aos from "aos";
const ACF = () => {
  Aos.init();

  return (
    <div>
      <div className="ACf">
        <div className="bg-ACF">
          <h2 className="text-white animate__animated animate__bounceInDown">
            AllCanFarm
          </h2>
        </div>
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h4>What is AllCanFarm?</h4>
              <p className="text-grey text-justify">
                The best way to secure your money is to create an asset by
                adopting farms and harvesting the highest-quality crops or
                fruits. AllCanFarm is a platform for farmers and angel farmers
                to build a collaborative relationship in the form of scalable
                farming practices. The platform gives the angel farmer the
                opportunity to adopt farms. As, an angel farmer, you will be in
                regular communication with the farmer to understand the yield,
                quality of crops and fruits, and harvesting time. For example,
                some crops, such as soybeans or corn, are in high demand and can
                be profitable, while others, like fruits, may require more
                specialised knowledge and management.
              </p>
            </div>
          </div>
          {/* <div className="col-sm-7">
            <div className="border_div"></div>
            <img src={farm} className="img_rounded" />
          </div> */}
        </div>
      </div>
      <div className="container">
        <h2 className="my-5">How AllCanFarm Works? </h2>
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h5>AllCanFarm Living</h5>
            <p className="text-justify">{description.description.message1}</p>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="upper_div rounded shadow">
              <img
                src={farmstead}
                width="100%"
                className="rounded process_hover"
                alt=""
              />
            </div>
            {/* <div className="border_div"></div> */}
          </div>
        </div>
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="upper_div rounded shadow">
              <img
                src={transportation}
                width="100%"
                className="rounded process_hover"
                alt=""
              />
            </div>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h5>AllCanFarm Logistics</h5>
            <p className="text-justify">{description.description.message2}</p>
          </div>
        </div>
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h5>Corporate Social Responsibility</h5>
            <p className="text-justify">{description.description.message3}</p>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="upper_div rounded shadow">
              <img
                src={corporate}
                width="100%"
                className="rounded process_hover "
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="rounded upper_div shadow">
              <img
                src={carbon}
                width="100%"
                className="rounded process_hover"
              />
            </div>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h5>Carbon Credits</h5>
            <p className="text-justify">{description.description.message4}</p>
          </div>
        </div>
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h5>AllCanFarm Marketplace</h5>
            <p className="text-justify">{description.description.message5}</p>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="upper_div rounded shadow">
              <img
                src={marketplace}
                width="100%"
                className="rounded process_hover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACF;
