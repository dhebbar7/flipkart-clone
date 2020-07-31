import React from "react";
import "./App.css";
import Header from "./component/header";
import Menu from "./component/menu";
import Banner from "./component/banner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <h1>Search result</h1>
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
        <Route path="/">
          <Header></Header>
          <Menu></Menu>
          <Banner></Banner>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
