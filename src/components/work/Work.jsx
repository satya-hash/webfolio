import React, { useEffect } from "react";
import "./work.scss";
import shoemineImg from "../../assets/shoemine.png";
import smsImg from "../../assets/sms.png";
import onestopImg from "../../assets/1stop.png";
import fitfusionImg from "../../assets/fit-fusion.png";
import codingNoteImg from "../../assets/coding-note.png";
import web from "../../assets/icons/icons8-website-64.png";
import code from "../../assets/icons/icons8-code-90.png";
import sr from "../ScrollReveal";

function Work() {
	function __html(htmlString) {
		return { __html: htmlString };
	}
	let projects = [
		{
			name: "Coding Note",
			description: `Coding Note is your go-to resource for front-end development insights and problem-solving. This blog offers concise, practical content tailored for developers aiming to enhance their skills. Whether you're tackling a coding challenge or refining your design approach, Coding Note provides the tools and knowledge to succeed. Dive in and elevate your development journey.`,
			links: [
				`https://codingnote.vercel.app/`,
				`https://github.com/satya-hash/coding-note`,
			],
			image: codingNoteImg,
			svgs: ["Next js", "Shadcn", "Tailwind css"],
		},
		{
			name: "Shoemine",
			svgs: ["react js ", "material ui", "stripte", "commerce js"],
			description: `Shoemine is an e-commerce website that has been developed using React JS library for building a seamless user interface. The website's aesthetic appeal is further enhanced with the use of MUI for styling purposes. Commerce JS has been employed for displaying products, while Stripe has been used for secure payment processing. Overall, this professional project has been developed with a focus on providing a smooth and secure e-commerce experience to its users.`,
			links: [
				"https://shoemine-store.netlify.app/",
				"https://github.com/satya-hash/ShoeMine-store",
			],
			image: shoemineImg,
		},
		{
			name: "Student Management System",
			svgs: ["react js", "firebase"],
			description: `The Student Management System is a web portal developed using ReactJS and Firebase, designed to provide students of Andhra University with access to their academic results, attendance records, and personal details. Administrators can use the system to manage and update student information, academic results, and attendance records. Firebase is utilized to manage user authentication and data retrieval.`,
			links: [
				"https://au-portal.netlify.app/	",
				"https://github.com/satya-hash/Project-4.2",
			],
			image: smsImg,
		},
		{
			name: "1Stop",
			svgs: ["html", "css", "java script", "tailwind css"],
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
			svgs: ["vite", "rapid API", "material ui"],
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
								<p>{description}</p>
								<h4 className="text-base">Skills</h4>
								<ul>
									{svgs.map((svg, i) => (
										<li key={i}>
											{" "}
											<span>
												{svg}
											</span>
										</li>
									))}
								</ul>
								<div className="btns">
									<button
										onClick={() => {
											window.open(`${links[0]}`, "_blank");
										}}>
										{" "}
										<img src={web} alt="web" /> <span>Live Demo</span>
									</button>
									<button
										onClick={() => {
											window.open(`${links[1]}`, "_blank");
										}}>
										{" "}
										<img src={code} alt="code" /> <span >Code</span>
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
