import React from "react";
import { Link } from "react-router-dom";
import Bottom from './Bottom';
import Slidyboi from './Carousel';

function AboutMe() {
  return (
    <div id="goldgrad" className="App">
      <p className="pAbout">
          <a>WHO AM I??</a>
        </p>
      <div className="navBar">
          <Link className="link" to="/">
            Home{" "}
          </Link>
          <Link className="link" to="/resume">
            Resume
          </Link>
          <Link className="active1" to="/aboutme">
            About Me{" "}
          </Link>
          <Link className="link" to="/contactme">
            Contact Me{" "}
          </Link>
          <Link className="link" to="/Projects">
            Projects{" "}
          </Link>
          </div>
          <div className="meFlex">
          <div className="circular-border">
      <div className="circular-image"></div>
    </div>
  
          <div className="bio">Hi! My name is Austin. <br/>
          <br/>
          I am a highly motivated Full Stack Web Developer with a passion for creating, designing, 
          and building a piece of art. Whether it is designing and programming functional pixel perfect websites,
           woodworking and cabinetry, or even drawing with a paper and pen.  I love a finished project I can walk away from, 
           look back on, and be proud of.
            I was born and raised in Utah.   <br/> <br/>
             I love my state. I think it is absolutely beautiful and anyone who can, should come and visit at least once.
              I am very grateful for the nature in my backyard.   <br/>You can find me at the tops of the mountains!  I am very excited for my future in Tech and Web Development!
              <br/> <br/>See you out there! <br/> <br/>
          </div>
          </div>
          <Slidyboi/>
      <Bottom/>
    </div>
  );
}

export default AboutMe;
