import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assests/images/acflogo.png";
const Whatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+918789018311"
        accountName="ALLCANFARM"
        avatar={logo}
        chatMessage="hello"
      />
    </div>
  );
};

export default Whatsapp;
