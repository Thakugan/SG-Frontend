import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

const Landing = () => (
  <div>
    <p className="App-intro">
      The purpose of this demo site is to display working functionality of the
      Statgeek Analytics API. To get started, pick an action from below.
    </p>
    <div className="row mt-5">
      <Link to="/team" className="btn btn-dark" style={{ margin: "0 10px" }}>
        See Team Stats
      </Link>
    </div>
  </div>
);
const Team = () => <h2>Team</h2>;

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Link to="/">
              <header className="App-header mt-5">
                <h1 className="App-title" style={{ color: "black" }}>
                  Statgeek Analytics Demo
                </h1>
              </header>
            </Link>
            <Route exact path="/" component={Landing} />
            <Route exact path="/team" component={Team} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
