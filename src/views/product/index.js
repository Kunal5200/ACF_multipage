import React from "react";
import "./index.css";
import Aos from "aos";
import { useLocation } from "react-router-dom";

const Productview = (props) => {
  let location = useLocation();
  console.log(location.state);
  Aos.init();
  return (
    <div>
      <div className="pro">
        <div className="bg-ACF">
          <h2 className="text-white animate__animated animate__bounceInDown">
          {location.state.heading}
          </h2>
        </div>
      </div>
      <div></div>

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
                {location.state.heading}
                </p>
                <h3 className="text-justify mt-3">Features:</h3>
                <ul className="list-unstyled">
                  {location.state.data.features.map((val,id)=>{
                    return(<li className="benefits_list mt-2">{val.feature}</li>);
                  })}
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
            <img src={ location.state.img} width="100%" height="70%" />
          </div>
        </div>
      </div>

        </div>
  );
};

export default Productview;
