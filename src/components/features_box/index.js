import React from "react";
import icon from "../../assests/images/marketplace.svg";
import './index.css'
const Featurebox = (props) => {
  return (
    <div>
      <div className="border p-3 rounded feature_box">
        <img src={props.img}  className="animate__animated  animate__pulse"/>
        <h6 className="mt-2">{props.heading}</h6>
        <p className="text-justify">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Featurebox;
