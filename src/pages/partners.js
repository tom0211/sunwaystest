import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sponsorsImg from "../images/partners.jpg";
import experience from "../images/experience.jpg";
import harsha from "../images/harsha.jpg";
import ntuCampus from "../images/ntu.jpg";
import "./partners.css";

class partners extends Component {
  render() {
    return (
      <div id="page">
        <Header
          title="Partners"
          button={"none"}
          link=""
          position="initial"
          background={sponsorsImg}
        />
        <div className="gtco-container gtco-section">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
              <h2>
                Combining industry experience and insight on a global scale
              </h2>
            </div>
            <div
              style={{ padding: 0 }}
              className="row col-md-12 animate-box flexBox"
            >
              <div className="col-md-6 col-sm-6">
                <img className="farmsImage" src={experience} alt="" />
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="oneagrowFarms">
                  The power of solar energy to change lives isn’t just a
                  theoretical concept to us – it’s what we believe in and what
                  drives us to develop solar energy solutions and services that
                  can power households, businesses and communities across the
                  globe. It’s what we focus our expertise and efficiency on to
                  create value for the developers, contractors and banks we work
                  with and the customers we supply. Working with Sunways means
                  working with a company that combines industry experience and
                  insight with global scale and a proven track record of success
                  to deliver efficiently, reliably and profitably.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "#f8f9f7" }} id="gtco-features">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>With Us</h2>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="feature-center connectFeatures animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <h3>Global secular growth in demand for solar energy</h3>
                  <p>
                    One of the most globally exposed and diversified solar
                    company.
                    <br />
                    Strategically positioning in high growth regions and
                    sectors.
                    <br />
                    Growth Opportunity in Utility scale, Rooftop, C&#38;I ,
                    floating Solar and Storage, Leveraging partnership
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="feature-center connectFeatures animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <h3>
                    Differentiated business model focusing on profitable growth
                  </h3>
                  <p>
                    Higher growth and returns based project development
                    approach.
                    <br />
                    Focused on investment with high risk adjusted return.
                    <br />
                    Strong Local Partnership
                    <br />
                    Understanding of major developed and developing markets.
                    <br />
                    Cross industry experience.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="feature-center connectFeatures animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <h3>Lean Development Model &#38; Platform sustainability</h3>
                  <p>
                    Led by strategically minded and prudent management and team.
                    <br />
                    Dedicated in-house technical, finance, diligence/deal teams
                    EPC/O&#38;M management platform.
                    <br />
                    supporting regional teams and local partners.
                    <br />
                    End to End Management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gtco-container gtco-section">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
              <h2>NTU</h2>
            </div>
            <div
              style={{ padding: 0 }}
              className="row col-md-12 animate-box flexBox"
            >
              <div className="col-md-6 col-sm-6">
                <img className="farmsImage" src={ntuCampus} alt="" />
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="oneagrowFarms">
                  <strong>
                    EcoLabs - NTU has collaborated to set up a Centre of
                    Excellence (CoE)
                  </strong>
                  <p>
                    Sunways and EcoLabs Centre of Innovation for Energy at NTU
                    has partnered to set-up a centre of excellence and deploy
                    technology systems in Singapore:
                  </p>
                  <ul>
                    <li>
                      Deploy Sunways Solar Systems and Solutions in Singapore
                      for Test bedding towards emerging technologies{" "}
                    </li>
                    <li>
                      Setup a Centre of Excellence (CoE) to serve as hub for
                      managing analytics of operational data of solar projects{" "}
                    </li>
                  </ul>
                  <p>
                    Sunways and NTU EcoLabs Centre of Innovation for Energy
                    (EcoLabs) has collaborate to implement the technologies for
                    decarbonisation and reduce the carbon emission of maritime
                    transportation in Singapore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "40px 0" }} className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
              <strong>About Nanyang Technological University, Singapore</strong>
            </div>
            <div className="row animate-box flexBox largeScreenPadding">
              <div
                style={{ margin: "25px 0" }}
                className="col-md-12 col-sm-12 col-xs-12"
              >
                A research-intensive public university, Nanyang Technological
                University, Singapore (NTU Singapore) has 33,000 undergraduate
                and postgraduate students in the Engineering, Business, Science,
                Humanities, Arts and Social Sciences, and Graduate colleges. It
                also has a medical school, the Lee Kong Chian School of
                Medicine, established jointly with Imperial College London.
                <br />
                NTU is also home to world-renowned autonomous institutes – the
                National Institute of Education, S Rajaratnam School of
                International Studies, Earth Observatory of Singapore, and
                Singapore Centre for Environmental Life Sciences Engineering –
                and various leading research centres such as the Nanyang
                Environment and Water Research Institute (NEWRI) and Energy
                Research Institute @ NTU (ERI@N).
                <br />
                Ranked amongst the world’s top universities by QS, NTU has also
                been named the world’s top young university for the past seven
                years. The University’s main campus is frequently listed among
                the Top 15 most beautiful university campuses in the world and
                it has 57 Green Mark-certified (equivalent to LEED-certified)
                building projects, of which 95% are certified Green Mark
                Platinum. Apart from its main campus, NTU also has a campus in
                Singapore’s healthcare district.
                <br />
                Under the NTU Smart Campus vision, the University harnesses the
                power of digital technology and tech-enabled solutions to
                support better learning and living experiences, the discovery of
                new knowledge, and the sustainability of resources.
                <br />
                <a
                  href="http://www.ntu.edu.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For more information, visit www.ntu.edu.sg
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gtco-container gtco-section">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
              <h2>Harsha Abakus Solar</h2>
            </div>
            <div
              style={{ padding: 0 }}
              className="row col-md-12 animate-box flexBox"
            >
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="col-md-6 col-sm-6"
              >
                <img
                  style={{ width: "55%" }}
                  className="farmsImage"
                  src={harsha}
                  alt=""
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="oneagrowFarms">
                  Harsha Abakus Solar Private Limited is a part of Harsha
                  Engineers group, a global entity having 48 years of
                  operational history with facilities in 3 countries serving
                  over 60 nations with a product portfolio of over 3500
                  engineering products. Since its inception in 2010, Harsha
                  Abakus Solar Private Limited is leading trunkey Solar EPC
                  service provider in Utility scale, Rooftop Solar, floating
                  solar and specialized projects with experience of more than115
                  projects with capacity of 500 MW+ globally. With a core DNA of
                  Engineering and technology, Harsha adds value to strategic
                  partnership by leveraging sectorical experience, diverse
                  presence and large base of tier 1 clientals. Harsha adds
                  strong values driven by diverse experience in EPC.
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

export default partners;
