import React from "react";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div className="greengrad App">
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
          <Link className="link" to="/aboutme">
            About Me{" "}
          </Link>
        </li>
        <li>
          <Link className="active4" to="/contactme">
            Contact Me{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
