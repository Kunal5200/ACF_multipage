import React from "react";
import "./index.css";
import Rotate from "../../components/rotate_components";
import Lifecycle from "../../assests/data/constant";
import arrow from "../../assests/images/background/Web-05.png";
import Team from "../../components/team";
import piyush from "../../assests/images/PIYUSH_KUMAR.jpg";
import team from "../../assests/data/team";
import prashant from "../../assests/images/prashantgyan.jpg";
import Aos from "aos";
const About = () => {
  Aos.init({ disable: "phone" });
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
            <h4
              data-aos="fade-right"
              data-aos-offset="2"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              Evolutionary Path{" "}
            </h4>
            <p
              className="text-justify"
              data-aos="fade-right"
              data-aos-offset="2"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              AllCanFarm is a unique ecosystem that connects farmers with angel
              farmers to create a sustainable and efficient agricultural
              process. The platform is designed to bring value addition to every
              step of the farming lifecycle, from seed to harvest. With a focus
              on organic and regenerative farming, AllCanFarm empowers farmers
              to grow healthy crops while minimizing the impact on the
              environment. The platform also integrates with Maati Marketplace,
              an online marketplace that allows farmers to sell their produce
              directly to consumers, cutting out intermediaries and providing a
              fair price for both parties. Through this comprehensive approach,
              AllCanFarm is revolutionizing the way we think about agriculture
              and creating a more equitable and sustainable future for farmers
              and consumers alike.
            </p>
          </div>
        </div>
      </div>
      <div className="container mobile_hidden">
        <h4 className="mb-5 text-center">Lifecycle </h4>
        <div className="m-auto ">
          {/* <div className=" arrow_up text-center">
            <p className="mb-0 f-13">Farmer Onboarding</p>
            <img src={arrow} width={100} />
            <p className="f-13">Farm Onboarding</p>
          </div> */}
          <div className="cycle__div">
            <Rotate
              aos="fade-right"
              offset="20"
              delay="50"
              duration="1000"
              easing="ease-in-out"
              mirror="false"
              once="false"
              anchor-placement="top-center"
              className="circle_top_left text-white"
              heading={Lifecycle.Lifecycle.heading1}
              desc={Lifecycle.Lifecycle.desc1}
            />
            <div>
              <p className="mb-0 f-13">Farmer Onboarding</p>
              <img src={arrow} width={100} />
              <p className="f-13">Farm Onboarding</p>
            </div>
            <Rotate
              aos="fade-left"
              offset="20"
              delay="50"
              duration="1000"
              easing="ease-in-out"
              mirror="false"
              once="false"
              anchor-placement="top-center"
              className="circle_top_right text-white"
              heading={Lifecycle.Lifecycle.heading2}
              desc={Lifecycle.Lifecycle.desc2}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="arrow_1">
              <p className="mb-0 f-13">Technology-backed marketplace</p>
              <img src={arrow} width={100} />
              <p className="mb-0 f-13">Revenue generation</p>
            </div>
            <div className="arrow_2">
              <p className="mb-0 f-13">Farm Adoption </p>
              <img src={arrow} width={100} />
              <p className="mb-0 f-13">Yield Processing</p>
            </div>
          </div>

          <div className="cycle__div my-7">
            <Rotate
              className="circle_bottom_right text-white"
              heading={Lifecycle.Lifecycle.heading3}
              desc={Lifecycle.Lifecycle.desc3}
              aos="fade-right"
              offset="20"
              delay="50"
              duration="1000"
              easing="ease-in-out"
              mirror="true"
              once="false"
              anchor-placement="top-center"
            />
            <div className="mx-3 text-center">
              <p className="mb-0 f-13">Food Packaging</p>
              <img src={arrow} className="rotate_img" width={100} />
              <p className="mb-0 f-13">
                ISO-certified and FSSAI-compliant yield
              </p>
            </div>
            <Rotate
              aos="fade-left"
              offset="20"
              delay="50"
              duration="1000"
              easing="ease-in-out"
              mirror="true"
              once="false"
              anchor-placement="top-center"
              className="circle_bottom_left text-white"
              heading={Lifecycle.Lifecycle.heading4}
              desc={Lifecycle.Lifecycle.desc4}
            />
          </div>
          {/* <div className="arrow_down text-center my-5">
            <p className="mb-0 f-13">Food Packaging</p>
            <img src={arrow} className="rotate_img" width={100} />
            <p className="mb-0 f-13">ISO-certified and FSSAI-compliant yield</p>
          </div> */}
          {/* <div className="arrow_rotate text-center">
            <p className="mb-0 f-13">Farm Adoption </p>
            <img src={arrow} width={100} />
            <p className="mb-0 f-13">Yield Processing</p>
          </div> */}
          {/* <div className="arrow_left">
            <p className="mb-0 f-13">Technology-backed marketplace</p>
            <img src={arrow} width={100} />
            <p className="mb-0 f-13">Revenue generation</p>
          </div> */}
        </div>
      </div>
      <div className="container mb-4">
        <div className="row align-items-center">
          <div
            className="col-sm-6 col-md-7 col-lg-6"
            data-aos="fade-right"
            data-aos-offset="2"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h4>Our Team</h4>
            <p className="text-justify">
              Meet our dedicated team of professionals who are behind the scenes
              of AllCanFarm’s work and success. With years of experience and
              expertise in their respective fields, they work enthusiastically
              to ensure that our farmers and angel farmers receive the best
              possible services. We are proud of our team and their
              commitment to excellence.
            </p>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-6">
            <div className="row">
              <div
                className="col-sm-6"
                data-aos="fade-up"
                data-aos-offset="2"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Team
                  img={prashant}
                  name="Prashant Gyan"
                  desc={team.team2}
                  position="Founder & CEO
"
                />
              </div>
              <div
                className="col-sm-6"
                data-aos="fade-down"
                data-aos-offset="2"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Team
                  img={piyush}
                  name="Piyush Kumar"
                  desc={team.team1}
                  position=" Co-Founder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
