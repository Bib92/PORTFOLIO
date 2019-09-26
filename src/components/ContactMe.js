import React from "react";
import { Link } from "react-router-dom";
import Bottom from './Bottom';



function ContactMe() {
  return (
    <div id="greengrad" className="App">
      <p className="pContact">
          <a>CONTACT ME</a>
        </p>
              <div className="navBar">

          <Link className="link" to="/">
            Home{" "}
          </Link>
          <Link className="link" to="/resume">
            Resume
          </Link>
          <Link className="link" to="/aboutme">
            About Me{" "}
          </Link>
          <Link className="active1" to="/contactme">
            Contact Me{" "}
          </Link>
          <Link className="link" to="/Projects">
            Projects{" "}
          </Link>
          </div>
          <div className="shadecc">
          <h1 className="cc" >Thank you for visiting my Web portfolio!</h1>
          <h2 className="cc" >Feel free to contact me with any comments, suggestions or questions.</h2>
          <ul className="contactList">
            <li>
              Email: austin.burton426@gmail.com
            </li>
            <li>
Phone: 8012056560
            </li>
            <li>
              <a href="https://github.com/austinBurton426">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/austinburton/">LinkedIn</a>
            </li>
            <li><a href="https://www.upwork.com/o/profiles/users/_~01709eb6154ae2dfa0/">
              UpWork</a></li>
          </ul>
          </div>
<Bottom/>
    </div>
  );
}

export default ContactMe;
