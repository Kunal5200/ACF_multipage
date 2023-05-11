import React from "react";
import "./index.css";
import Aos from "aos";
import image1 from "../../assests/images/banner/indian_farmer_1.webp";
import image2 from "../../assests/images/banner/indian_farmer_plowing_files_1.webp";
import image3 from "../../assests/images/banner/young_farmer.webp";
import angel1 from "../../assests/images/banner/angel_farmer1.webp";
import angel2 from "../../assests/images/banner/angel_farmer2.webp";
import angel3 from "../../assests/images/banner/angel_farmer3.webp";
import farmer from "../../assests/images/banner/farmer.png";
import angelfarmer from "../../assests/images/banner/farmer01.png";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import organic from "../../assests/images/organic.jpg";
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
            <div className="col-sm-10 m-auto">
              <h5 className="my-4 ">
                In India, 70% of the population depends on agriculture, and
                AllCanFarm is working with the farmers and for the farmers
              </h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-sm-5 col-md-6"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <p className="text-primary mb-0 ms-3">Lorem</p>
              <h4 className="f-30 ms-3">Farmers</h4>
              <p className="text-justify p-3 text-grey">
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
                  className="ms-3"
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
                  data-aos-anchor-placement="top-center"
                >
                  <div
                    style={{ overflow: "hidden", position: "relative" }}
                    className="rounded h-100"
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
                      data-aos-anchor-placement="top-center"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded"
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
                      data-aos-anchor-placement="top-center"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded"
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
                  data-aos-anchor-placement="top-center"
                >
                  <div
                    style={{ position: "relative", overflow: "hidden" }}
                    className="rounded h-100"
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
                      data-aos-anchor-placement="top-center"
                    >
                      <div
                        style={{ position: "relative", overflow: "hidden" }}
                        className="rounded"
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
                      data-aos-anchor-placement="top-center"
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
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <p className="text-primary mb-0 ms-3">Lorem</p>
              <h4 className="f-30 ms-3">Angel Farmers</h4>
              <p className="text-justify p-3 text-grey">
                When an angel investor turns their attention to farming, magic
                can happen. Thus, they are known as Angel Farmers. These
                visionary investors see the potential in the agricultural
                industry to not only feed the world but also to shape the future
                of sustainable food production. With their financial support and
                expertise, they can help farmers scale up their operations,
                adopt cutting-edge technologies, and find new ways to reduce
                waste and improve yields and crop production.
              </p>
              <Link to="/about">
                <Button
                  bg="#36Ba24"
                  border="2px solid #36BA24"
                  color="#ffffff"
                  padding="8px"
                  rounded="8px"
                  className="ms-3"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="benefits_farmer">
        <div className="bg-benefits_overlay">
          <div className="container">
            <div
              className="row"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="col-sm-12 m-auto mb-4">
                <h6 className="">
                  AllCanFarm believes in people, technology, and knowledge to
                  guide the millions of farmers towards quality produce. The
                  AllCanFarm platform brings farmers and angel farmers together
                  for a sustainable food future.
                </h6>
              </div>
            </div>
            <div
              className="row benefits_header"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="col-sm-6 border p-3">
                <h4 className="mb-0 center">Benefits of Farmer</h4>
                <hr style={{ width: "100%",color:"#ffffff" }} />
                <ul className="list-unstyled text-justify">
                  <li className="text-justify list">
                    Farmers get financial, technological, and efficient market
                    support.
                  </li>
                  <li className="text-justify list">
                    Farmers can earn additional income.
                  </li>
                  <li className="text-justify list">
                    For better yield and crop production, farmers will have
                    standard processes and guidance from AllCanFarm.
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 border p-3">
                <h4 className="mb-0  center">Benefits of Angel Farmer</h4>
                <hr />
                <ul className="list-unstyled">
                  <li className="text-justify list">
                    Angel Farmers can reduce their carbon footprints.
                  </li>
                  <li className="text-justify list">
                    Angel Farmers will have a proper living facility at the
                    farms with all the required amenities, including Wi-Fi.
                  </li>
                  <li className="text-justify list">
                    Angel Farmers can find a marketplace for produce.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="farmer_angelfarmer ">
        <div className="container my-7">
          <div className="row">
            <h4 className="mb-4 text-center">
              Empowering sustainable agriculture for a greener tomorrow
            </h4>
            <div
              className="col-sm-6"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="farmer p-3">
                <div className="shadow rounded height_farmer p-5">
                  <div className="text-center mb-3">
                    <img src={farmer} width={100} height={100} />
                  </div>
                  <h4 className="my-4">Benefits For Farmer</h4>
                  <ul className="list-unstyled">
                    <li className="benefits_list my-2 text-justify ">
                      Farmers get financial, technological, and efficient market
                      support.
                    </li>
                    <li className="benefits_list my-2 text-justify ">
                      Farmers can earn additional income.
                    </li>
                    <li className="benefits_list my-2 text-justify ">
                      For better yield and crop production, farmers will have
                      standard processes and guidance from AllCanFarm.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="angel_farmer p-3">
                <div className="shadow rounded height_farmer p-5">
                  <div className="text-center mb-3">
                    <img src={angelfarmer} width={100} height={100} />
                  </div>
                  <h4 className="my-4">Benefits For Angel Farmers</h4>
                  <ul className="list-unstyled">
                    <li className="benefits_list my-2 text-justify ">
                      Angel Farmers can reduce their carbon footprints.
                    </li>
                    <li className="benefits_list my-2 text-justify ">
                      Angel Farmers will have a proper living facility at the
                      farms with all the required amenities, including Wi-Fi.
                    </li>
                    <li className="benefits_list my-2  text-justify">
                      Angel Farmers can find a marketplace for produce.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="request_query">
        <div className="contact">
          <div className="container-fluid bg-grey bg_contact">
            <div className="row">
              <div className="col-sm-7 col-md-7 p-5">
                <div className="bg-light shadow p-5">
                  <form>
                    <h5 className="text-primary my-4">HAVE QUESTIONS?</h5>
                    <h2 className="my-3">Send us a Message</h2>
                    <div className="row my-4">
                      <div className="col-sm-12">
                        <Input
                          type="text"
                          placeholder="Name*"
                          id="name"
                          width="100%"
                          padding="10px"
                          border="none"
                          bg="#eff2f5"
                          className="contact_input"
                          rounded="8px"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-sm-6">
                        <Input
                          type="email"
                          placeholder="Email*"
                          id="email"
                          width="100%"
                          padding="10px"
                          border="none"
                          bg="#eff2f5"
                          className="contact_input"
                          rounded="8px"
                        />
                      </div>
                      <div className="col-sm-6">
                        <Input
                          type="number"
                          placeholder="Number*"
                          id="email"
                          width="100%"
                          padding="10px"
                          border="none"
                          bg="#eff2f5"
                          className="contact_input"
                          rounded="8px"
                        />
                      </div>
                    </div>
                    <div className=" row my-4">
                      <div className="col-sm-12 ">
                        <textarea
                          className="contact_input message_input "
                          placeholder="Message*"
                          id="message"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-sm-12 text-center">
                        <Button
                          bg="#36BA24"
                          border="2px solid #36BA24"
                          rounded="8px"
                          padding="8px"
                          color="#ffffff"
                          width="200px"
                        >
                          Submit
                          <BsFillSendFill className="ms-2" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-5 col-md-5 p-5">
                <h1>Contact Information</h1>
                <p>
                  Got a question or suggestion? We'd love to hear from you! Get
                  in touch with us.
                </p>
                <div className="d-flex align-items-center justify-content-start ">
                  <div className="footer_icons">
                    <BsFillTelephoneFill />
                  </div>
                  <div className="ms-4">
                    <h4>Mobile</h4>
                    <p className="mb-0">+91 1234567890</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start my-5">
                  <div className="footer_icons">
                    <MdLocationOn />
                  </div>
                  <div className="ms-4">
                    <h4>Our Location</h4>
                    <p className="mb-0">Ashiana Nagar Phase 1, Patna 700136</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start my-4">
                  <div className="footer_icons">
                    <AiFillMail />
                  </div>
                  <div className="ms-4">
                    <h4>Official Mail</h4>
                    <p className="mb-0">prashant@avigna.biz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid my-7">
        <h3 className="text-center my-4">Common Questions</h3>
        <div className="row">
          <div
            className="col-sm-5"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={organic} width="100%" />
          </div>
          <div
            className="col-sm-7"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
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
