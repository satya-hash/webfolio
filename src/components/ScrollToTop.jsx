import React, { useEffect, useState } from "react";
import top from "../assets/icons/icons8-send-letter-96.png";
function ScrollToTop() {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const toggleShow = () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);
    return () => {
      window.addEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    <>
      {show && (
        <button
          style={{
            position: "fixed",
            right: "30px",
            bottom: "30px",
            height: "50px",
            width: "50px",
            overflow: "hidden",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          {" "}
          <img src={top} alt="top" style={{ width: "100%" }} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
