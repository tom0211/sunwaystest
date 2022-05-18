import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projectsImg from "../images/projects.jpg";
import "./climateTech.css";

class climateTech extends Component {
  render() {
    return (
      <div id="page">
        <Header
          title="Climate Tech"
          button={"none"}
          link=""
          position="top"
          background={projectsImg}
        />

        <div id="gtco-subscribe" className="gtco-section border-bottom">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>The Sunways Way</h2>
              </div>
              <div className="row animate-box flexBox largeScreenPadding">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  Sunways builds renewable energy infrastructures and offers
                  integrated services. Its mission is to guide the evolution of
                  the energy sector, through the most innovative sustainable
                  energy network
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="gtco-subscribe" className="gtco-section border-bottom ">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>Sustainable Technology</h2>
              </div>
              <div className="row animate-box">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                  className="col-xs-12 col-md-12"
                >
                  <div className="col-xs-12 col-md-10 allianceBox">
                    <div>
                      <div className="col-xs-8 col-md-4">{/* <NTU /> */}</div>
                      <div className="col-xs-12 col-md-12">
                        <h3>Hydrocarbon</h3>
                        The EU launched its hydrogen strategy in July, placing
                        low-carbon or clean versions – and in particular
                        “renewable” hydrogen – front and center as an enabler to
                        meet ambitious net-zero targets across the region. For
                        hydrogen to realize its potential in a decarbonized
                        economy, it must be produced “on a mass scale in a
                        sustainable way”. For that to happen, however, clean
                        (green and blue) hydrogen needs to become
                        cost-competitive with conventional fuels.
                        <br />
                        We see a lot of possibilities and progress on the
                        infrastructure side. It needs investment, and the focus
                        on the need to scale that up is now growing.
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-10 allianceBox">
                    <div>
                      <div className="col-xs-8 col-md-4">
                        {/* <img alt="" src={harsha} /> */}
                      </div>
                      <div className="col-xs-12 col-md-12">
                        <h3>Decarbonization</h3>
                        Sunways strongly believes Green hydrogen could help
                        countries with limited domestic renewables resources to
                        decarbonize and reach net-zero targets.
                        <br />
                        Sunways has decided to focus on hydrogen in order to
                        diversify in renewable activities. Hydrogen vehicles are
                        electric vehicles. However, unlike conventional EVs,
                        which run on electricity stored in a battery, hydrogen
                        vehicles are powered by a fuel cell that converts
                        hydrogen into electricity. The environmental benefits
                        (such as zero polluting exhaust emissions) and practical
                        advantages (such as driving comfort) make these vehicles
                        key to the sustainable mobility of tomorrow.
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-10 allianceBox">
                    <div>
                      <div className="col-xs-8 col-md-4">
                        {/* <img alt="" src={harsha} /> */}
                      </div>
                      <div className="col-xs-12 col-md-12">
                        <h3>Storage</h3>
                        Battery storage systems are emerging as one of the key
                        solutions to effectively integrate renewable energy in
                        power systems worldwide. Electricity storage
                        technologies can be used for a variety of applications
                        in the power sector, from e-mobility and
                        behind-the-meter applications to utility-scale use
                        cases.
                        <br />
                        Utility-scale batteries can enable a greater feed-in of
                        renewables into the grid by storing excess generation
                        and by firming renewable energy output. When paired with
                        renewable generators, batteries help provide reliable
                        and cheaper electricity in isolated grids and to
                        off-grid communities, which otherwise rely on expensive
                        imported diesel fuel for electricity generation.
                      </div>
                    </div>
                  </div>
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

export default climateTech;
