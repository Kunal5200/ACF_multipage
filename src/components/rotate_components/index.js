import React from "react";
import "./index.css";
const Rotate = (props) => {
  return (
    <div className={props.className}>
      <div className="circle"></div>
      <div className="desc_rotate ">
        <h4>{props.heading}</h4>
        <p className="text-justify">{props.desc}</p>
      </div>
    </div>
  );
};

export default Rotate;
