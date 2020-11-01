import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "./styling/Project.css";

export default class Project extends Component {
	render() {
		return (
			<div className="element">
				<h1>{this.props.name}</h1>
				<p>{this.props.desc}</p>
				<hr
					style={{ border: "solid 1.5px #242024", background: "#242024" }}
				></hr>
				<div className="underline">
					<h2>{this.props.lang}</h2>

					<FaGithub
						id="ghIcon"
						onClick={() => {
							window.open(`${this.props.url}`);
						}}
					/>
				</div>
			</div>
		);
	}
}
