import React from "react";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <body className="redgrad App">
      <div>
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
            <Link className="active2" to="/resume">
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
      </div>
      <div class="paper">
      <div class="box">
        <h1>AUSTIN BURTON</h1>
        <p>
          austin.burton426@gmail.com | (801)205-6560 | 3213w GreenMesa Way, West
          Jordan, UT 84088
        </p>
      </div>
      <div class="h3box" > 
        <h2 class="gbox">PROFFESIONAL SUMMORY</h2>
        <p>
          Solution-driven professional excelling in highly collaborative work
          environment, finding solutions to challenges and focused on customer
          satisfaction. Proven experience developing consumer-focused web sites
          using HTML, CSS, React and JavaScript. Experience building products
          for desktop, phone and mobile app users, meeting highest standards for
          web design, user experience, best practices, usability and speed.
          Responding to challenges by designing and developing solutions and
          building web applications aligned to customer's services. Translating
          solutions into code and working across many different APIs,
          third-party integrations and databases.
        </p>
      </div>
      <div class="h3box" >
        <h2 class="gbox">SKILLS</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Fast Hands-on learner</li>
          <li>Ability to listen</li>
          <li>Critical thinker with Problem solving skills.</li>
          <li>Adamant eagerness to learn</li>
        </ul>
      </div>
      <div class="h3box">

        <h2 class="gbox">WORK HISTORY</h2>
        <div>
        <p1 class="boldText">
          Skilled Tradesman / Architectural Surfaces & Design - Murray, UT /
          12.2016-06.2019
        </p1>
        
        <ul style={{ listStyleType: "none" }}>
          <li>Build/Remodel just about anything residential and Commercial.</li>
          <li>
            Excellent problem solving and critical thinking skills, to approach
            problem and find the fastest, cleanest and most efficient way to
            solve it.
          </li>
          <li>
            Removed damaged portions of walls, walkways, partitions and other
            similar structures in preparation for repairs.
          </li>
          <li>
            Expertly utilized wide range of tools for: Construction/Re-modeling
            including Drill, Screwgun, Skill Saw, Table Saw, Grinder, Sawzall,
            Compressor and compressor tools, all types of Staples and Nail Guns,
            Concrete Saw, Jack Hammer, Compactor, Backhoe, Escavator, Skidsteer,
            Scizzor Lift, Genie Boom, Caulk, Paint, Routers, Sanders, etc.
          </li>
          <li>
            Read and interpreted drawings, plans and specifications to complete
            projects accurately.
          </li>
          <li>Ordered all parts, supplies and tools to complete jobs.</li>
          <li>
            Performed minor wall repair to maintain walls, including installing
            drywall and repairing and applying wallpaper.
          </li>
        </ul>
        </div>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
    </body>
  );
}

export default Resume;
