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
				<h1 class="title">
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
				<h1 style={{ fontSize: 200 }}>ABOUT ME</h1>
			</div>
		);
	}
}
