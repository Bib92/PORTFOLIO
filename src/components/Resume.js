import React from "react";
import { Link } from "react-router-dom";
import Bottom from './Bottom';
import MyResumeFile from "./MyResumeFile";

function Resume() {
  return (
    <div id="redgrad" className="App">
      <div className="resumeflex">
      <p className="resStuff">
          <a>MY RESUME</a>
        </p>
      <div className="navBar">
          <Link className="link" to="/">
            Home{" "}
          </Link>
          <Link className="active1" to="/resume">
            Resume
          </Link>
          <Link className="link" to="/aboutme">
            About Me{" "}
          </Link>
          <Link className="link" to="/contactme">
            Contact Me{" "}
          </Link>
          <Link className="link" to="/Projects">
            Projects{" "}
          </Link>
        </div>
        <div>
        <MyResumeFile/>
        <Bottom/>
        </div>
        </div>
    </div>
  );
}

export default Resume;
