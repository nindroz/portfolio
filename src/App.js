import React, { Component } from "react";
import { endpoint } from "./gql.js";
import Project from "./Project.js";
import Footer from "./Footer.js";
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
		});
	}
	render() {
		return (
			<div className="App">
				<div className="swoosh"></div>
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
								desc={JSON.stringify(data.node.description).replace(/"/g, "")}
								lang={JSON.stringify(data.node.primaryLanguage.name).replace(
									/"/g,
									""
								)}
								url={JSON.stringify(data.node.url).replace(/"/g, "")}
							/>
						);
					})}
				</div>
				<h1 className="title2">
					ABOUT <span style={{ color: "white" }}>ME</span>
				</h1>
				<p id="block">
					Hey there &#128075; , I'm{" "}
					<span
						style={{
							background: "white",
							borderRadius: "5px",
							opacity: 0.9,
							paddingLeft: "5px",
							paddingRight: "5px",
						}}
					>
						Hitesh
					</span>
					. I'm a 16 yr old self-taught software developer and cybersecurity
					enthusiast that loves to make things and learn pretty much anything. I
					spend a of time working on projects and am always on the lookout for
					cool interesting technologies to try out! Feel free to contact me to
					just chat or work with me on a project. The best way to find me is on
					Discord @{" "}
					<span
						style={{
							background: "white",
							borderRadius: "5px",
							opacity: 0.9,
						}}
					>
						[Nindroz#3903]
					</span>
					<br />
					Also, I'm currently looking for internships in the Spring and Summer
					of 2021. Feel free to shoot me an email{" "}
					<a
						style={{
							background: "white",
							borderRadius: "5px",
							opacity: 0.9,
							color: "inherit",
							textDecorationLine: "none",
						}}
						href="mailto:mantha.hitesh@gmail.com"
					>
						[here]
					</a>
				</p>
				<Footer />
			</div>
		);
	}
}
