import React, { Component } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBuilding } from "@fortawesome/free-solid-svg-icons";
class contact extends Component {
  render() {
    return (
      <div id="page">
        <div className="gtco-section">
          <div style={{ marginTop: "15vh" }} className="gtco-container">
            <div className="row">
              <div
                style={{ marginBottom: "5vh" }}
                className="col-md-6 animate-box"
              >
                <h3>Get In Touch</h3>
                <form action="#">
                  <div className="row form-group">
                    <div style={{ marginLeft: "-15px" }} className="col-md-12">
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div style={{ marginLeft: "-15px" }} className="col-md-12">
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div style={{ marginLeft: "-15px" }} className="col-md-12">
                      <label className="sr-only" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Your subject of this message"
                      />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div style={{ marginLeft: "-15px" }} className="col-md-12">
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={6}
                        className="form-control"
                        placeholder="Write us something"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary btn-lg"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-6 animate-box">
                <div
                  className="col-md-12"
                  style={{ background: "rgb(91 192 222 / 10%)" }}
                >
                  <div className="gtco-contact-info">
                    <h3>Corporate Offices</h3>
                    <ul>
                      <li className="address">
                        <FontAwesomeIcon icon={faBuilding} />
                        &emsp;London, Mumbai, Delhi, Dubai
                      </li>
                      {/* <li class="phone"><a href="tel://1234567920">+ 1235 2355 98</a></li> */}
                      <li className="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        &emsp;
                        <a href="mailto:office@sunwaysglobal.com">
                          office@sunwaysglobal.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">&nbsp;</div>
                  <div className="gtco-contact-info">
                    <h3>Career</h3>
                    <ul>
                      <li className="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        &emsp;
                        <a href="mailto:office@sunwaysglobal.com">
                          Mail us your CV at office@sunwaysglobal.com
                        </a>
                      </li>
                    </ul>
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

export default contact;
