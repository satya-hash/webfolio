import React, { useEffect } from "react";
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
import springSvg from "../../assets/icons/spring.png";
import protractorSvg from "../../assets/icons/protractor.png";
import playwrightSvg from "../../assets/icons/playwright.png";
import sr from "../ScrollReveal";

import "./skills.scss";

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
    { img: springSvg, name: "Spring Boot" },
    { img: protractorSvg, name: "Protractor" },
    { img: playwrightSvg, name: "PlayWright" },
  ];

  useEffect(() => {
    skills.forEach((skill, i) => {
      sr.reveal(`.icon-${i}`, { delay: `${i}00` });
    });
  }, []);
  return (
    <div className='skills'>
      <h3>My Skills </h3>
      <div className='skills-icons'>
        <div className='all-skills'>
          <div className='skills-full-stack'>
            <h5>Frontend Skills</h5>
            <div className='skills-frontend'>
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "DOM",
              ].map((skill) => (
                <button key={skill} className='skill_skill__oFitQ'>
                  {skill}
                </button>
              ))}
            </div>
            <div className='skills-backend'>
              {[
                "Node",
                "Express",
                "Rest Api",
                "Validation",
                "SQL",
                "Mongobd",
                "Stripe Payments",
              ].map((skill) => (
                <button key={skill} className='skill_skill__oFitQ'>
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5>Design Skills</h5>
            <div className='Skills_design__MYabM'>
              {["UX/UI Design", "Product Design", "Figma", "Wireframe"].map(
                (design) => (
                  <button key={design} className='skill_skill__oFitQ'>
                    {design}
                  </button>
                )
              )}
            </div>
          </div>
          <div>
            <h5>Additional Skills</h5>
            <div className='Skills_additional__0WdkS'>
              {["React Native", "Git", "GitHub", "Linux", "Vercel"].map(
                (additional) => (
                  <button key={additional} className='skill_skill__oFitQ'>
                    {additional}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
