import React from 'react';
import Routes from './Routes';
import Menuu from './core/menu/menu';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/home/home";
import Places from './core/places/places';


class App extends React.Component {
  render(){

  return (
    <div>

      <Menuu />,
      <Routes/>
     
    </div>
  );
  }
}

export default App;
