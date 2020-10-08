import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./Project.js";
import Icons from "./Icons.js";
import "./styling/App.css";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/test">
              <div className="swoosh"></div>
            </Route>
            <Route path="/">
              <div className="swoosh"></div>
              <Link to="/test">test</Link>
              <h1 class="title">
                <span style={{ color: "white" }}>Hi I'm</span>
                <br />
                Hitesh Mantha
              </h1>
              <Icons />
              <div id="projects">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
