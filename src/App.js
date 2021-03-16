import React, { createContext, useState } from "react";
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
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

export const userContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <PrivateRoute exact path="/users">
            <Users></Users>
          </PrivateRoute>
          <PrivateRoute path="/users/:id">
            <UserDetail></UserDetail>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default App;
