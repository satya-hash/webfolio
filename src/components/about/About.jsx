import React, { useEffect } from "react";
import dp from "../../assets/satya.jpg";
import sr from "../ScrollReveal";
import "./about.scss";

function About() {
    function handleScroll(e) {
        let value = e.target.getAttribute("value");
        let ele = document.querySelector(`.${value}`);
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  useEffect(() => {
    sr.reveal(".image", { delay: "100" });
    sr.reveal(".details", { delay: "150" });
  }, []);
  return (
    <div className="about">
      <h3> About </h3>
      <div className="intro">
        <div className="dp">
          <img className="image" loading="lazy" src={dp} alt="dp" />
        </div>
        <div className="details">
          <h2>
            I'm <span>Satya</span>{" "}
          </h2>
          <p>
          Hi, I’m Pitani Satya Surendra, a passionate software engineer with a keen focus on front-end development and problem-solving. I graduated with a Bachelor of Technology in Computer Science and Engineering from Andhra University in 2023, and since then, I’ve been on a continuous journey of learning and creating.
          <br />

Currently, I’m working at ADP as a Member Technical, where I’ve gained hands-on experience in both development and testing roles. My expertise spans across modern web technologies like React.js, Next.js, HTML, CSS, and JavaScript, and I’ve contributed to building dynamic web applications with a focus on user experience, performance, and code quality.
<br />
I love diving into new challenges, whether it's writing efficient test cases, developing robust web solutions, or collaborating with cross-functional teams. My goal is to continue honing my skills while making an impact through clean, scalable, and innovative solutions.

Feel free to browse my portfolio and reach out if you’d like to collaborate or discuss exciting projects!
          </p>
          <button value='contact'  onClick={handleScroll}> Contact </button>
        </div>
      </div>
    </div>
  );
}

export default About;
