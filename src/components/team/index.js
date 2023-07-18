import React from "react";
import './index.css'
const Team = (props) => {
  return (
    <div className="container">
      <div class="demo">
        <figure class="imghvr-zoom-out-flip-vert rounded ">
          <img src={props.img} alt="example-image" height={380} className="teamimg" />
          <figcaption>
            <h3 className="name text-center lh-base">{props.name}</h3>
            <p className=" position text-center lh-base fw-semibold mb-3">
              {props.position}
            </p>
            <p className="sasa">{props.desc}</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
    </div>
  );
};

export default Team;
 