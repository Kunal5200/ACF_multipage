import React from "react";
import "./index.css";
const Rotate = (props) => {
  return (
    <div className="main_border">
      <div
        class={`${props.className} circle m-auto`}
        data-aos={props.aos}
        data-aos-offset={props.offset}
        data-aos-delay={props.delay}
        data-aos-duration={props.duration}
        data-aos-easing={props.easing}
        data-aos-mirror={props.mirror}
        data-aos-once={props.once}
        data-aos-anchor-placement={props.placement}
      >
        <div class="border"></div>
        <div class="stop text-center">
          <h4 className={props.para}>{props.heading}</h4>
         
        </div>
      
      </div>
      {/* <div className="desc">
        <p className="text-justify text-grey px-4">{props.desc}</p>
      </div> */}
      <div className="desc">
        <p className="text-justify text-grey px-4 f-13">{props.desc}</p>
      </div>
    </div>
  );
};

export default Rotate;
