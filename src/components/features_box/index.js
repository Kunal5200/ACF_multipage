import React from "react";
import icon from "../../assests/images/marketplace.svg";
import './index.css'
const Featurebox = (props) => {
  return (
    <div>
      <div className="bbb border p-3 rounded feature_box">
        <img src={props.img} width={50} height={50}  className="animate__animated  animate__pulse"/>
        <h6 className="mt-2 emp text-primary">{props.heading}</h6>
        <p className="text-justify text-grey">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Featurebox;
