import React from "react";
import Carousel from "react-multi-carousel";
import Productcard from "../products";
import { useNavigate } from "react-router-dom";
// import "./index.css";
const Multislider = (props) => {
  let navigate = useNavigate();
  let clickHandler = (val) => {
    console.log("", val);
    navigate(`/productview/${val.url}`,{ state: val });
    window.scrollTo({ top: 500, behavior: "smooth" });
  };
  return (
    <div>
      <Carousel
        responsive={props.responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1490}
        showDots={false}
        centerMode={props.centermode}
        arrows={true}
        partialVisible
      >
        {props.data.map((val) => (
          //   <a href={
          //         `/productview/${val.heading}`} className="anchor"
          <div
            onClick={() => {
              clickHandler(val);
            }}
          >
            <Productcard
              img={val.img}
              heading={val.heading}
              desc={val.description}
            />
          </div>
          // </a>
        ))}
      </Carousel>
    </div>
  );
};

export default Multislider;
