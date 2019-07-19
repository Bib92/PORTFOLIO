import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Resume" component={Resume} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
    </Router>
  );
}
export default Routing;
