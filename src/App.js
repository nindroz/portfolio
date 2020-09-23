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
          <div id="wave"></div>
          <h1 >{this.state.title}</h1>
        </div>
      );
  }
}
