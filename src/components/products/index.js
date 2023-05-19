import React from "react";
import './index.css';
const Productcard = (props) => {
  return (
    <div>
      <div className="border p-3 rounded product">
        <img src={props.img} className="img animate__animated  animate__pulse"/>
        <h6 className="heaad mt-3">{props.heading}</h6>
      </div>
    </div>
  );
};

export default Productcard;
