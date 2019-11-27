import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
//import Users from "./components/Users";
import About from "./components/About";
const Main = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Main>
);
export default Main;


