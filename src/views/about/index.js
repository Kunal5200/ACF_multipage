import React from "react";
import "./index.css";
import Rotate from "../../components/rotate_components";
import{BiRightArrow} from "react-icons/bi";
import Lifecycle from "../../assests/data/constant";
// import arrow from "../../assests/images/background/Arrow.svg";
import arrow from "../../assests/images/background/arrow.svg";
import Team from "../../components/team";
import piyush from "../../assests/images/PIYUSH_KUMAR.jpg";
import team from "../../assests/data/team";
import prashant from "../../assests/images/prashantgyan.jpg";
import Aos from "aos";
import { icons } from "react-icons";
const About = () => {
  Aos.init();
  return (
    <div>
      <div className="bg-about">
        <div className="bg__about">
          <h4 className="text-white animate__animated animate__lightSpeedInLeft maati">
            About
          </h4>
        </div>
      </div>
      <div className="container p-3">
        <div className="row">
          <div className=" col-sm-12 p-5">
            <h4 className="backbone"
              data-aos="fade-right"
              data-aos-offset="2"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
              
              >
         AllCanFarm: 
            </h4>
         <h3 className="farmm text-primary">
          Cultivating Connection, Nourishing Communities{" "}
          </h3>
            <p
              className="text-justify text-grey lands"
              data-aos="fade-right"
              data-aos-offset="2"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
             
            >
           In the verdant lands where nature's bounty thrives, a tale unfolds—a story of connection, nourishment, and empowerment. At the heart of this narrative lies a platform, a bridge that unites farmers and consumers in a symbiotic bond. Welcome to our world, where we weave together the threads of agriculture and community. On our platform, we embrace the profound importance of the farmer's role in cultivating the food we savour. We have gathered a network of dedicated farmers, each with their own patch of fertile soil, tending to their crops with unwavering passion. Through our platform, these farmers diligently grow and nurture the crops destined to become part of your table and your sustenance. But our purpose goes beyond the seeds planted in the earth. We believe in supporting our farmers by ensuring they have access to the tools and resources necessary to bring you the purest and finest food products. We provide them with localised processing units where the harvest is carefully transformed into pristine, untainted goodness. This entails involving as few people and as many hands as possible. By empowering our farmers with these processing facilities, we ensure that their toil bears fruit—a bountiful harvest that reaches you, the discerning consumer, in its most unadulterated form.
            </p>
          </div>
        </div>
      </div>

      <div className="container mobile_hidden px-5">
        <h4 className="mb-5 text-center backbone"> </h4>
        <div className="px-5">
          {/* <div className=" arrow_up text-center">
            <p className="mb-0 f-13">Farmer Onboarding</p>
            <img src={arrow} width={100} />
            <p className="f-13">Farm Onboarding</p>
          </div> */}
          <div className="cycle__div px-5">
            <Rotate
              aos="fade-right"
              offset="20"
              delay="50"
              duration="1000"
              easing="ease-in-out"
              mirror="false"
              once="false"
              anchor-placement="top"
              className="circle_top_left text-white mt-2"
              heading={Lifecycle.Lifecycle.heading1}
              desc={Lifecycle.Lifecycle.desc1}
            />
            <div className="">
              <p className="mb-0 f-13 backbone arrow_0 text-center">Farmer Onboarding</p>
              <div className="d-flex">
                <div className="dash" style={{width: "250px" ,height:"10px",marginTop:"8px"}}></div>
              <img src={arrow}  width=  "20px" className="" /> 
              </div>
              <p className="f-13 backbone arrow_0 text-center">Farm Onboarding</p>
            </div>
            <Rotate
              aos="fade-left"
              offset="20"
              delay="50"
              duration="1000"
              easing="ease-in-out"
              mirror="false"
              once="false"
              anchor-placement="top"
              className="circle_top_right text-white mt-2"
              heading={Lifecycle.Lifecycle.heading2}
              desc={Lifecycle.Lifecycle.desc2}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="arrow_1">
              <p className="mb-0 f-13 backbone text-center">Technology-backed marketplace</p>
              <div className="d-flex">
                <div className="dash" style={{width: "170px" ,height:"10px",marginTop:"8px"}}></div>
              <img src={arrow}  width=  "20px" className="" /> 
              </div>
              <p className="mb-0 f-13 backbone text-center ">Revenue generation</p>
            </div>
            
            <div className="arrow_2">
              <p className="mb-0 f-13 backbone text-center">Farm Adoption </p>
             
              <div className="d-flex">
                <div className="dash" style={{width: "170px" ,height:"10px",marginTop:"8px"}}></div>
              <img src={arrow}  width=  "20px" className="" /> 
              </div>
              <p className="mb-0 f-13 backbone text-center ">Yield Processing</p>
            </div>
          </div>

          <div className="cycle__div my-7 px-5">
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
              anchor-placement="top"
            />
            <div className="text-center">
              <p className="mb-0 f-13 backbone text-center p-1">Food Packaging</p>
              <div className="d-flex">
              <img src={arrow}  width=  "20px" className="rotate_img" /> 
                <div className="dash1" style={{width: "250px" ,height:"10px",marginTop:"3px"}}></div>
              </div>
              {/* <img src={arrow} className="rotate_img" width="20px" /> */}
              <p className="mb-0 f-13 backbone text-center p-1 ">
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
              anchor-placement="top"
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
      <div className="container mb-4 px-5">
        <div className="row align-items-center">
          <div
            className="col-sm-6 col-md-5 col-lg-4"
            // data-aos="fade-right"
            // data-aos-offset="150"
            // data-aos-delay="20"
            // data-aos-duration="600"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top"
          >
            <h4 className="tee">Our Team</h4>
            <p className="text-justify text-grey ">
              Meet our dedicated team of professionals who are behind the scenes
              of AllCanFarm’s work and success. With years of experience and
              expertise in their respective fields, they work enthusiastically
              to ensure that our farmers and angel farmers receive the best
              possible services. We are proud of our team and their
              commitment to excellence.
            </p>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-7">
            <div className="row">
              <div
                className="col-sm-6"
                data-aos="fade-left"
                data-aos-offset="2"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
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
                data-aos="fade-right"
                data-aos-offset="2"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
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
