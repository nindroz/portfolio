import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "./styling/Project.css";

export default class Project extends Component {
	render() {
		return (
			<div className="element">
				<h1>{this.props.name}</h1>
				<p>
					descriptionds dfsjkhsdfkhjsd jkdfshsfdkjhf hfhjddsfjkh kjhdfksdjhf
				</p>
				<hr style={{ border: "solid 1px #242024" }}></hr>
				<div className="underline">
					<h2>JAVASCRIPT</h2>
					<FaGithub id="ghIcon" />
				</div>
			</div>
		);
	}
}
