import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./images/logo90.png";
import "./App.css";

import climateTech from "./pages/climateTech";
import home from "./pages/home";
import contact from "./pages/contact";
import partners from "./pages/partners";
import about from "./pages/about";
import projects from "./pages/projects";

class App extends Component {
  componentDidMount() {
    let currentElement = document.getElementById(window.location.pathname);
    if (currentElement) currentElement.classList.add("active");
    else {
      document.getElementById("/").classList.add("active");
    }
    let links = document.querySelectorAll("li");
    links.forEach((el) =>
      el.addEventListener("click", (e) => {
        let activeDocument = document.querySelector("li.active");
        if (activeDocument) activeDocument.classList.remove("active");
        el.classList.add("active");
      })
    );
  }
  render() {
    return (
      <Suspense fallback={<div className="supsenseLoader">loading</div>}>
        <Router>
          <div className="container">
            <header className="gtco-nav" role="navigation">
              <div className="navWrapper">
                <div className="row navBox">
                  <div className="logoWrapper">
                    <a href="/" className="pull-left">
                      <img alt="" src={logo} />
                    </a>
                    <span className="hidden-xs">Sunways Global</span>
                  </div>
                  <div className="col-xs-8 text-right navMenu menu-1">
                    <ul>
                      <li id="/">
                        <a href="/">Home</a>
                      </li>
                      <li id="/about" className="has-dropdown">
                        <div className="dropdown-container">
                          <a href="/about">About Us</a>
                          <div className="icon" />
                        </div>
                        <ul className="dropdown">
                          <li>
                            <a href="/about">What We do</a>
                          </li>
                          <li>
                            <a href="/about">Value Chain</a>
                          </li>
                          <li>
                            <a href="/about">Leadership Team</a>
                          </li>
                          <li>
                            <a href="/about">Advisory Board</a>
                          </li>
                        </ul>
                      </li>
                      <li id="/projects">
                        <a href="/projects">Projects</a>
                      </li>
                      <li id="/climateTech">
                        <a href="/climateTech">Climate Tech</a>
                      </li>
                      <li id="/partners">
                        <a href="/partners">Partners</a>
                      </li>
                      <li id="/contact">
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/climateTech" component={climateTech} />
              <Route exact path="/contact" component={contact} />
              <Route exact path="/about" component={about} />
              <Route exact path="/partners" component={partners} />
              <Route exact path="/projects" component={projects} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
