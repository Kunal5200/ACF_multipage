import React from "react";
import "./index.css";
import Aos from "aos";
import { useLocation } from "react-router-dom";
import mustard from "../../assests/images/1.jpg";
import jeeraraw from "../../assests/images/11.jpg";
import jeera from "../../assests/images/10.jpg";
import haldi from "../../assests/images/8.jpg";
import Dhania from "../../assests/images/9.jpg";
import Dhaniapowder from "../../assests/images/9.jpg";

const Productview = (props) => {
  let location = useLocation();
  console.log(location);
  Aos.init();
  return (
    <div>
      <div className="pro">
        <div className="bg-ACF">
          <h2 className="text-white animate__animated animate__bounceInDown">
            PRODUCT
          </h2>
        </div>
      </div>
      <div>{location.state.data}</div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-10 m-auto">
              <div
                className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <p className="text-primary fw-bold f-18 ls-6">
                  1.COLD PRESSED MUSTARD OIL
                </p>
                <h3 className="text-justify mt-3">Features:</h3>
                <ul className="ul">
                  <li className="mt-2">-Artificial flavour-free</li>
                  <li className="mt-2">-Free of preservatives and additives</li>
                  <li className="mt-2">
                    - Natural, unrefined, and unadulterated
                  </li>
                  <li className="mt-2">-Gluten-free and vegan</li>
                  <li className="mt-2">
                    -Immune-benefiting components and antioxidants
                  </li>
                  <li className="mt-2">- Suitable for all age groups</li>
                  <li className="mt-2">- Hygienic packaging</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6  text-center"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={mustard} width="100%" height="70%" />
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div
            className="col-sm-6  text-center"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={jeeraraw} width="100%" height="70%" />
          </div>

          <div className="col-sm-6">
            <div className="col-sm-10 m-auto">
              <div
                className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <p className="text-primary fw-bold f-18 ls-6">
                  2.CUMIN (JEERA) WHOLE"
                </p>
                <h2 className="text-justify">Features:</h2>

                <ul className="ul">
                  <li className="mt-2">- Natural aroma</li>
                  <li className="mt-2">
                    - Free of preservatives and additives
                  </li>
                  <li className="mt-2">- Natural texture and unadulterated</li>

                  <li className="mt-2">- Gluten-free and vegan</li>

                  <li className="mt-2">- Naturally dried</li>

                  <li className="mt-2">- Suitable for all age groups</li>

                  <li className="mt-2">- Hygienic packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-10 m-auto">
              <div
                className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <p className="text-primary fw-bold f-18 ls-6">
                  3.CUMIN (JEERA) POWDER
                </p>
                <h3 className="text-justify">Features:</h3>
                <ul className="ul">
                  <li className="mt-2">-Rich aroma and flavour</li>
                  <li className="mt-2">-Free of preservatives and additives</li>
                  <li className="mt-2">-Gluten-free and vegan</li>
                  <li className="mt-2">-High nutritional value</li>
                  <li className="mt-2">-Processed naturally</li>
                  <li className="mt-2">-Suitable for all age groups</li>
                  <li className="mt-2">-Hygienic packaging</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6  text-center"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={jeera} width="100%" height="70%" />
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div
            className="col-sm-6  text-center"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={Dhania} width="100%" height="70%" />
          </div>

          <div className="col-sm-6">
            <div className="col-sm-10 m-auto">
              <div
                className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <p className="text-primary fw-bold f-18 ls-6">
                  4.CORIANDER (DHANIA) WHOLE
                </p>
                <h2 className="text-justify">Features:</h2>
                <ul className="ul">
                  <li className="mt-2">- Natural aroma</li>
                  <li className="mt-2">
                    - Free of preservatives and additives
                  </li>
                  <li className="mt-2">- Natural texture and unadulterated</li>

                  <li className="mt-2">- Gluten-free and vegan</li>

                  <li className="mt-2">- Naturally dried</li>

                  <li className="mt-2">- Suitable for all age groups</li>

                  <li className="mt-2">- Hygienic packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-10 m-auto">
              <div
                className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <p className="text-primary fw-bold f-18 ls-6">
                  5.CORIANDER (DHANIA) POWDER
                </p>
                <h3 className="text-justify">Features:</h3>
                <ul className="ul">
                  <li className="mt-2">-Rich aroma and flavour</li>
                  <li className="mt-2">-Free of preservatives and additives</li>
                  <li className="mt-2">-Gluten-free and vegan</li>
                  <li className="mt-2">-High nutritional value</li>
                  <li className="mt-2">-Processed naturally</li>
                  <li className="mt-2">-Suitable for all age groups</li>
                  <li className="mt-2">-Hygienic packaging</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6  text-center"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={Dhaniapowder} width="100%" height="70%" />
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div
            className="col-sm-6  text-center"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={haldi} width="100%" height="70%" />
          </div>

          <div className="col-sm-6">
            <div className="col-sm-10 m-auto">
              <div
                className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <p className="text-primary fw-bold f-18 ls-6">
                  6.TURMERIC (HALDI) POWDER
                </p>
                <h2 className="text-justify">Features:</h2>
                <ul className="ul">
                  <li className="mt-2">-Rich aroma and flavour</li>
                  <li className="mt-2">-Free of preservatives and additives</li>
                  <li className="mt-2">-Gluten-free and vegan</li>
                  <li className="mt-2">-High nutritional value</li>
                  <li className="mt-2">-Processed naturally</li>
                  <li className="mt-2">-Suitable for all age groups</li>
                  <li className="mt-2">-Hygienic packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productview;
