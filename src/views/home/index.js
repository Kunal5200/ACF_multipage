import React from "react";
import "./index.css";
import Aos from "aos";
import image1 from "../../assests/images/banner/indian_farmer_1.webp";
import image2 from "../../assests/images/banner/indian_farmer_plowing_files_1.webp";
import image3 from "../../assests/images/banner/young_farmer.webp";
import angel1 from "../../assests/images/banner/angel_farmer1.jpg";
import angel2 from "../../assests/images/banner/angel_farmer2.jpg"
import angel3 from "../../assests/images/banner/angel_farmer3.jpg";
import farmer from "../../assests/images/banner/farmer.png";
import angelfarmer from "../../assests/images/banner/farmer01.png";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import organic from "../../assests/images/organic.jpg";
import green_field from "../../assests/images/green_field.jpg";
import farm_field from "../../assests/images/farm_field.jpg";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa";
import data from "../../assests/data/data";
const Home = () => {
  Aos.init();

  const Images = [
    {
      src: { image1 },
    },
    {
      src: { image2 },
    },
    {
      src: { image3 },
    },
  ];
  return (
    <div>
      <div className="banner">
        <div className="bg-overlay">
          <div className="container my-7">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <h6 className="heading animate__animated animate__bounceInLeft">
                    Growing together, sustainably with AllCanFarm
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background_farmer__angel  p-3">
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 m-auto ">
              <h4 className="india my-4">
                In India, 70% of the population depends on agriculture, and
                AllCanFarm is working with the farmers and for the farmers
              </h4>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-sm-5 col-md-6 col-lg-5"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <p className="text-primary mb-0 ms-3">Backbone of the economy</p>
              <h4 className="f-30 ms-3 farmm ">Farmers</h4>
              <p className="text-justify p-3 text-grey paar ">
                Farmers are the unsung heroes of our society, working tirelessly
                to feed the nation's population. From sunrise to sunset, they
                toil away in fields and pastures, tending to crops and livestock
                with unwavering dedication. Whether it's cultivating crops for
                our dinner tables or raising livestocks, farmers are the
                backbone of our food system. They face countless challenges,
                from unpredictable weather patterns to fluctuating market
                prices, but they persevere with grit and determination.
              </p>
              <Link to="/about">
                <Button
                  bg="#36Ba24"
                  border="2px solid #36BA24"
                  color="#ffffff"
                  padding="8px"
                  rounded="8px"
                  className="ms-3 but"
                >
                  Know More
                </Button>
              </Link>
            </div>
            <div className="col-sm-7 col-md-6 col-lg-7 ">
              <div className="row">
                <div
                  className="col-sm-6 p-0  "
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div
                    style={{ overflow: "hidden", position: "relative" }}
                    className="rounded h-100 picturrr mx-1"
                  >
                    <img
                      src={image1}
                      width="100%"
                      height="100%"
                      className="rounded image_hover"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="row">
                    <div
                      className="col-sm-12 p-0"
                      data-aos="fade-right"
                      data-aos-offset="20"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="false"
                      data-aos-once="true"
                      data-aos-anchor-placement="top"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded my-1"
                      >
                        <img
                          src={image2}
                          width="100%"
                          className="rounded image_hover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-sm-12 p-0"
                      data-aos="fade-down"
                      data-aos-offset="20"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="false"
                      data-aos-once="true"
                      data-aos-anchor-placement="top"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded "
                      >
                        <img
                          src={image3}
                          width="100%"
                          className=" image_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-7">
          <div className="row align-items-center my-4">
            <div className="col-sm-7 col-md-6 col-lg-7">
              <div className="row">
                <div
                  className="col-sm-6 p-0  "
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div
                    style={{ position: "relative", overflow: "hidden" }}
                    className="rounded h-100 mx-1"
                  >
                    <img
                      src={angel1}
                      width="100%"
                      height="100%"
                      className="rounded image_hover"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="row">
                    <div
                      className="col-sm-12 p-0"
                      data-aos="fade-right"
                      data-aos-offset="20"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="false"
                      data-aos-once="true"
                      data-aos-anchor-placement="top"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded my-1"
                      >
                        <img
                          src={angel2}
                          width="100%"
                          className="rounded image_hover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-sm-12 p-0"
                      data-aos="fade-down"
                      data-aos-offset="20"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="false"
                      data-aos-once="true"
                      data-aos-anchor-placement="top"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded"
                      >
                        <img
                          src={angel3}
                          width="100%"
                          className="rounded image_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-5 col-md-6 col-lg-5"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <p className="text-primary mb-0 ms-3 ado">Adopting farms</p>
              <h4 className="f-30 ms-3 farmm">Angel Farmers</h4>
              <p className="text-justify p-3 text-grey paar">
              When an educated urban individual turns their attention to farming, magic can happen. Thus, they are known as Angel Farmers. These visionary individuals see the potential in the agricultural industry to not only feed the world but also to shape the future of sustainable food production. With their financial support and expertise, they can help farmers scale up their operations, adopt cutting-edge technologies, and find new ways to reduce waste and improve yields and crop production.
              </p>
              <Link to="/about">
                <Button
                  bg="#36Ba24"
                  border="2px solid #36BA24"
                  color="#ffffff"
                  padding="8px"
                  rounded="8px"
                  className="ms-3 but"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="farmer_angelfarmer ">
        <div className="container my-7">
          <div className="row">
            <h4 className="mb-4 text-center emp">
              Empowering sustainable agriculture for a greener tomorrow
            </h4>
            <div
              className="col-sm-6"
              data-aos="fade-up-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="farmer p-3">
                <div className="shadow rounded height_farmer p-5">
                  <div className="text-center mb-3">
                    <img src={farmer} width={100} height={100} />
                  </div>
                  <h4 className="my-4 emp">Benefits For Farmers</h4>
                  <ul className="list-unstyled">
                    <li className="benefits_list my-2 text-justify our">
                      Farmers get financial, technological, and efficient market
                      support.
                    </li>
                    <li className="benefits_list my-2 text-justify our">
                      Farmers can earn additional income.
                    </li>
                    <li className="benefits_list my-2 text-justify our ">
                      For better yield and crop production, farmers will have
                      standard processes and guidance from AllCanFarm.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6"
              data-aos="fade-up-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="angel_farmer p-3">
                <div className="shadow rounded height_farmer p-5">
                  <div className="text-center mb-3">
                    <img src={angelfarmer} width={100} height={100} />
                  </div>
                  <h4 className="my-4 emp">Benefits For Angel Farmers</h4>
                  <ul className="list-unstyled">
                    <li className="benefits_list my-2 text-justify our">
                      Angel Farmers can reduce their carbon footprints.
                    </li>
                    <li className="benefits_list my-2  text-justify our">
                      Angel Farmers can find a marketplace for produce.
                    </li>
                    <li className="benefits_list my-2 text-justify our ">
                      Angel Farmers will have a proper living facility at the
                      farms with all the required amenities, including Wi-Fi.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background_farmer__angel  p-3">
      <div className="container mt-3 pt-5">

      <h5 className=" text-uppercase text-primary fw-bold emp">
                     Why work with AllCanFarm?
                    </h5>
                    <p className="text-justify ind"> 
                    AllCanFarm is a collaborative relationship between farmers and angel farmers, which provides many reasons to work with us.
                   </p>


          <div className="row mt-5" >
            <div className="col-sm-6 text-center"
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top">
              
              <div className="upper_div rounded shadow">
              <img src={green_field}  width="100%" height="80%"   className="rounded process_hover" />
            </div>
            </div>
            <div className="col-sm-6 ">
              <div className="row">
                <div className="col-sm-10 m-auto">
                  <div className="mt-4"
                  data-aos="fade-left"
                  data-aos-offset="150"
                  data-aos-delay="20"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top">
                    
                   <ul className="list-unstyled our">
                    <li className="benefits_list my-2" >Adopt farms, trees, and crops.</li>
                    <li className="benefits_list my-2 ">Use of technology and online methods to see farm progress.</li>
                    <li className="benefits_list my-2">Option to stay at the farm.</li>
                    <li className="benefits_list my-2">Produce can be listed on marketplaces such as Maati.</li>
                    <li className="benefits_list my-2">From logistics to packaging to distribution, everything is under one roof.</li>
                    <li className="benefits_list my-2">We have technology-backed processing facilities for final consumables such as cold-pressed mustard oil, turmeric powder, cumin powder, and much more.</li></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


          <div className="container mt-5 pt-5" >
            <div className="row">
              <div className="col-sm-6">
              <div className="col-sm-10 m-auto">
                <div className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top">
                  <p className=" text-uppercase text-primary fw-bold f-18 ls-6 emp">
                  Farm adoption plans
                    </p>
                  <p className="text-justify ind">  We have curated farm adoption plans for angel farmers.
              </p>
              <h4 className="text-justify my-3 our ">
                    Short Term Plan (2-3 Years)
                    </h4>
              <ul className="list-unstyled our">
                    <li className="benefits_list my-2" >2 crops or plants</li>
                    <li className="benefits_list my-2 ">1-3 YOY Returns</li>
                    <li className="benefits_list my-2">15% YOY Returns</li>
                    <li className="benefits_list my-2">Investment Protection</li>
                    <li className="benefits_list my-2">Low Risk Investment</li>
                    </ul>
                
 </div>
 </div>
              </div>
              <div className="col-sm-6  text-center "
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="20"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top">
              
              <div className="upper_div rounded shadow">
               <img src={farm_field} width="100%" height="80%"   className="rounded process_hover"/>
              </div>
              </div>
            </div>
          </div>



          <div className="container mt-5 pt-5">
          <div className="row" >
            <div className="col-sm-6  text-center"
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top">
                <div className="upper_div rounded shadow">
              <img src={green_field} width="100%" height="80%"   className="rounded process_hover" />
            </div>
            </div>
            <div className="col-sm-6 ">
              <div className="row">
                <div className="col-sm-10 m-auto">
                  <div className="mt-4"
                  data-aos="fade-left"
                  data-aos-offset="150"
                  data-aos-delay="20"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top">
                   
                    <h4 className="text-justify my-3 our"> 
                    Mid Term Plan (4-7 Years)
                   </h4>
                   <ul className="list-unstyled our">
                    <li className="benefits_list my-2" >3 crops or plants</li>
                    <li className="benefits_list my-2 ">1-7 YOY Returns</li>
                    <li className="benefits_list my-2">25% YOY Returns</li>
                    <li className="benefits_list my-2">Investment Protection</li>
                    <li className="benefits_list my-2">Low Risk Investment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="container mt-5 pt-5" >
            <div className="row">
              <div className="col-sm-6">
              <div className="col-sm-10 m-auto ">
                <div className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top">
                
              <h4 className="text-justify my-3 longg">
                    Long Term Plan (8-15 Years)
                    </h4>
              <ul className="list-unstyled our">
                    <li className="benefits_list my-2">4 crops or plants</li>
                    <li className="benefits_list my-2">1-15 YOY Returns</li>
                    <li className="benefits_list my-2">35% YOY Returns </li>
                    <li className="benefits_list my-2">Investment Protection</li>
                    <li className="benefits_list my-2">Low Risk Investment</li>
                    </ul>
                
 </div>
 </div>
              </div>
              <div className="col-sm-6  text-center"
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="20"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top">
                  <div className="upper_div rounded shadow">
               <img src={farm_field} width="100%" height="80%"   className="rounded process_hover" />
              </div>
              </div>
            </div>
          </div>
          <div className="mb-5"></div>
          </div>
         


      <div className="container-fluid my-5">
        <h3 className="text-center my-4">Common Questions</h3>
        <div className="row align-items-center">
          <div
            className="col-sm-5 img-fluid"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={organic} width="100%" className="org" />
          </div>
          <div
            className="col-sm-7 ind"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <Accordion transition={{ duration: "1000ms" }}>
              {data.faq.map((val, i) => (
                <AccordionItem key={i}>
                  {({ open }) => (
                    <>
                      <AccordionHeader className="accordion_head">
                        {val.title} {!open ? <FaPlus /> : <FaMinus />}
                      </AccordionHeader>
                      <AccordionBody
                        className={`${
                          open ? "accordion_body shadow" : "accordion_body"
                        }`}
                      >
                        {val.message}
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
