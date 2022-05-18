import React from "react";
import "./Slider.css";

function Slider(props) {
  React.useEffect(() => start(), []);

  function start() {
    var i = 1;
    function Move() {
      i = (i % 4) + 1; // 4 is the Number of image in slider
      document.getElementById("i" + i).checked = true;
    }
    setInterval(Move, 3000); //change img in 3 sec
  }
  return (
    <div>
      <div className="slider-container">
        <input type="radio" id="i1" name="images" defaultChecked />
        <input type="radio" id="i2" name="images" />
        <input type="radio" id="i3" name="images" />
        <input type="radio" id="i4" name="images" />
        <div className="slide_img" id="one">
          <img src="http://www.bhmpics.com/wallpapers/little_pony_art-800x480.jpg" />
          <label className="prev" htmlFor="i4">
            <span />
          </label>
          <label className="next" htmlFor="i2">
            <span />
          </label>
        </div>
        <div className="slide_img" id="two">
          <img src="https://preview.ibb.co/e5OShF/cropped_800_480_111290.jpg " />
          <label className="prev" htmlFor="i1">
            <span />
          </label>
          <label className="next" htmlFor="i3">
            <span />
          </label>
        </div>
        <div className="slide_img" id="three">
          <img src="http://wallpaperswide.com/download/up_house-wallpaper-1280x800.jpg" />
          <label className="prev" htmlFor="i2">
            <span />
          </label>
          <label className="next" htmlFor="i4">
            <span />
          </label>
        </div>
        <div className="slide_img" id="four">
          <img src="http://www.wallpapereast.com/static/images/toys-wallpaper-hd-16339-17046-hd-wallpapers.jpg" />
          <label className="prev" htmlFor="i3">
            <span />
          </label>
          <label className="next" htmlFor="i1">
            <span />
          </label>
        </div>
        <div id="nav_slide">
          <label htmlFor="i1" className="slider-dots" id="dot1" />
          <label htmlFor="i2" className="slider-dots" id="dot2" />
          <label htmlFor="i3" className="slider-dots" id="dot3" />
          <label htmlFor="i4" className="slider-dots" id="dot4" />
        </div>
      </div>
      <div className="yt">
        <a href="https://www.youtube.com/watch?v=z74ExMz-cWU" target="_blank">
          {" "}
          See Video
        </a>
      </div>
    </div>
  );
}

export default Slider;
