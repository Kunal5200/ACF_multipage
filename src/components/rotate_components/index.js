import React from "react";
import "./index.css";
const Rotate = (props) => {
  return (
    <div
      class={`${props.className} circle`}
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
      <div class="stop">
        <h4 className={props.para}>{props.heading}</h4>
        <p className="text-justify px-4">{props.desc}</p>
      </div>
    </div>
  );
};

export default Rotate;
