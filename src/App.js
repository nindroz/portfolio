import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";
import { endpoint, gqlQuery, dummyProject } from "./gql.js";
import Project from "./Project.js";
import Icons from "./Icons.js";
import "./styling/App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
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
				<Icons />
				<ScrollTrigger id="main">
					<Link
						activeClass="active"
						to="aboutMe"
						spy={true}
						smooth={true}
						offset={100}
						duration={500}
					>
						Hey
					</Link>
					<div className="swoosh"></div>
					<h1 className="title">
						<span style={{ color: "white" }}>Hi I'm</span>
						<br />
						Hitesh Mantha
					</h1>
					<div id="projects">
						{/* {this.state.map((data, key) => {
							return <div>{data}</div>;
						})} */}
						<Project name={JSON.stringify(this.state[0])} />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
					</div>
				</ScrollTrigger>
				<ScrollTrigger id="aboutMe">
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
							style={{ background: "white", borderRadius: "5px", opacity: 0.9 }}
						>
							[Nindroz#3903]
						</span>
					</p>
				</ScrollTrigger>
			</div>
		);
	}
}
