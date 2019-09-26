import React from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";

function Projects() {
  return (
    <div id="goldgrad" className="App">
      <p className="pred">
          <a>MY PROJECTS</a>
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

        <Link className="link" to="/contactme">
          Contact Me{" "}
        </Link>

        <Link className="active1" to="/Projects">
          Projects{" "}
        </Link>
      </div>

      <a href="https://cocktail-sorti-boi.herokuapp.com/">
      <p className="project">cockTailSort()</p>
      </a>
      <div className="cocktail"></div>
      
        <a href="https://austins-pokedex.herokuapp.com/">
          <p className="project">pokedex()</p>
          </a>
          <div className="pokedex"></div>
      <Bottom />
    </div>
  );
}

export default Projects;
