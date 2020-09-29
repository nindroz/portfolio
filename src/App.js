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
            <div class="header">
              <div class="header-bg"></div>
              <h1 class="header-text">Hi I'm<br/>Hitesh Mantha</h1>
          </div>
        </div>
      );
  }
}
