import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewHome from "./NewHome";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects"

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route path="/Resume" component={Resume} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    </Router>
  );
}
export default Routing;
