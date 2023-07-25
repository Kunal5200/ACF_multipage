import React from "react";
import "./index.css";
import Aos from "aos";
import { Link, useLocation, useParams} from "react-router-dom";
import {FaGooglePlay,} from "react-icons/fa";
import Button from "../../components/button";
import Multislider from "../../components/multicarousel";
import product from "../../assests/data/product";
import playstore from "../../assests/images/playstore.png";


const Productview = (props) => {
//  const location=useLocation()
  //   const params=useParams()
  // const productview=params.Productview

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
      banner: product.banner1,
      heading: product.heading1,
      data: {
        features: product.feature1,
      },
      url: product.url1,
    },
    {
      img: product.img2,
      banner: product.banner2,
      heading: product.heading2,
      data: {
        features: product.feature2,
      },
      url: product.url2,
    },
    {
      img: product.img3,
      banner: product.banner3,
      heading: product.heading3,
      data: {
        features: product.feature3,
      },
      url: product.url3,
    },
    {
      img: product.img4,
      banner: product.banner4,
      heading: product.heading4,
      data: {
        features: product.feature4,
      },
      url: product.url4,
    },
    {
      img: product.img5,
      banner: product.banner5,
      data: {
        features: product.feature5,
      },

      heading: product.heading5,
      url: product.url5,
    },
    {
      img: product.img6,
      banner: product.banner6,
      heading: product.heading6,

      data: {
        features: product.feature6,
      },
      url: product.url6,
    },
    {
      img: product.img7,
      banner: product.banner7,
      heading: product.heading7,

      data: {
        features: product.feature7,
      },
      url: product.url7,
    },
  ];
  let location = useLocation();
  console.log(location);
  Aos.init();
  return (
    <div>
      <div className="bannerss" 
      style={{backgroundImage: `url(${location.state.banner})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition : "center",
      height:"80vh",
    }}>
        <div className="bg-ACF" >
          <h2 className="text-white animate__animated animate__bounceInDown ">
          {location.state.heading}
          </h2>
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
                data-aos-anchor-placement="top"
              >
                <p className=" fw-bold f-18 ls-6 backbone ">
                {location.state.heading}
                </p>
                <h3 className="text-justify mt-3 text-primary farmm">Features:</h3>
                <ul className="list-unstyled">
                  {location.state.data.features.map((val,id)=>{
                    return(<li className="benefits_list mt-2 our py-1">{val.feature}</li>);
                  })}
                </ul>

                
              </div>
             <div className="d-flex store">
             <a href="https://play.google.com/store/apps/details?id=com.allcanfarmapp.avigna">
                  <Button
                    bg="black"
                    border="transparent"
                    // color="white"
                    padding="1px"
                    rounded="10px"
                    width="155px"
                     height="
                     52px"
                    className="hover mt-2"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                   
                      <img src={playstore} className="playbut" />

                      <div className="googlebut">
                        <p className="geti mb-0">Get in on </p>
                        <span className="playgo">Google Play</span>
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
            data-aos-anchor-placement="top"
          >
            <img src={ location.state.img} width="100%" height="90%" />
            
          </div>
          
          
          <h4 className=" backbone">
            PRODUCT LIST
          </h4>
        
        <div className="my-2 mb-5">
          <Multislider data={data3} responsive={productresponsive} />
        </div>
        </div>

      </div>

        </div>
  );
};

export default Productview;
