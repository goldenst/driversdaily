import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import DailyWork from "./components/pages/DailyWork";

import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import CallState from "./context/calls/CallState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import DailyWorkState from "./context/dailyWork/DailyWorkState";
import setAuthToken from "./utils/setAuthtoken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <CallState>
        <DailyWorkState>
          <AlertState>
            <Router>
              <Fragment>
                <Navbar />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/daily" component={DailyWork} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </DailyWorkState>
      </CallState>
    </AuthState>
  );
};

export default App;
