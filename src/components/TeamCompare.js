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
          <h2 style = {{textAlign: "center"}}>Team Comparison</h2>
          <div class = "row">
          
          <div class="card" style= {{width: "400px", height:"400px", marginLeft:"auto",marginRight:"auto"}}>
            <div class="card-body">
              <h4 class="card-title">Team 1</h4>  
            </div>
          </div>
          <h1 style = {{margin: "auto", fontSize: "300%"}}>VS</h1>
          <div class="card" style= {{width: "400px", height:"400px", marginLeft:"auto",marginRight:"auto"}}>
            <div class="card-body">
              <h4 class="card-title">Team 2</h4>  
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default connect(null, actions)(TeamCompare);