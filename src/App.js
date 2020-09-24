import React, { Component } from 'react'
import './App.css'

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
          <h1 className = "heading">Hi I'm<br/>Hitesh Mantha</h1>
          <div id="wave"></div>
        </div>
      );
  }
}
