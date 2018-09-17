import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Recipes from "./Components/Recipes/Recipe/Recipe";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipes/:id" component={Recipes} />
    </Switch>
  </HashRouter>
);

export default Routes;
