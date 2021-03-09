import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Users from "./component/Users/Users";
import Navbar from "./Header/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDetail from "./component/UserDetail/UserDetail";
import NoMatch from "./component/NoMatch/NoMatch";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/users">
            <Users></Users>
          </Route>
          <Route path="/users/:id">
            <UserDetail></UserDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
