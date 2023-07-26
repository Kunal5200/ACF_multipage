import React from "react";
import "./index.css";
import Aos from "aos";
import image1 from "../../assests/images/banner/indian_farmer_1.webp";
import image2 from "../../assests/images/banner/indian_farmer_plowing_files_1.webp";
import image3 from "../../assests/images/banner/young_farmer.webp";
import angel1 from "../../assests/images/banner/angel_farmer1.webp";
import angel2 from "../../assests/images/banner/angel_farmer2.jpg";
import angel3 from "../../assests/images/banner/angel_farmer3.jpg";
import farmer from "../../assests/images/banner/farmer.png";
import angelfarmer from "../../assests/images/banner/farmer01.png";
import Button from "../../components/button";
import short from "../../assests/images/background/short term.png";
import mid from "../../assests/images/background/mid term.png";
import long from "../../assests/images/background/long term.png";
import { Link } from "react-router-dom";
import organic from "../../assests/images/organic.webp";
import green_field from "../../assests/images/green_field.jpg";
import farm_field from "../../assests/images/farm_field.jpg";
import{TbPlant} from "react-icons/tb";
import field from "../../assests/images/banner/field.webp";
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
            <div className="row ">
              <div className="col-sm-6 mt-5">
                <div className="container mt-5">
                  <h1 className="heading animate__animated animate__bounceInLeft">
                    Growing together, sustainably with AllCanFarm
                  </h1>
                  <h6 className="ina animate__animated animate__bounceInLeft  my-3">
                    In India, 70% of the population depends on agriculture, and
                    AllCanFarm is working with the farmers and for the farmers
                  </h6>
                  <Link to="/about">
                    <Button
                      bg="#36Ba24"
                      border="2px solid #36BA24"
                      color="#ffffff"
                      padding="8px"
                      width="150px"
                      // rounded="8px"
                      className="butto my-3"
                    >
                      Know More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background_farmer__angel  p-3">
        <div className="container my-3">
          <div className="row"></div>
          <div className="row align-items-center mt-5">
            <div
              className="col-sm-5 col-md-6 col-lg-5 p-5 backfara"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <h6 className=" backbone">Backbone of the economy</h6>
              <h1 className=" text-primary farmm ">Farmers</h1>
              <p className="text-justify  text-grey farmmer">
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
                  width="150px"
                  // rounded="8px"
                  className=""
                >
                  Know More
                </Button>
              </Link>
            </div>
            <div className="col-sm-7 col-md-6 col-lg-7 ">
              <div className="row">
                <div
                  className="col-sm-6 p-0"
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

        <div className="container my-4">
          <div className="row align-items-center my-4">
            <div className="col-sm-7 col-md-6 col-lg-7 p-5">
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
              <h6 className=" backbone ms-1">Adopting farms</h6>
              <h1 className=" text-primary farmm ">Angel Farmers</h1>
              <p className="text-justify  text-grey farmmer">
                When an educated urban individual turns their attention to
                farming, magic can happen. Thus, they are known as Angel
                Farmers. These visionary individuals see the potential in the
                agricultural industry to not only feed the world but also to
                shape the future of sustainable food production. With their
                financial support and expertise, they can help farmers scale up
                their operations, adopt cutting-edge technologies, and find new
                ways to reduce waste and improve yields and crop production.
              </p>
              <Link to="/about">
                <Button
                  bg="#36Ba24"
                  border="2px solid #36BA24"
                  color="#ffffff"
                  padding="8px"
                  width="150px"
                  // rounded="8px"
                  className=""
                >
                  Know More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="farmer_angelfarmer ">
        <div className="container my-2 p-4">
          <div className="row">
            <h6 className=" backbone text-center">
              {" "}
              Empowering sustainable agriculture for
            </h6>
            <h1 className=" text-primary farmm text-center ">
              {" "}
              A Greener Tomorrow
            </h1>
            <div
              className="col-sm-6 mt-3"
              data-aos="fade-up-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="farmer">
                <div className="shadow rounded height_farmer p-5">
                  <div className="text-center mb-3">
                    <img src={farmer} width={100} height={100} />
                  </div>
                  <h4 className="my-4 empp text-center">
                    Benefits For Farmers
                  </h4>
                  <ul className="list-unstyled">
                    <li className="benefits_list my-2 our text-grey">
                      Farmers get financial, technological, and efficient market
                      support.
                    </li>
                    <li className="benefits_list my-2 our text-grey">
                      Farmers can earn additional income.
                    </li>
                    <li className="benefits_list my-2  our  text-grey">
                      For better yield and crop production, farmers will have
                      standard processes and guidance from AllCanFarm.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 mt-3"
              data-aos="fade-up-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="angel_farmer ">
                <div className="shadow rounded height_farmer p-5">
                  <div className="text-center mb-3">
                    <img src={angelfarmer} width={100} height={100} />
                  </div>
                  <h4 className="my-4 emp text-center">
                    Benefits For Angel Farmers
                  </h4>
                  <ul className="list-unstyled">
                    <li className="benefits_list my-2  our text-grey">
                      Angel Farmers can reduce their carbon footprints.
                    </li>
                    <li className="benefits_list my-2 our text-grey">
                      Angel Farmers can find a marketplace for produce.
                    </li>
                    <li className="benefits_list my-2  our text-grey">
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

      <div className="background_farmer__angel ">
        <div className="container mt-3 pt-2">
          <div className="row mt-5">
            {/* <div
              className="col-sm-6 ms-4 text-center"
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-delay="20"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="upper_div rounded shadow">
                <img
                  src={green_field}
                  width="100%"
                  height="100%"
                  className="rounded process_hover "
                />
              </div>
            </div> */}
            {/* <div className="col-sm">
              <div className="row">
                <div className="col-sm-10 m-auto">
                  <div
                    className="mt-2"
                    data-aos="fade-left"
                    data-aos-offset="150"
                    data-aos-delay="20"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    <h6 className=" backbone"> Why work with</h6>
                    <h3 className="text-primary farmm"> AllCanFarm?</h3>
                    <p className="text-justify text-grey mt-3">
                      AllCanFarm is a collaborative relationship between farmers
                      and angel farmers, which provides many reasons to work
                      with us.
                    </p>
                    <p className="text-justify  text-grey farmmer">
                      <ul className="list-unstyled mt-3">
                        <li className="benefits_list my-2 our text-grey">
                          Adopt farms, trees, and crops.
                        </li>
                        <li className="benefits_list my-2 our text-grey">
                          Use of technology and online methods to see farm
                          progress.
                        </li>
                        <li className="benefits_list my-2 our text-grey">
                          Option to stay at the farm.
                        </li>
                        <li className="benefits_list my-2 our text-grey">
                          Produce can be listed on marketplaces such as Maati.
                        </li>
                        <li className="benefits_list my-2 our text-grey">
                          From logistics to packaging to distribution,
                          everything is under one roof.
                        </li>
                        <li className="benefits_list my-2 our text-grey">
                          We have technology-backed processing facilities for
                          final consumables such as cold-pressed mustard oil,
                          turmeric powder, cumin powder, and much more.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="container my-2">
            <div className="row align-items-center">
              <div className="row">
                <div
                  className="col-sm-6 "
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="upper_div rounded shadow">
                    <img
                      src={green_field}
                      width="100%"
                      height="100%"
                      className="rounded process_hover "
                    />
                  </div>
                </div>

                <div
                  className="col-sm-6 px-5"
                  data-aos="fade-right"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <h6 className=" backbone whywork"> Why work with</h6>
                  <h3 className="text-primary farmm"> AllCanFarm?</h3>
                  <p className="text-justify text-grey mt-3">
                    AllCanFarm is a collaborative relationship between farmers
                    and angel farmers, which provides many reasons to work with
                    us.
                  </p>
                  <p className="text-justify  text-grey farmmer">
                    <ul className="list-unstyled mt-3">
                      <li className="benefits_list my-2 our text-grey">
                        Adopt farms, trees, and crops.
                      </li>
                      <li className="benefits_list my-2 our text-grey">
                        Use of technology and online methods to see farm
                        progress.
                      </li>
                      <li className="benefits_list my-2 our text-grey">
                        Option to stay at the farm.
                      </li>
                      <li className="benefits_list my-2 our text-grey">
                        Produce can be listed on marketplaces such as Maati.
                      </li>
                      <li className="benefits_list my-2 our text-grey">
                        From logistics to packaging to distribution, everything
                        is under one roof.
                      </li>
                      <li className="benefits_list my-2 our text-grey">
                        We have technology-backed processing facilities for
                        final consumables such as cold-pressed mustard oil,
                        turmeric powder, cumin powder, and much more.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-5 p-2">
              <h6 className=" backbone text-center mt-4">Farm</h6>
              <h3 className="text-primary farmm text-center"> Adoption Plans</h3>
              <p className="text-justify text-center text-grey mt-3">
                We have curated farm adoption plans for angel farmers.
              </p>

              <div className="col-sm-4">
                <div
                  className="mt-4 mx-5"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-delay="20"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="flip-card ">
                    <div className="inner">
                      <div className="front">
                        <div className="termbg">
                          <div className="termbgov ">
                            <img src={short}  className="long mt-5"/>
                            <h4 className="term mt-4">Short Term Plan</h4>
                            <p className="years ">(2-3 Years)</p>
                          </div>
                          {/* <img
                  src={field}
                  width="100%"
                  height="100%"
                  className="rounded process_hover"
                /> */}
                        </div>
                      </div>

                      <div className="back">
                        <ul className="list-unstyled mt-5">
                          <li className="short  my-2 text-white ">
                          <TbPlant className="crop me-2"/>
                            2 crops or plants
                          </li>
                          <li className="short my-2 text-white ">
                          <TbPlant className="crop me-2"/>
                            1-3 YOY Returns
                          </li>
                          <li className="short my-2 text-white ">
                          <TbPlant className="crop me-2"/>
                            15% YOY Returns
                          </li>
                          <li className="short my-2 text-white ">
                          <TbPlant className="crop me-2"/>
                            Investment Protection
                          </li>
                          <li className="short my-2 text-white ">
                          <TbPlant className="crop me-2"/>
                            Low Risk Investment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div
                  className="mt-4 mx-5"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-delay="20"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="flip-card">
                    <div className="inner">
                      <div className="front">
                        <div className="termbg">
                          <div className="termbgov">
                            <img src={mid}  className="long mt-5"/>
                            <h4 className="term mt-4 text-center">
                              Mid Term Plan
                            </h4>
                              <p className="years mt-2">(4-7 Years)</p>
                          </div>
                        </div>
                      </div>

                      <div className="back">
                        <ul className="list-unstyled mt-5">
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            3 crops or plants
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            1-7 YOY Returns
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            25% YOY Returns
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            Investment Protection
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            Low Risk Investment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div
                  className="mt-4 mx-5"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-delay="20"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="flip-card">
                    <div className="inner">
                      <div className="front">
                        <div className="termbg">
                          <div className="termbgov">
                            <img src={long} className= "long mt-5"/>
                            <h4 className="term mt-4 text-center">
                              Long Term Plan
                            </h4>
                              <p className="years mt-2">(8-15 Years)</p>
                          </div>
                        </div>
                      </div>

                      <div className="back">
                        <ul className="list-unstyled mt-5">
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            4 crops or plants
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            1-15 YOY Returns
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            35% YOY Returns
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            Investment Protection
                          </li>
                          <li className="short  my-2 text-white">
                          <TbPlant className="crop me-2"/>
                            Low Risk Investment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row align-items-center">
          {/* <h3 className="text-center farmm mt-3">Common Questions</h3> */}
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
            {/* <h3 className="text-left farmm mb-2">Common Questions</h3> */}
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
          > <h3 className="text-left text-primary farmm mb-3">Common Questions</h3>
            <Accordion transition={{ duration: "1000ms" }}>
              {data.faq.map((val, i) => (
                <AccordionItem key={i}>
                  {({ open }) => (
                    <>
                    
                      <AccordionHeader className="accordion_head">
                        {val.title} {!open ? <FaPlus  className="" /> : <FaMinus  className=""/>}
                      </AccordionHeader>
                      <AccordionBody
                        className={`${
                          open ? "accordion_body " : "accordion_body"
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
