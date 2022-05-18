import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer
      style={{
        background:
          "#2e3132",
      }}
      id="gtco-footer"
      role="contentinfo"
    >
      <div className="gtco-container footerBox">
        <div className="row row-p	b-md">
          <div className="col-md-4">
            <div className="gtco-widget">
              <h3>Links</h3>
              <ul className="gtco-footer-links">
                <li>
                  <a href="contact.html">Career</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="/">Terms of services</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gtco-widget">
              <ul className="gtco-footer-links">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/climatetech">Climate Tech</a>
                </li>
                <li>
                  <a href="/partners">Partners</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gtco-widget">
              <h3>Get In Touch</h3>
              <ul className="gtco-quick-contact">
                {/* <li><a href="/"><i class="icon-phone"></i> +1 234 567 890</a></li> */}
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &emsp; office@sunwaysglobal.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-md-12">
            <p className="pull-left">
              <small className="block">
                © 2020 Sunways Global. All Rights Reserved.
              </small>
            </p>
            <ul className="gtco-social-icons pull-right">
              <li>
                <a href="/">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="icon-linkedin" />
                </a>
              </li>
            </ul>            
          </div>
        </div>
      </div>
      <div className="gototop js-top">
        <a href="/" className="js-gotop">
          <i className="icon-arrow-up" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
