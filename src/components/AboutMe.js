import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="goldgrad App">
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: "10px",
          width: "200px"
        }}
      >
        <li>
          <Link className="link" to="/">
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="active3" to="/aboutme">
            About Me{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/contactme">
            Contact Me{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
