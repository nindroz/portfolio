import React, { Component } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./styling/Icons.css";

export default class Icons extends Component {
	render() {
		return (
			<footer>
				<ul>
					<li>
						<a
							href="https://github.com/nindroz"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="icon" />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/Nindroz3"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter className="icon" />
						</a>
					</li>
					<li>
						<a
							href="mailto:mantha.hitesh@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<HiOutlineMail className="icon" />
						</a>
					</li>
				</ul>
				<small>Hitesh Mantha © 2021 | Built with React & 🖤.</small>
			</footer>
		);
	}
}
