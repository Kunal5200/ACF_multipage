import React from "react";
import "./index.css";
import image from "../../assests/images/banner/green_field.webp";
import Featurebox from "../../components/features_box";
import maati from "../../assests/data/maati";

import marketplace from "../../assests/images/banner/marketplace.webp";
import Aos from "aos";
import Productcard from "../../components/products";
import product from "../../assests/data/product";
import { useNavigate, useParams } from "react-router-dom";
import Multislider from "../../components/multicarousel";

const Marketplace = () => {
  // let navigate = useNavigate();
  // const params=useParams()
  // const product=params.product

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

  let data = [
    {
      img: maati.img1,
      heading: maati.heading1,
      desc: maati.desc1,
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
  let data4 = [];

  Aos.init();
  return (
    <div>
      <div className="bg_maati">
        <div className="overlay">
          <h2 className="animate__animated animate__zoomInLeft maati">
            Dhur Maati
          </h2>
        </div>
      </div>
      <div className="container p-3">
        <div className="row my-5">
          <div className="col-sm-12">
            <h4
              className="backbone"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              Dhur Maati-
            </h4>
            <h3 className="farmm text-primary">Farm to Table</h3>
            <p
              className="text-justify text-grey"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              {maati.para}
            </p>

            <p
              className="text-grey text-justify"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
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
              className="text-grey"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              {" "}
              As an angel farmer, you can list the farm's produce on Maati after
              creating an account, and the produce reaches urban consumers.
            </p>
          </div>
        </div>

        <div>
          <h4 className="animate_animated animate__zoomInRight backbone">
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
              data-aos-anchor-placement="top"
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
              data-aos-anchor-placement="top"
            >
              <Featurebox img={val.img} heading={val.heading} desc={val.desc} />
            </div>
          ))}
        </div>

        <h4 className="animate_animated animate__zoomInRight  backbone ms-3">
          PRODUCT LIST
        </h4>

        <div className="mb-3">
          <Multislider data={data3} responsive={productresponsive} />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
