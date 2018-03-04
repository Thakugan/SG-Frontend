import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import TeamStats  from "./TeamStats.js"
import TeamCompare from "./TeamCompare.js"
import * as actions from "../actions";

const Landing = () => (
  <div>
    <p className="App-intro">
      The purpose of this demo site is to display working functionality of the
      Statgeek Analytics API. To get started, pick an action from below.
    </p>
    <div className="row">
      <div style = {{ marginLeft: "auto",marginRight:"auto",marginTop:"60px" }}>
        <Link to="/stats" className="btn btn-success" style = {{ margin: "30px",borderRadius: "20px",lineHeight: "3",fontSize: "2rem"}} >
          See Team Stats
        </Link>
      
        <Link to="/compare" className="btn btn-info" style = {{ margin: "30px",borderRadius: "20px",lineHeight: "3",fontSize: "2rem"}}>
          Compare Teams
        </Link>
      </div>
    </div>
  </div>
);

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
            <Route exact path="/stats" component={TeamStats} />
            <Route exact path="/compare" component={TeamCompare} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
