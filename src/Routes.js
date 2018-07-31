import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipe/Recipe';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipes/:id" component={Recipes} />
    </Switch>
  </BrowserRouter>
)

export default Routes;