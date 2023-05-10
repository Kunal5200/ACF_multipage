import React from "react";
import "./index.css";
import image from '../../assests/images/banner/green_field.webp'
const Marketplace = () => {
  return (
    <div>
      <div className="bg_maati">
        <div className="overlay">
          <h2>Maati</h2>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-12">
            <h4>What is Dhur Maati</h4>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h4>Lorem</h4>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="upper_div rounded shadow">
                <img src={image}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
