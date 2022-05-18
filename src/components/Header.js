import React from "react";

function Header(props) {
  return (
    <div id="gtco-header" className={`gtco-cover ${props.home}`} role="banner">
      <div
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundPosition: props.position,
          filter: "brightness(0.9)",
        }}
        className="overlay"
      />
      <div className="gtco-container">
        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center">
            <div className={`display-t ${props.home}`}>
              <div className="display-tc">
                <h1
                  style={{
                    marginBottom: "15px",
                    fontWeight: "600",
                    textShadow: "0px 1px #000000",
                  }}
                >
                  {props.title}
                </h1>
                {props.subtitle ? (
                  <h2
                    style={{
                      color: "white",
                      fontSize: "40px",
                      textShadow: "0px 1px #000000",
                    }}
                  >
                    {props.subtitle}
                  </h2>
                ) : null}
                <p
                  style={{ display: `${props.button}` }}
                  className="animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <a
                    href={props.link}
                    className="btn btn-white btn-lg btn-outline"
                  >
                    Get In Touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
