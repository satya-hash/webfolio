/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import htmlSvg from "../../assets/icons/icons8-html-5-144.png";
import cssSvg from "../../assets/icons/icons8-css3-144.png";
import jsSvg from "../../assets/icons/icons8-javascript-144.png";
import reactSvg from "../../assets/icons/icons8-react-native-144.png";
import sassSvg from "../../assets/icons/icons8-sass-144.png";
import nodeSvg from "../../assets/icons/icons8-nodejs-144.png";
import gitSvg from "../../assets/icons/icons8-git-144.png";
import cSvg from "../../assets/icons/icons8-c++-144.png";
import figmaSvg from "../../assets/icons/figma.png";
import firebaseSvg from "../../assets/icons/firebase.png";
import tailwindSvg from "../../assets/icons/icons8-tailwindcss-144.png";
import nextjsSvg from "../../assets/icons/icons8-next.js-144.png";
import sr from "../ScrollReveal";

import "./skills.css";

function Skills() {
  let skills = [
    { img: htmlSvg, name: "HTML" },
    { img: cssSvg, name: "CSS" },
    { img: jsSvg, name: "JavaScript" },
    { img: sassSvg, name: "Sass" },
    { img: reactSvg, name: "React Js" },
    { img: nodeSvg, name: "Node Js" },
    { img: firebaseSvg, name: "Firebase" },
    { img: figmaSvg, name: "Figma" },
    { img: gitSvg, name: "Git" },
    { img: cSvg, name: "C++" },
    { img: tailwindSvg, name: "Tailwind CSS" },
    { img: nextjsSvg, name: "Next Js" },
  ];

  useEffect(() => {
    skills.forEach((skill, i) => {
      sr.reveal(`.icon-${i}`, { delay: `${i}00` });
    });
  }, []);
  return (
    <div className="skills">
      <h3> Skills </h3>
      <div className="skills-icons">
        <ul>
          {skills.map((skill, i) => {
            let { img, name } = skill;
            return (
              <li key={i}>
                <img
                  className={`icon-${i / 3}`}
                  src={img}
                  alt={name}
                  style={{ width: "80%" }}
                />
                <span> {name} </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
