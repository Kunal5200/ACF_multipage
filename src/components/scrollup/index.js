import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
const Scrollup = () => {
  let [show, setShow] = useState(false);

  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.pageYOffset > 50));
  });
  return (
    <div>
      <span
        style={{
          position: "fixed",
          bottom: 280,
          right: 30,
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
          zIndex: 999,
        }}
        onClick={scrolltotop}
      >
        {show ? (
          <div
            style={{
              width: "58px",
              height: "58px",
              background: "#36BA24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "29px",
              marginLeft:"-61px",
              borderRadius: "50%",
            }}
          >
            <BsArrowUp />
          </div>
        ) : (
          <div></div>
        )}
      </span>
    </div>
  );
};

export default Scrollup;
