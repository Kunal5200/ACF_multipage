import React from "react";
import './index.css';
import Carousel from "react-multi-carousel";

const Productcard = (props) => {
  // console.log(props);
  return (
    <div>

      <div className="bbb border p-4 rounded product"  >
        <img src={props.img} className="img animate__animated  animate__pulse" />
        {/* <h6 className="heaad mt-3 backbone text-primary">{props.heading}</h6> */}
      </div>



    </div>
  );
};

export default Productcard;





