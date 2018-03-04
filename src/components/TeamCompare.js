import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class TeamCompare extends Component {
  //   onComponentDidMount() {
  //     this.props.names = this.props.getTeamNames();
  //   }

  render() {
    return (
      <div>
        <h2>Team Comparison</h2>
        {/* <p>{this.props.names}</p> */}
      </div>
    );
  }
}

export default connect(null, actions)(TeamCompare);