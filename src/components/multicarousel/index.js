import React from "react";
import Carousel from "react-multi-carousel";
import Productcard from "../products";
import { useNavigate } from "react-router-dom";
// import "./index.css";
const Multislider = (props) => {
    let navigate = useNavigate();
    let clickHandler = (val) => {
        console.log("product",val);
        navigate(`/productview/${val.heading}`, { state: val })
        window.scrollTo(0,0);
      }
    return (
        <div >
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
                  
               
                  <a href={
                        `/productview/${val.heading}`} className="anchor" onClick={()=>{clickHandler(val)}}>

                    <Productcard img={val.img} heading={val.heading}

desc={val.description}  />
</a>

                ))}

            </Carousel>
        </div>
    );
};

export default Multislider;

