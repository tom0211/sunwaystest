import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeImg from "../images/test7.jpg";
import renewable from "../images/services.jpg";
import Positioning from "../images/coDevelopment.jpg";
import management from "../images/management1.jpg";
import "./home.css";

class home extends Component {
  render() {
    return (
      <div id="page">
        <Header
          title="Sunways Global"
          subtitle="Accelerating Energy Transition"
          button={"none"}
          link=""
          position="center"
          background={homeImg}
        />
        <div id="gtco-counter" className="gtco-section">
          <div className="gtco-subscribe">
            <div className="row">
              <div
                style={{ marginBottom: "0" }}
                className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box"
              >
                <h2>What We Do</h2>
              </div>
            </div>
            <div className="row gtco-container">
              <div
                id="container"
                className="col-md-3 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="feature-center">
                  <span className="icon">
                    <i id="image" className="fas fa-solar-panel"></i>
                  </span>
                  <span id="title" className="counter-label">
                    Focus in renewable energy
                  </span>
                </div>
              </div>
              <div
                id="container"
                className="col-md-3 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="feature-center">
                  <span className="icon">
                    <i id="image" className="fas fa-sun"></i>
                  </span>
                  <span id="title" className="counter-label">
                    Specialization in building and delivering the "end-to-end"
                    solar project across value chain
                  </span>
                </div>
              </div>
              <div
                id="container"
                className="col-md-3 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="feature-center">
                  <span className="icon">
                    <i id="image" className="fas fa-seedling"></i>
                  </span>
                  <span id="title" className="counter-label">
                    Building and delivering sustainable and long term value
                  </span>
                </div>
              </div>
              <div
                id="container"
                className="col-md-3 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="feature-center">
                  <span className="icon">
                    <i id="image" className="fas fa-clipboard-check"></i>
                  </span>
                  <span id="title" className="counter-label">
                    End to End energy project development
                  </span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "25px" }} className="row">
              <div className="homeBox row animate-box aboutus">
                <div
                  style={{
                    backgroundImage: `url(${renewable})`,
                  }}
                  className="homeDisplay col-md-6 col-xs-12"
                >
                  Focus on Renewable Energy
                </div>
                <div
                  style={{ padding: "25px" }}
                  className="col-md-6 col-xs-12 info"
                >
                  Sunways Global is a Renewable Energy Development company
                  focused on Renewable Energy development in India, South East
                  Asia and Middle East. Sunways, headquartered in the United
                  Kingdom with its offices in London, Mumbai, New Delhi and
                  Dubai. Sunways Global specialized in renewable development
                  platform for Utility Scale decentralised and distributed solar
                  PV Projects, Commercial and Industrial Rooftop, Floating Solar
                  and Storage projects with focused approach to generate value
                  to Stakeholders in the United Kingdom.
                </div>
              </div>
              <div className="homeBox row animate-box aboutus">
                <div
                  style={{
                    backgroundImage: `url(${management})`,
                  }}
                  className="homeDisplay col-md-6 col-md-push-6 col-xs-12"
                >
                  Seasoned Management
                </div>
                <div
                  style={{ padding: "25px" }}
                  className="col-md-6 col-md-pull-6 col-xs-12 info"
                >
                  The team is drawn from the Global Finance, Renewable Energy
                  and Investment banking industry. Sunways has a current strong
                  project portfolio of 100 MW+ under development and 200 MW+
                  under pipeline having PPA with High credit utilities and
                  C&#38;I customers. Sunways Global specializes in origination,
                  technical and commercials evaluation, approvals, turnkey
                  solution/end to end solar project development/life cycle.
                </div>
              </div>

              <div className="homeBox row animate-box aboutus">
                <div
                  style={{
                    backgroundImage: `url(${Positioning})`,
                  }}
                  className="homeDisplay col-md-6 col-xs-12"
                >
                  Global Reach And Local Expertise
                </div>
                <div
                  style={{ padding: "25px" }}
                  className="col-md-6 col-xs-12 info"
                >
                  Sunways invests and builds renewable energy assets more
                  especially solar projects and delivers “End to End” solar
                  projects across the value chain and has on-ground operations
                  with expertise to execute and run the renewable projects.
                  Sunways focus on thesis-driven renewable energy investments
                  across continents, more specifically decentralised and
                  distributed energy projects. The Company objective is to
                  invest and participate in the fast-growing regions with aim to
                  accelerate the energy transitions and support growing energy
                  demand of the regions at a reasonable rate.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default home;
