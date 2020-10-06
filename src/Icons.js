import React, { Component } from 'react'
import { FaGithubAlt, FaDiscord, FaTwitter } from 'react-icons/fa'

export default class Icons extends Component {
    render() {
        return (
            <div style = {iconPackStyle}>
                <FaGithubAlt style = {singleIconStyle} />
                <FaDiscord style = {singleIconStyle}   />
                <FaTwitter style = {singleIconStyle}   />
            </div>
        )
    }
}

const singleIconStyle = {
    color : "#242024",
    height:"110px", 
    width:"110px",
    margin: "50px"
}

const iconPackStyle = {
    marginLeft: "89%",
    zIndex:"7",
    position:"absolute"
}
