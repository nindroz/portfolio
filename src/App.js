import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "./Project.js";
import Icons from "./Icons.js";
import "./styling/App.css";

export default class App extends Component {
	constructor() {
		super();
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
				<Icons />
				<div id="projects">
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
				<h1 className="title2">ABOUT ME</h1>
				<p id="block">
					Hey there, Im hitesh. Im a 15 yr old software developer and
					cybersecurity enthusiast that loves to make things whether that be
					digital or physical. I'm also interested in mechanical keyboards and
					3D printing. Feel free to contact me anywhere to just chat or work
					with me on a project. For easy access my discord is{" "}
					<b>Nindroz#3903</b>
				</p>
			</div>
		);
	}
}
