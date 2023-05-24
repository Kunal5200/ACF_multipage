import React from "react";
import "./index.css";
import Aos from "aos";
import { useLocation } from "react-router-dom";
import {FaGooglePlay,} from "react-icons/fa";
import Button from "../../components/button";
import Multislider from "../../components/multicarousel";
import product from "../../assests/data/product";


const Productview = (props) => {

  const productresponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let data3 = [
    {
      img: product.img1,
      heading: product.heading1,
      data: {
        features: product.feature1,
      },
    },
    {
      img: product.img2,
      heading: product.heading2,
      data: {
        features: product.feature2,
      },
    },
    {
      img: product.img3,
      heading: product.heading3,
      data: {
        features: product.feature3,
      },
    },
    {
      img: product.img4,

      heading: product.heading4,
      data: {
        features: product.feature4,
      },
    },
    {
      img: product.img5,
      data: {
        features: product.feature5,
      },

      heading: product.heading5,
    },
    {
      img: product.img6,
      heading: product.heading6,

      data: {
        features: product.feature6,
      },
    },
    {
      img: product.img7,
      heading: product.heading7,

      data: {
        features: product.feature7,
      },
    },
  ];

  let location = useLocation();
  console.log(location.state);
  Aos.init();
  return (
    <div>
      <div className="pro">
        <div className="bg-ACF">
          <h2 className="text-white animate__animated animate__bounceInDown ind">
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
                <p className="text-primary fw-bold f-18 ls-6 emp  ">
                {location.state.heading}
                </p>
                <h3 className="text-justify mt-3">Features:</h3>
                <ul className="list-unstyled">
                  {location.state.data.features.map((val,id)=>{
                    return(<li className="benefits_list mt-2 our">{val.feature}</li>);
                  })}
                </ul>

                
              </div>
             <div className="d-flex">
                <a href="https://play.google.com/store/apps/details?id=com.avigna.maati">
                  <Button
                    bg="#36BA24"
                    border="2px solid #36BA24"
                    color="#ffffff"
                    padding="2px"
                    rounded="40px"
                    width="150px"
                    height="50px"
                    className="playstore"
                    >
                    <div className="d-flex align-items-center justify-content-center">
                      <FaGooglePlay className="me-2" />
                      <div className="googlebut">
                        <p className="mb-0">Get it on</p>
                        {/* <span>Google Play</span> */}
                      </div>
                    </div>
                  </Button>
                </a>
                <a href="#" className="mx-3">
                 
                </a>
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
          
          <div>
          <h4 className="animate_animated animate__zoomInRight ind ">
            PRODUCT LIST
          </h4>
        </div>
        <div className="my-3">
          <Multislider data={data3} responsive={productresponsive} />
        </div>

        </div>
      </div>

        </div>
  );
};

export default Productview;
