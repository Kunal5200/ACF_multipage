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

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Scrolltotop />
      <Scrollup />
      <Routes>
        <Route exact path="/" element={<Home />} />\
        <Route exact path="/about" element={<About />} />
        <Route exact path="/allcanfarm" element={<ACF />} />
        <Route exact path="/maati" element={<Marketplace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
