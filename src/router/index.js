import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../views/home";
import Footer from "../components/footer";
import Scrollup from "../components/scrollup";
import Scrolltotop from "../components/scrolltotop";
import ACF from "../views/acf";
import About from "../views/about";
import Marketplace from "../views/maati";
import Contact from "../views/contact";
import Whatsapp from "../components/whatsapp";
import Productview from "../views/product";
import Subfooter from "../components/subfooter";
import TermsConditions from "../components/Termconditon";
import PrivacyPolicy from "../components/privacypolicy";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Whatsapp />
      <Scrolltotop />
      <Scrollup />
      <Routes>
        <Route exact path="/" element={<Home />} />\
        <Route exact path="/about" element={<About />} />
        <Route exact path="/allcanfarm" element={<ACF />} />
        <Route exact path="/maati" element={<Marketplace />} />
        <Route exact path="/productview/:name" element={<Productview />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/TermsConditions" element={<TermsConditions/>}/>
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      </Routes>
      <Footer />
      <Subfooter/>
    </BrowserRouter>
  );
};

export default Router;
