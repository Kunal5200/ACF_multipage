import React from "react";
import "./index.css";
import image from "../../assests/images/banner/green_field.webp";
import Featurebox from "../../components/features_box";
import maati from "../../assests/data/maati";
import marketplace from "../../assests/images/banner/marketplace.webp";
import Aos from "aos";
const Marketplace = () => {
  Aos.init();
  return (
    <div>
      <div className="bg_maati">
        <div className="overlay">
          <h2 className="animate__animated animate__zoomInLeft ">Dhur Maati</h2>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-12">
            <h4
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              Dhur Maati-Farm to Table
            </h4>
            <p
              className="text-justify"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              Maati is a vertical of AllCanFarm, which allows the angel farmer
              to list the crops and fruits produced on the adopted farm to reach
              urban homes. The concept of Maati is straightforward: deliver pure
              and unprocessed food directly to consumers' tables. This model
              works best as it bypasses intermediaries like wholesalers,
              distributors, and retailers. Maati allows to earn reasonable
              profit without splitting the same with middlemen. Additionally,
              consumers can enjoy farm- fresh produce and have a better
              connection to the source of their food. With Maati, farmers can be
              stress-free as the crop and fruit yields will be taken care of by
              the angel farmer from AllCanFarm, along with the transportation,
              logistics, sales, distribution, high-tech equipment for storage,
              and expert guidance.
            </p>
            <p
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
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
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              {" "}
              As an angel farmer, you can list the farm's produce on Maati after
              creating an account, and the produce reaches urban consumers.
            </p>
          </div>
        </div>
        <div className="row my-7 align-items-center">
          <div className="col-sm-6">
            <h4
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              How does Dhur Maati Work?
            </h4>
            <div className="row my-3">
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
                <Featurebox
                  heading={maati.heading1}
                  desc={maati.desc1}
                  img={maati.img1}
                />
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
                <Featurebox
                  heading={maati.heading2}
                  desc={maati.desc2}
                  img={maati.img2}
                />
              </div>
            </div>
            <div className="row my-3">
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
                <Featurebox
                  heading={maati.heading3}
                  desc={maati.desc3}
                  img={maati.img3}
                />
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
                <Featurebox
                  heading={maati.heading4}
                  desc={maati.desc4}
                  img={maati.img4}
                />
              </div>
            </div>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="upper_div rounded">
              <img
                src={marketplace}
                height="100%"
                className="rounded process_hover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
