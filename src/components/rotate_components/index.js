import React from "react";
import "./index.css";
const Rotate = (props) => {
  return (
    // <div className={props.className}>
    //   <div className="circle">
    //     <div className="border">
    //       <div className="content">
    //         <h4>{props.heading}</h4>
    //         <p className="text-justify">{props.desc}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class={`${props.className} circle`}>
      <div class="border"></div>
      <div class="stop">
        <h4 className={props.para}>{props.heading}</h4>
        <p className="text-justify px-4">{props.desc}</p>
      </div>
    </div>
  );
};

export default Rotate;
