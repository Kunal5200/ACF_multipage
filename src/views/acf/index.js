import React from "react";
import "./index.css";
import farmstead from "../../assests/images/green_field.jpg";
import description from "../../assests/data/constant";
import transportation from "../../assests/images/banner/transportation.webp";
import corporate from "../../assests/images/social.webp";
import carbon from "../../assests/images/banner/carbo.webp";
import marketplace from "../../assests/images/banner/marketplace.webp";
import Aos from "aos";
const ACF = () => {
  Aos.init();

  return (
    <div>
      <div className="ACf">
        <div className="bg-ACF">
          <h2 className="text-white animate__animated animate__bounceInDown maatiii">
            AllCanFarm
          </h2>
        </div>
      </div>
      <div className="container my-5 p-3">
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
              data-aos-anchor-placement="top"
            >
              <h4 className="backbone">What is AllCanFarm?</h4>
              <p className="text-grey text-justify">
             Our platform is a testament to the power of direct connection. Here, consumers and farmers come together, forging a bond that transcends the impersonal walls of the marketplace. When you engage with our platform, you gain more than just a transaction; you become a part of a movement, a force that uplifts farmers and celebrates the purest produce.
By facilitating this direct interaction, we unlock a world of possibilities. The path from farm to table becomes a shorter journey, eliminating unnecessary middlemen and ensuring fair compensation for the diligent hands that cultivate the land. When the consumer meets the farmer, a ripple of positive change is felt. Farmers' incomes grow, allowing them to invest in their craft, their families, and their communities. And you, dear consumer, benefit from this connection as well. You receive produce untouched by hidden hands, untainted by unnecessary processes, and enriched by the care and dedication of those who lovingly grew it.
In the tapestry of our story, each thread weaves a tale of empowerment, sustainability, and trust. We invite you to join us on this journey, where the farmer's toil becomes an investment in a brighter future, and the consumer's choice becomes a vote for purity and authenticity. Together, we can change the way we nourish ourselves, create a sustainable ecosystem, and embrace the profound beauty of our connection to the earth and each other.
              </p>
            </div>
          </div>
          {/* <div className="col-sm-7">
            <div className="border_div"></div>
            <img src={farm} className="img_rounded" />
          </div> */}
        </div>
      </div>
      <div className="container ">
        <div className="row align-items-center my-5">
          {/* <h2 className="backbone">How AllCanFarm Works? </h2> */}
          <div
            className="col-sm-6"
            data-aos="fade-up-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <h2 className="backbone mb-4">How AllCanFarm Works? </h2>
            <h5 className="farmm text-primary ">AllCanFarm Living</h5>
            <p className="text-justify text-grey">{description.description.message1}</p>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-up-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
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
            data-aos="fade-up-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <div className="upper_div rounded shadow trans">
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
            data-aos="fade-up-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <h5 className="farmm text-primary">AllCanFarm Logistics</h5>
            <p className="text-justify text-grey">{description.description.message2}</p>
          </div>
        </div>
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-up-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <h5 className="farmm text-primary">Corporate Social Responsibility</h5>
            <p className="text-justify text-grey">{description.description.message3}</p>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-up-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
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
            data-aos="fade-up-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <div className="rounded upper_div shadow trans">
              <img
                src={carbon}
                width="100%"
                className="rounded process_hover"
              />
            </div>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-up-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <h5 className="farmm text-primary">Carbon Credits</h5>
            <p className="text-justify text-grey">{description.description.message4}</p>
          </div>
        </div>
      
        <div className="row align-items-center my-7">
          <div
            className="col-sm-6"
            data-aos="fade-up-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data- aos-once="false"
            data-aos-anchor-placement="top"
          >
            <h5 className="farmm text-primary">AllCanFarm Marketplace</h5>
            <p className="text-justify text-grey">{description.description.message5}</p>
          </div>
          <div
            className="col-sm-6"
            // data-aos="fade-right"
            // data-aos-offset="150"
            // data-aos-delay="20"
            // data-aos-duration="600"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="true"
            // data-aos-anchor-placement="top"
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
