import { useEffect } from "react";
import "./work.css";

import shoemineImg from "../../assets/shoemine.png";
import smsImg from "../../assets/sms.png";
import onestopImg from "../../assets/1stop.png";
import fitfusionImg from "../../assets/fit-fusion.png";

import rapidSvg from "../../assets/icons/api.png";
import htmlSvg from "../../assets/icons/icons8-html-5-144.png";
import cssSvg from "../../assets/icons/icons8-css3-144.png";
import jsSvg from "../../assets/icons/icons8-javascript-144.png";
import tailwindSvg from "../../assets/icons/icons8-tailwindcss-144.png";
import firebaseSvg from "../../assets/icons/firebase.png";
import reactSvg from "../../assets/icons/icons8-react-native-144.png";
import viteSvg from "../../assets/icons/Vite.js.png";
import muiSvg from "../../assets/icons/icons8-material-ui-144.png";
import stripeSvg from "../../assets/icons/stripe.png";

import web from "../../assets/icons/icons8-website-64.png";
import code from "../../assets/icons/icons8-code-90.png";
import sr from "../ScrollReveal";

function Work() {
  let projects = [
    {
      name: "Shoemine",
      svgs: [reactSvg, muiSvg, stripeSvg],
      description: `Shoemine is an e-commerce website that has been developed using React JS library for building a seamless user interface. The website's aesthetic appeal is further enhanced with the use of MUI for styling purposes. Commerce JS has been employed for displaying products, while Stripe has been used for secure payment processing. Overall, this professional project has been developed with a focus on providing a smooth and secure e-commerce experience to its users.`,
      links: [
        "https://shoemine-store.netlify.app/",
        "https://github.com/satya-hash/ShoeMine-store",
      ],
      image: shoemineImg,
    },
    {
      name: "Student Management System",
      svgs: [reactSvg, firebaseSvg],
      description: `The Student Management System is a web portal developed using ReactJS and Firebase, designed to provide students of Andhra University with access to their academic results, attendance records, and personal details. Administrators can use the system to manage and update student information, academic results, and attendance records. Firebase is utilized to manage user authentication and data retrieval.`,
      links: [
        "https://heroic-kangaroo-435e13.netlify.app/",
        "https://github.com/satya-hash/Project-4.2",
      ],
      image: smsImg,
    },
    {
      name: "1Stop",
      svgs: [htmlSvg, cssSvg, jsSvg, tailwindSvg],
      description: `As my first major undertaking outside of smaller projects such as landing pages and calculators, I worked on this project as part of a paid internship. During the program, I received guidance on the use of HTML, CSS, and JavaScript. However, due to scheduling conflicts with my semester exams, I was unable to complete the internship, and as a result, the website's functionality remains unfinished. Despite this, I am pleased with the quality of the UI design and hope that you find it to your liking. `,
      links: [
        "https://inspiring-bunny-b6fb0e.netlify.app/",
        "https://github.com/satya-hash/Website",
      ],
      image: onestopImg,
    },
    {
      name: "Fit Fusion",
      description: `FitFusion is a user-friendly fitness app designed to simplify and enhance your fitness journey. With a variety of workout programs, expert guidance, and a supportive community, FitFusion is the ultimate companion for achieving your fitness goals. Whether you're a beginner or a seasoned athlete, FitFusion provides a seamless and personalized fitness experience, helping you stay motivated, track progress, and transform your body. Join FitFusion today and unlock a world of fitness possibilities.`,
      links: [
        `https://fit-fusion-transform.netlify.app/`,
        `https://github.com/satya-hash/fit-fusion`,
      ],
      image: fitfusionImg,
      svgs: [viteSvg, rapidSvg, muiSvg],
    },
  ];

  useEffect(() => {
    sr.reveal(".image", { delay: "100", origin: "top" });
    sr.reveal(".description", { delay: "200", origin: "bottom" });
  }, []);

  return (
    <div className="work">
      <h3> Work </h3>
      <div className="projects">
        {projects.map((project, i) => {
          let { name, svgs, description, links, image } = project;
          return (
            <div key={i} className="item">
              <a href={links[0]}>
                {" "}
                <img
                  className="image"
                  loading="lazy"
                  src={image}
                  alt="p1"
                />{" "}
              </a>
              <div className="description">
                <h3>{name}:</h3>
                <ul>
                  {svgs.map((svg, i) => (
                    <li key={i} style={{ width: "30px" }}>
                      {" "}
                      <img
                        loading="lazy"
                        src={svg}
                        alt={i}
                        width="100%"
                        style={{ objectFit: "cover" }}
                      />{" "}
                    </li>
                  ))}
                </ul>
                <p>{description}</p>
                <div className="btns">
                  <button
                    onClick={() => {
                      window.open(`${links[0]}`, "_blank");
                    }}
                  >
                    {" "}
                    <img src={web} alt="web" /> Website
                  </button>
                  <button
                    onClick={() => {
                      window.open(`${links[1]}`, "_blank");
                    }}
                  >
                    {" "}
                    <img src={code} alt="code" /> Code
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
