import React from "react";
import Carousel from "react-multi-carousel";
import Productcard from "../products";
import { useNavigate } from "react-router-dom";
// import "./index.css";
const Multislider = (props) => {
    let navigate = useNavigate();
    let clickHandler = (val) => {
        console.log("fwfwefewf",val);
        navigate('/productview', { state: val })
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
                    <div onClick={()=>{clickHandler(val)}}>

                    <Productcard img={val.img} heading={val.heading}

desc={val.description}  />
</div>
                ))}

            </Carousel>
        </div>
    );
};

export default Multislider;
