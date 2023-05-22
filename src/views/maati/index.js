import React from "react";
import "./index.css";
import image from "../../assests/images/banner/green_field.webp";
import Featurebox from "../../components/features_box";
import maati from "../../assests/data/maati";

import marketplace from "../../assests/images/banner/marketplace.webp";
import Aos from "aos";
import Productcard from "../../components/products";
import product from "../../assests/data/product";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  let navigate =  useNavigate();
  let clickHandler=(val)=>{
    navigate('/productview',{state:{data:val}})
  }
  let data = [
    {
      img: maati.img1,
      heading: maati.heading1,
      // desc: maati.desc1,
    },
    {
      img: maati.img2,
      heading: maati.heading2,
      desc: maati.desc2,
    },
    {
      img: maati.img3,
      heading: maati.heading3,
      desc: maati.desc3,
    },
  ];
  let data2 = [
    {
      img: maati.img4,
      heading: maati.heading4,
      desc: maati.desc4,
    },
    {
      img: maati.img5,
      heading: maati.heading5,
      desc: maati.desc5,
    },
    {
      img: maati.img6,
      heading: maati.heading6,
      desc: maati.desc6,
    },
  ];
 

  let data3 = [
    {
      img: product.img1,
      heading: product.heading1,
      
    },
    {
      img: product.img2,
      heading: product.heading2,
      
    },
    {
      img: product.img3,
      heading: product.heading3,
  
    },
  ];
  let data4 = [
    {
      img: product.img4,
      
      heading: product.heading4,
    },
    {
      img: product.img5,
      
      heading: product.heading5,
    },
    {
      img: product.img6,
      
      heading: product.heading6,
    },
  ];


  Aos.init();
  return (
    <div>
      <div className="bg_maati">
        <div className="overlay">
          <h2 className="animate__animated animate__zoomInLeft ">Dhur Maati</h2>
        </div>
      </div>
      <div className="container p-3">
        <div className="row my-5">
          <div className="col-sm-12">
            <h4
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              Dhur Maati-Farm to Table
            </h4>
            <p
              className="text-justify"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              {maati.para}
            </p>
            <p
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              This form of farm to table is profitable in many ways. Maati
              focuses on farm scalability and meeting urban demands. It is a
              viable business model for angel farmers who are willing to invest
              in marketing and distribution and who can establish a strong
              connection with their local community. It also provides them with
              an opportunity to support local agriculture and sustainable
              farming practises. Sustainable farming practises and environmental
              responsibility become the key selling points for many consumers.
              Maati is indeed a viable and rewarding option for angel farmers
              who are willing to put in the work to build relationships with
              their customers and provide high-quality, sustainably produced
              produce.
            </p>
            <p
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              {" "}
              As an angel farmer, you can list the farm's produce on Maati after
              creating an account, and the produce reaches urban consumers.
            </p>
          </div>
        </div>

        <div>
          <h4 className="animate_animated animate__zoomInRight ">
            How Dhur Maati Works?
          </h4>
        </div>
        <div className="row my-5">
          {data.map((val) => (
            <div
              className="col-sm-4"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <Featurebox img={val.img} heading={val.heading} desc={val.desc} />
            </div>
          ))}
        </div>
        <div className="row my-5">
          {data2.map((val) => (
            <div
              className="col-sm-4"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <Featurebox img={val.img} heading={val.heading} desc={val.desc} />
            </div>
          ))}
        </div>

        <div>
          <h4 className="animate_animated animate__zoomInRight ">
          PRODUCT LIST FOR MAATI
          </h4>
        </div>
        <div className="row my-5">
          {data3.map((val) => (
            <div
            onClick={()=>{clickHandler(val.data)}}
              className="col-sm-4"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <Productcard img={val.img} heading={val.heading}/>
            </div>
          ))}
        </div>
       
        <div className="row my-5">
          {data4.map((val) => (
            <div
            onClick={()=>{clickHandler(val.data)}}
              className="col-sm-4"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <Productcard img={val.img} heading={val.heading}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Marketplace;
