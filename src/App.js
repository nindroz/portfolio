import React, { Component } from 'react'
import Project from './Project.js'
import Icons from './Icons.js'
import './styling/App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      title:"Hi I'm Hitesh Mantha"
    }
  }
  render() {
      return (
        <div className="App">
          <div className="swoosh"></div>
          <h1 class="title">
            <span style={{ color: "white" }}>Hi I'm</span>
            <br/>
            Hitesh Mantha
          </h1>
          <Icons/>
          <div id = "projects">
            <Project/>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          
        </div>
      );
  }
}
