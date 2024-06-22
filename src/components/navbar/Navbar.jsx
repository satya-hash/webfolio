import React, { useState } from "react";
import sun from "../../assets/icons/icons8-sun-100.png";
import moon from "../../assets/icons/icons8-moon-100.png";
import "./navbar.scss";

function Navbar({ theme, setTheme }) {
  const [isopen, setIsopen] = useState(false);
  function handleOpen() {
    setIsopen(!isopen);
    document.querySelector(".nav-keys").classList.toggle("show");
    document.querySelector(".menu").classList.toggle("open");
  }

  function handleScroll(e) {
    let value = e.target.getAttribute("value");
    let ele = document.querySelector(`.${value}`);
    handleOpen();
    ele.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="sticky-nav">
      <div className="navbar">
        <div className="logo">
          <h4 className="">webfolio.</h4>
        </div>
        <div className="icons">
          <div
            className="theme-toggle"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "light" ? (
              <img src={sun} alt="" />
            ) : (
              <img src={moon} alt="" />
            )}
          </div>
          <div className="menu" onClick={handleOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="nav-keys">
        {" "}
        <ul className="">
          <li>
            <a onClick={handleScroll} value="home">
              Home
            </a>
          </li>
          <li>
            <a onClick={handleScroll} value="about">
              About
            </a>
          </li>
          <li>
            <a onClick={handleScroll} value="skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={handleScroll} value="work">
              Work
            </a>
          </li>
          <li>
            <a onClick={handleScroll} value="contact">
              Contact
            </a>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
}

export default Navbar;
