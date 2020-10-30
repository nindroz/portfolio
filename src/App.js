import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";
import { endpoint, gqlQuery, dummyProject } from "./gql.js";
import LocomotiveScroll from "locomotive-scroll";
import Project from "./Project.js";
import Icons from "./Icons.js";
import "./styling/App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const scroll = new LocomotiveScroll({
			el: document.querySelector("[data-scroll-container]"),
			smooth: true,
		});
		endpoint().then((ret) => {
			this.setState({
				...ret.props.projects,
			});
			console.log(this.state);
		});
	}
	render() {
		return (
			<div className="App">
				<div data-scroll-container>
					{/* <ScrollTrigger id="main">
					<Link
						activeClass="active"
						to="aboutMe"
						spy={true}
						smooth={true}
						offset={100}
						duration={500}
					>
						Hey
					</Link> */}
					<div className="swoosh"></div>
					<div data-scroll-section>
						<Icons />
						<h1 className="title">
							<span style={{ color: "white" }}>Hi I'm</span>
							<br />
							Hitesh Mantha
						</h1>
						<div id="projects">
							{Object.values(this.state).map((data, key) => {
								return (
									<Project
										name={JSON.stringify(data.node.name).replace(/"/g, "")}
										desc={JSON.stringify(data.node.description).replace(
											/"/g,
											""
										)}
										lang={JSON.stringify(
											data.node.primaryLanguage.name
										).replace(/"/g, "")}
									/>
								);
							})}
						</div>
						{/* </ScrollTrigger>
				<ScrollTrigger id="aboutMe"> */}
					</div>
					<div data-scroll-section>
						<h1 className="title2">
							ABOUT <span style={{ color: "white" }}>ME</span>
						</h1>
						<p id="block">
							Hey there &#128075; ,{" "}
							<span
								style={{
									background: "white",
									borderRadius: "5px",
									opacity: 0.9,
									paddingLeft: "5px",
									paddingRight: "5px",
								}}
							>
								I'm Hitesh
							</span>
							. Im a 15 yr old software developer and cybersecurity enthusiast
							that loves to make things and learn pretty much anything. I'm also
							interested in mechanical keyboards and looking for other cool
							hobbies! Feel free to contact me to just chat or work with me on a
							project. The best way to reach me is on Discord @{" "}
							<span
								style={{
									background: "white",
									borderRadius: "5px",
									opacity: 0.9,
								}}
							>
								[Nindroz#3903]
							</span>
						</p>
					</div>
					{/* </ScrollTrigger> */}
				</div>
			</div>
		);
	}
}
