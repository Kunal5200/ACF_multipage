import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assests/images/acflogo.png";
const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <FloatingWhatsApp
        phoneNumber="+918789018311"
        accountName="ALLCANFARM"
        avatar={logo}
        chatMessage="Hello"
      />
    </div>
  );
};

export default Whatsapp;
