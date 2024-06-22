import React, { useEffect } from "react";
import github from "../../assets/icons/github.png";
import linkedIn from "../../assets/icons/linkedin.png";
import sr from "../ScrollReveal";
import "./home.scss";
import Ripple from "../magicui/ripple";

function Home() {
	useEffect(() => {
		sr.reveal(".dp", { delay: "100" });
		sr.reveal(".home-title", { delay: "150" });
		sr.reveal(".icon", { delay: "250" });
	}, []);

	return (
		<div className="home">
			<Ripple />
			<div className="intro">
				<div className="home-title">
					<h1> HELLO , AMIGOS </h1>
					<h2>
						I'M <span>SATYA SURENDRA</span>
					</h2>
					<h4>
						WEB-DEVELOPER <span>|</span> WEB-DESIGNER
					</h4>
				</div>
				<div>
					<ul>
						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/satya-surendra/">
								{" "}
								<img src={linkedIn} alt="linkedin" />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.github.com/satya-hash/">
								{" "}
								<img src={github} alt="github" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Home;
