import React from "react";
import { Link } from "react-router-dom";
import "../../src/CSS/Card.css";
import NewModal from "./config/NewModal";
import ClickMeModal from "./ClickMeModal";
import Bottom from "./Bottom";
import Welcome from "./Welcome"

class NewHome extends React.Component {
  
  render() {
    return (
      <div id="Homie" className=" stretch App">
        <body className="spaceHeight">
        <p className="p">
          <a className="webPort">AUSTIN'S WEB PORTFOLIO</a>
        </p>
        <div className="navBar webPort">
          <Link className="active1" to="/">
            Home{" "}
          </Link>
          <Link className="link" to="/resume">
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
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div>
          <div>
            <div className="right talk-bubble tri-right border btm-right-in">
              <div className="talktext">
                <div className="clickMeText">Click Me!!!</div>
              </div>
            </div>
          </div>
          <NewModal modalClass="monster">
            <ClickMeModal />
          </NewModal>
        </div>
        <Welcome className=""WayBack/>
        <Bottom/>
        </body>
      </div>
    );
  }
}

export default NewHome;
