import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";

import Index from "views/Index.jsx";
import Explore from "views/routes/Explore.jsx";
import Podcast from "views/routes/Podcast.jsx";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route path="/podcasts/explore" exact render={props => <Explore {...props} />} />
      <Route path="/podcasts/:podcast" render={props => <Podcast {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
