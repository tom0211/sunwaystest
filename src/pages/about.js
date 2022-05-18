import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg from "../images/about.jpg";
import lokendra from "../images/lokendra.jpeg";
import rooftop from "../images/rooftop.jpg";
import solar from "../images/solar.jpg";
import bhadra from "../images/bhadra2.jpg";
import manish from "../images/manish.jpeg";
import subodh from "../images/subodh.jpg";
import anil from "../images/anil.jpeg";
import tim from "../images/tim.jpeg";
import "./about.css";

class about extends Component {
  render() {
    return (
      <div id="page">
        <Header
          title="About Us"
          button={"none"}
          position="initial"
          link=""
          background={aboutImg}
        />

        <div id="gtco-subscribe" className="gtco-section border-bottom">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>About Us</h2>
              </div>
              <div className="row animate-box flexBox largeScreenPadding">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  Sunways has participated and continues to participate in
                  various bids for renewable energy projects in India, Middle
                  East and SouthEast Asia, for developing solar power projects
                  leveraging the existing experience &#38; expertise. Team has
                  cummulative experience of funding / development and execution
                  of self-investment portfolio of close to 300 MW globally of
                  both rooftop, and ground mounted solar with state utilities,
                  national utility, renowned educational universities, large
                  corporate, government institutions, railways etc through long
                  term Power Purchase Agreements contracts.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="page">
          <div
            style={{ marginTop: "10vh" }}
            id="gtco-counter"
            className="gtco-section"
          >
            <div className="gtco-container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                  <h2>We continously strive to outdo ourselves</h2>
                </div>
              </div>

              <div className="row">
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="9"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      10
                    </span>
                    <span id="title" className="counter-label">
                      Countries
                    </span>
                  </div>
                </div>
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="11"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      15
                    </span>
                    <span id="title" className="counter-label">
                      Projects
                    </span>
                  </div>
                </div>
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="5"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      400
                    </span>
                    <span id="title" className="counter-label">
                      Offices
                    </span>
                  </div>
                </div>
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="35"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      10
                    </span>
                    <span id="title" className="counter-label">
                      MW Under Construction
                    </span>
                  </div>
                </div>
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="100"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      10
                    </span>
                    <span id="title" className="counter-label">
                      Plus MW Under Development
                    </span>
                  </div>
                </div>
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="6"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      15
                    </span>
                    <span id="title" className="counter-label">
                      Ground Mount
                    </span>
                  </div>
                </div>

                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="5"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      5
                    </span>
                    <span id="title" className="counter-label">
                      RoofTop
                    </span>
                  </div>
                </div>
                <div
                  id="container"
                  className="col-md-3 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div style={{ height: "30vh" }} className="feature-center">
                    <span
                      id="counter"
                      className="counter js-counter"
                      data-from="0"
                      data-to="300"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      15
                    </span>
                    <span id="title" className="counter-label">
                      Plus Acres Land
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="gtco-subscribe" className="gtco-section border-bottom">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>Value Chain</h2>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                  <span className="icon">
                    <i className="fas fa-toolbox" />
                  </span>
                  <h4>Development</h4>
                  <div className="line-dec"></div>
                  <p>
                    Project planning introduction and consultation. Project
                    development analysis and evaluation. Project permitting and
                    approval assistance.
                  </p>
                  <div className="primary-blue-button">
                    <label
                      htmlFor="Development"
                      className="scroll-link"
                      data-id="portfolio"
                    >
                      Continue Reading
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                  <span className="icon">
                    <i className="fas fa-piggy-bank" />
                  </span>
                  <h4>Finance and Capital</h4>
                  <div className="line-dec"></div>
                  <p>
                    Project financing introduction and consultation. Project
                    financing solutions proposal. Project financials projection
                    and analysis.
                  </p>
                  <div className="primary-blue-button">
                    <label
                      htmlFor="fnc"
                      className="scroll-link"
                      data-id="portfolio"
                    >
                      Continue Reading
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                  <span className="icon">
                    <i className="fas fa-shuttle-van" />
                  </span>
                  <h4>EPC</h4>
                  <div className="line-dec"></div>
                  <p>
                    Project design and engineering. Blueprint designing and SOW.
                    System components resourcing and delivery.
                  </p>
                  <div className="primary-blue-button">
                    <label
                      htmlFor="EPC"
                      className="scroll-link"
                      data-id="portfolio"
                    >
                      Continue Reading
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                  <span className="icon">
                    <i className="fas fa-tasks" />
                  </span>
                  <h4>Asset Management Services</h4>
                  <div className="line-dec"></div>
                  <p>
                    Project operation monitoring. Project full-time supervision.
                    Project preventive maintenance.
                  </p>
                  <div className="primary-blue-button">
                    <label
                      htmlFor="onm"
                      className="scroll-link"
                      data-id="portfolio"
                    >
                      Continue Reading
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="gtco-subscribe" className="gtco-section border-bottom">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
              <h2>What We Do</h2>
            </div>
          </div>

          <div className="row">
            <div className="whatwedo row animate-box aboutus">
              <div
                style={{
                  backgroundImage: `url(${solar})`,
                }}
                className="display col-md-6 col-md-push-6 col-xs-12"
              ></div>
              <div
                style={{ padding: "25px" }}
                className="col-md-6 col-md-pull-6 col-xs-12 titleInfo"
              >
                Utility-Scale Solar Projects
              </div>
            </div>

            <div className="whatwedo row animate-box aboutus">
              <div
                style={{
                  backgroundImage: `url(${rooftop})`,
                }}
                className="display col-md-6 col-xs-12"
              ></div>
              <div
                style={{ padding: "25px" }}
                className="col-md-6 col-xs-12 titleInfo"
              >
                Rooftop Solar Projects
              </div>
            </div>
          </div>
        </div>

        <div id="gtco-team" className="gtco-section">
          <div className="gtco-container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                <h2>Leadership Team</h2>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="row mobileFlexWrap"
            >
              <div
                className=" col-xs-12 animate-box"
                data-animate-effect="fadeIn"
              >
                <div className="gtco-staff">
                  <img src={subodh} alt="" />
                  <h3>Subodh Narain Agrawal</h3>
                  <strong className="role">Co-Founder</strong>
                  <p className="LearnMore">
                    <label className="LearnFounder" htmlFor="subodh">
                      Learn More
                    </label>
                  </p>
                </div>
              </div>
              <div
                className=" col-xs-12 animate-box"
                data-animate-effect="fadeIn"
              >
                <div className="gtco-staff">
                  <img src={anil} alt="" />
                  <h3>Anil Sharma</h3>
                  <strong className="role">Co-Founder</strong>
                  <p className="LearnMore">
                    <label className="LearnFounder" htmlFor="anil">
                      Learn More
                    </label>
                  </p>
                </div>
              </div>
              <div
                className=" col-xs-12 animate-box"
                data-animate-effect="fadeIn"
              >
                <div className="gtco-staff">
                  <img src={bhadra} alt="" />
                  <h3>Bhadra Kanaiya</h3>
                  <strong className="role">Co-Founder</strong>
                  <p className="LearnMore">
                    <label className="LearnFounder" htmlFor="bhadra">
                      Learn More
                    </label>
                  </p>
                </div>
              </div>
              <div
                className=" col-xs-12 animate-box"
                data-animate-effect="fadeIn"
              >
                <div className="gtco-staff">
                  <img src={manish} alt="" />
                  <h3>Manish Begrajka</h3>
                  <strong className="role">Co-Founder</strong>
                  <p className="LearnMore">
                    <label className="LearnFounder" htmlFor="manish">
                      Learn More
                    </label>
                  </p>
                </div>
              </div>
              <div
                className=" col-xs-12 animate-box"
                data-animate-effect="fadeIn"
              >
                <div className="gtco-staff">
                  <img src={lokendra} alt="" />
                  <h3>Lokendra Jain</h3>
                  <strong className="role">Advisor</strong>
                  <p className="LearnMore">
                    <label className="LearnFounder" htmlFor="lokendra">
                      Learn More
                    </label>
                  </p>
                </div>
              </div>
              <div className="clearfix visible-sm-block" />
            </div>
            {/* <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                <h2>Advisory Board</h2>
              </div>
              <div className="row">
                <div
                  className="col-lg-3 col-lg-push-3 col-md-3 col-md-push-3 col-sm-6 animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="gtco-staff">
                    <img src={lokendra} alt="" />
                    <h3>Lokendra Jain</h3>
                    <p className="LearnMore">
                      <label className="LearnFounder" for="lokendra">
                        Learn More
                      </label>
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-lg-push-3 col-md-3 col-md-push-3 col-sm-6 animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="gtco-staff">
                    <img src={tim} alt="" />
                    <h3>Tim Polega</h3>
                    <p className="LearnMore">
                      <label className="LearnFounder" for="polega">
                        Learn More
                      </label>
                    </p>
                  </div>
                </div>
                <div className="clearfix visible-sm-block" />
              </div>
            </div> */}
          </div>
        </div>

        <input className="modal-state" id="Development" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="Development"></label>
          <div style={{ height: "55%" }} className="modal__inner">
            <label className="modal__close" htmlFor="Development"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Development </h2>
                  </div>
                  <div className="row col-md-12">
                    <p style={{ textAlign: "center" }} className="service-info">
                      Utility Scale Ground Mount
                      <br />
                      Rooftop Solar
                      <br />
                      Corporate C&#38;I
                      <br />
                      Floating Solar
                      <br />
                      PV+ Storage /Battery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="fnc" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="fnc"></label>
          <div style={{ height: "55%" }} className="modal__inner">
            <label className="modal__close" htmlFor="fnc"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Finance and Capital </h2>
                  </div>
                  <div className="row col-md-12">
                    <p style={{ textAlign: "center" }} className="service-info">
                      Project financing introduction and consultation
                      <br />
                      Project financing solutions proposal
                      <br />
                      Project financials projection and analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="EPC" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="EPC"></label>
          <div style={{ height: "55%" }} className="modal__inner">
            <label className="modal__close" htmlFor="EPC"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> EPC </h2>
                  </div>
                  <div className="row col-md-12">
                    <p style={{ textAlign: "center" }} className="service-info">
                      Financing and Debt Structuring
                      <br />
                      EPC - Engineering, Procurement, Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="onm" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="onm"></label>
          <div style={{ height: "55%" }} className="modal__inner">
            <label className="modal__close" htmlFor="onm"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Asset Management Services </h2>
                  </div>
                  <div className="row col-md-12">
                    <p style={{ textAlign: "center" }} className="service-info">
                      “Smart Operations” Of Owned and Third party Solar
                      Facilities
                      <br />
                      Cutting Edge Technology Driven Operations
                      <br />
                      Technical and Financial Performance Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="lokendra" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="lokendra"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="lokendra"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Lokendra Jain </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center">
                      <img src={lokendra} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h3>
                        Senior Partner of SEP Ventures and Investor/Advisor to
                        Portfolio Cos. (15-18 startups in the portfolio and
                        growing).
                        <br />
                        Partner &#38; Managing Director of Marrs Blue Water Fund
                        ($500 Mn+ PE Fund)-Water Utilities, Water Treatment,
                        Water Rights, EPC.
                        <br />
                        Energy/Power Utilities, Oil &#38; Gas Tank Farms, etc.
                        <br />
                        Sr. Inv. Dir./Head of PE-M&#38;A-JV Division in a
                        Sovereign Investment Holding Co. setup (multiple 10s of
                        B AUM). Anchor investors Aramco, Public Investment Fund
                        (PIF), and SABIC.
                        <br />
                        Partner and Managing Director of Teichos-Brookwood PE
                        Fund - Seattle / Atlanta / San Francisco (Real Estate -
                        Multi-Family &#38; Student Housing, and Renewable
                        focus).Co-CIO/Investment Director/Head of PE of OIF (now
                        OIA) Oman’s Sovereign Wealth Fund (over USD 17 B+ AUM).
                        <br />
                        <br />
                        Investment Director /Principal at Intel Capital
                        (Corporate Venture arm of Intel).
                        <br />
                        Strong Global Energy/Renewable Investments background:
                        Board member/observer of Element Power (US/UK/Global
                        asset developer) Board member/observer of Energia Group
                        (Formerly Viridian Group in the Republic of Ireland)
                        Advised to a Board member of Showa Shell, Japan, and for
                        its renewable mfg. asset Solar Frontier GP
                        Investor/Advisor from OIF/OIA through Vinci Partners in
                        Brazilian utility Equatorial Energia (Brazil) JVs: 12 B
                        USD operating Jazan IGCC Power Plant, and Power
                        Cogeneration Plant Company (PCPC), KSA Managed a
                        renewable JV (prospective size USD 5 B AUM) transaction
                        evaluation for co-investments with leading OEM partners
                        and an Mfg. acquisition
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="subodh" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="subodh"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="subodh"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Subodh Narain Agrawal </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center">
                      <img src={subodh} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h3>
                        30 years international experience across Asia, Far East,
                        Africa, Europe &#38; USA including as Director of many
                        companies.
                        <br />
                        Vastly experienced in conceiving and setting up large
                        projects under complex conditions.
                        <br />
                        A specialist deal maker, his forte is building and
                        sustaining relationships across geographies.
                        <br />
                        Enjoys special relationships &#38; confidence of
                        business groups in India, China, Africa, ME and South
                        East Asia.
                        <br />
                        Served as Member on the Boards/Advisory Boards of
                        several Public and Private companies, straddling a wide
                        spectrum of industries including media &#38;
                        entertainment, infrastructure, IT, fashion etc.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="anil" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="anil"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="anil"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Anil Sharma </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center">
                      <img src={anil} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h3>
                        Having worked for 25+ years in some leading fortune 500
                        world class companies in various capacities in sales,
                        marketing and corporate management, Anil moved to be the
                        entrepreneur at the turn of this century.
                        <br />
                        Starting with an idea and a concept generation of a
                        business vision, Anil has developed and established 4
                        Companies in the last one decade and subsequently
                        divested to various British, Canadian and large PE funds
                        or Pharmaceutical corporations.
                        <br />
                        Finding niche opportunity in business space and then
                        build it up to a successful business entity to a great
                        extent.
                        <br />
                        He is keenly interested to synergise with his partners
                        to create significant value for the stakeholders.
                        <br />
                        Building a successful organisation, strategic
                        management, with a clear focus to think out of box
                        interest.
                        <br />
                        Director and investor for a number of International
                        Companies with diverse business segments.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="manish" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="manish"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="manish"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Manish Begrajka </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center">
                      <img src={manish} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h3>
                        Investment banker with over 16 years of rich experience
                        in Corporate Finance, Private Equity, Investment
                        Banking, M&#38;A, Strategy &#38; Consulting, Global
                        Business Management and International Taxation including
                        working with Big 4 consulting firm Ernst &#38; Young.
                        <br />
                        An entrepreneur and angel investor who is passionate
                        about Renewable Energy, Cleantech, Agritech and Fintech.
                        Supports companies and programs that empowers the
                        greater start-up community and future generations of
                        entrepreneurs.
                        <br />
                        Developed strong relationships at strategic levels and
                        enjoys special relationships and confidence of corporate
                        and political leaders in India, Far East, Africa &#38;
                        Middle East.
                        <br />
                        Solid renewable energy development experience in India,
                        Africa, South East Asia and Middle East with exposure of
                        more than 1000 MW+ under IPP Business in Utility scale/
                        Rooftop Solar/Battery Storage and Corporate / C&#38;I
                        PPAs.
                        <br />
                        Over last 6 years negotiated and executed bankable PPA,
                        IA, TA with Ministry / Regulators and developed robust
                        solar project portfolio from origination to financial
                        closure to commissioning of solar projects.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="bhadra" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="bhadra"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="bhadra"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Bhadra Kanaiya </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center">
                      <img src={bhadra} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h3>
                        Comes from background of Private Equity, Investment
                        Banking, Corporate Finance and Planning and Strategy in
                        Global Business Management with 16 years of rich
                        experience.
                        <br />
                        Has specialized into Business Finance and Global
                        Institution Banking over the years. He is a innovative
                        thinker and a self–driven professional with immense
                        experience and demonstrative business acumen, qualified
                        - Chartered Financial Analyst, CFA, Charlottesville,
                        USA.
                        <br />
                        An entrepreneur with enthusiast about the emerging
                        technologies and their cutting edge application in the
                        field of Renewable Energy, Cleantech, Digital
                        Agriculture. Supports companies and programs that
                        empowers the greater start-up community and future
                        generations of entrepreneurs.
                        <br />
                        Solid renewable energy development experience in India,
                        Africa, South East Asia and Middle East with exposure of
                        more than 1000 MW+ under IPP Business in Utility scale/
                        Rooftop Solar/Battery Storage and Corporate / CnI PPAs.
                        <br />
                        Over last 6 years negotiated and executed bankable PPA,
                        IA, TA with Ministry / Regulators and developed robust
                        solar project portfolio from origination to financial
                        closure to commissioning of solar projects.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input className="modal-state" id="polega" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="polega"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="polega"></label>
            <div>
              <div className="gtco-container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center gtco-heading topic">
                    <h2> Tim Polega </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center">
                      <img src={tim} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h3>
                        COO of Aramco Ventures with a $500 million Energy
                        Ventures has investment teams in China, Europe and the
                        US and $1 billion diversification fund{" "}
                        <strong>Prosperity 7</strong>. Aramco Ventures has
                        investment teams in China, Europe and The US.
                        <br />
                        Highly qualified executive with more than 20 years in
                        portfolio analysis, equity investment and project
                        development while successfully growing and managing
                        startup business and independent divisions.
                        <br />
                        Diverse background includes working in MSU's Engineering
                        department, plant superintendent of a tier 1 automotive
                        manufacturing facility, adjunct management professor at
                        Southwestern Michigan College, environmental consulting
                        and PV consulting Tim graduated from Michigan State
                        University (MSU) with a degree in electrical
                        engineering.
                        <br />
                        Over 12 years and more than 4GW of experience in the
                        renewable market: managing, engineering, EPC,
                        manufacturing, sales, development, structuring,
                        investing and global strategy. His positions include VP
                        of Engineering for a renewable energy developer,
                        VP/President of North and South America for Sharp
                        Electronics Renewables and as the managing head of the
                        Saudi Aramco renewable team leading 3 divisions
                      </h3>
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

export default about;
