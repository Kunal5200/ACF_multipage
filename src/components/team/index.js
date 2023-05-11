import React from "react";
import './index.css'
const Team = (props) => {
  return (
    <div>
      <div class="demo">
        <figure class="imghvr-zoom-out-flip-vert rounded ">
          <img src={props.img} alt="example-image" height={400} />
          <figcaption>
            <h3 className="text-center lh-base">{props.name}</h3>
            <p className="text-center position lh-base fw-semibold mb-3">
              {props.position}
            </p>
            <p className="desc text-justify f-13">{props.desc}</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
    </div>
  );
};

export default Team;
