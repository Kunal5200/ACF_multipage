import { useState } from "react";
import "./index.css";
// import logo from "./img/logo.png";
import logo from "../../assests/images/AllCanFarmLogo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [isOpen, setIsOpen] = useState(false);
  let links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "allcanfarm",
      url: "/allcanfarm",
    },
    {
      name: "maati",
      url: "/maati",
    },

    {
      name: "contact",
      url: "/contact",
    },
  ];
  return (
    <div className="home shadow p-2" id="Home">
      <div className="home__bg">
        <div className="header Navbar">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
          <div className={`nav-items ${isOpen && "open"}`}>
            {links.map((val) => (
              <NavLink className="link text-uppercase" to={val.url}>
                {val.name}
              </NavLink>
            ))}
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
