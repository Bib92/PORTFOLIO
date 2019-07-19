import React from "react";
import { Link } from "react-router-dom";
// import BitLink from '';
function Home() {
  return (
    <div className="bluegrad App">
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: "10px",
          width: "200px"
        }}
      >
        <li>
          <Link className="active1" to="/">
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
          <Link className="link" to="/contactme">
            Contact Me{" "}
          </Link>
        </li>
      </ul>
      {/* <img src={BitLink} />   */}
        </div>
  );
}

export default Home;
