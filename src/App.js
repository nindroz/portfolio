import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";
import Project from "./Project.js";
import Icons from "./Icons.js";
import "./styling/App.css";

const gqlQuery = (username) => {
	return `query {
	repositoryOwner(login: "${username}") {
	  ... on ProfileOwner {
		 pinnedItemsRemaining
		 itemShowcase {
			items(first: 6) {
			  edges {
				 node {
					... on Repository {
					  name
					  description
					  url
					  primaryLanguage {
						 name
					  }
					}
				 }
			  }
			}
		 }
	  }
	}
 }`;
};

const dummyProject = {
	node: {
		url: "https://google.com",
		name: "Google",
		primaryLanguage: {
			name: "Go",
		},
		description: "Google.com",
	},
};

const endpoint = async () => {
	const projects = await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer  24464a5871453ad710749bcbe59ace775776b080`,
		},
		body: JSON.stringify({
			query: gqlQuery("nindroz"),
		}),
	});

	const ret = await projects.json();
	return {
		props: {
			projects:
				ret.data === undefined
					? process.env.NODE_ENV === "production"
						? []
						: Array.from({ length: 6 }).map(() => dummyProject)
					: ret.data.repositoryOwner.itemShowcase.items.edges,
		},
	};
};

export default class App extends Component {
	getProjectInfo = () => {
		return endpoint().then((ret) => {
			console.log(ret.props.projects);
			return ret.props;
		});
	};

	oof = () => {
		return <div>{JSON.stringify(this.getProjectInfo())}</div>;
	};
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
						{this.oof()}
						<Project />
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
