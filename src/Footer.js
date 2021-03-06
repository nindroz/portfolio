import React, { Component } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./styling/Footer.css";

export default class Footer extends Component {
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
					<li>
						<a
							href="https://www.linkedin.com/in/hmantha/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="icon" />
						</a>
					</li>
				</ul>
				<small>
					Hitesh Mantha © 2021 | Built with React and
					<span role="img" aria-label="heart">
						&nbsp;🖤
					</span>
					.
				</small>
			</footer>
		);
	}
}
