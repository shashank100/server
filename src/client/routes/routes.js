import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "src/client/components/Home";
import NoMatch from "src/client/components/NoMatch";
import FAQ from "src/client/components/FAQ";

const Routes = () => {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact component={NoMatch} />
            </Switch>
        </Router>
    );
}

export default Routes;
