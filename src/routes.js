import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Main from "./Main";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/main/:access_token?&:token_type" component={Main} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
