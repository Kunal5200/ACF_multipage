import React from "react";
import './index.css';
import Aos from "aos";
import { useLocation } from "react-router-dom";
import mustard from "../../assests/images/1.jpg";

const Productview= (props) => {
    let location = useLocation();
    console.log(location);
  Aos.init();
    return (
      <div>
          <div className="pro">
        <div className="bg-ACF">
          <h2 className="text-white animate__animated animate__bounceInDown">
            PRODUCT
          </h2>
        </div>
      </div>
      <div>{location.state.data}</div>
    
    
      <div className="container mt-5 pt-5" >
            <div className="row">
              <div className="col-sm-6">
              <div className="col-sm-10 m-auto">
                <div className="mt-4"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="20"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center">
                  <p className="text-primary fw-bold f-18 ls-6">
                  1.COLD PRESSED MUSTARD OIL</p>
                  <p className="text-justify">
                  Features:
-	Artificial flavour-free
-	Free of preservatives and additives
-	Natural, unrefined, and unadulterated
-	Gluten-free and vegan
-	Immune-benefiting components and antioxidants
-	Suitable for all age groups
-	Hygienic packaging
</p>
                
 </div>
 </div>
              </div>
              <div className="card col-sm-6  text-center"
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="20"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
                <img src={mustard} width="100%" height="70%"/>
              </div>
            </div>
          </div>



      </div>
    );
  };
  
  export default Productview;