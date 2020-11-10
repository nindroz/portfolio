import React, { Component } from "react";
import { FaGithubAlt, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./styling/Icons.css";

export default class Icons extends Component {
	render() {
		return (
			<div className="iconPack">
				<a
					href="https://github.com/nindroz"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithubAlt className="icon" />
				</a>
				<a
					href="https://twitter.com/Nindroz3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaTwitter className="icon" />
				</a>
				<a
					href="mailto:mantha.hitesh@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<HiOutlineMail className="icon" />
				</a>
			</div>
		);
	}
}
