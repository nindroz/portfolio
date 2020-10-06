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
    color : "blue",
    height:"100px", 
    width:"100px", 
    verticalAlign:"middle",
    position: 'relative'
    
}

const iconPackStyle = {
    display : "grid",
    marginLeft: "90%",
    zIndex:"7"
}
