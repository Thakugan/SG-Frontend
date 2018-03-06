import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class TeamStats extends Component {
  renderNames() {
    this.props.names = this.props.getTeamNames();
    alert(JSON.stringify(this.props.names));
    return <p>{this.props.names}</p>;
  }

  render() {
    return (
      <div>
        <h2>Team Stats</h2>
        {this.renderNames()}
      </div>
    );
  }
}

export default connect(null, actions)(TeamStats);
