import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assests/images/acflogo.png";
const Whatsapp = () => {
  return (
    <div className="whatsapp
">
      <FloatingWhatsApp
      className="floatwhatsapp"
        phoneNumber="+918420170040"
        accountName="ALLCANFARM"
        avatar={logo}
        chatMessage="Hiya! Welcome to AllCanFarm. We will get back to you within 1–2 hours. In the meantime, check out the services that we offer."
      />
    </div>
  );
};

export default Whatsapp;
