import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/places/places";
import Places from './core/places/places';
import Signup from './user/singup/Signup';
import Menuu from './core/menu/menu';
import Experience from './core/experiences/Experience';
import Provider from './core/provider/Provider';
import Signin from './user/signin/Signin';


const Routes = () => {

  return (
    <BrowserRouter>
      <Menuu />
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/places" exact component={Places} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/provider" exact component={Provider} />
        <Route path="/experiences" exact component={Experience} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;