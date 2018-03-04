import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class TeamStats extends Component {
  //   onComponentDidMount() {
  //     this.props.names = this.props.getTeamNames();
  //   }

  render() {
    return (
  
      <div>
        <h2 style = {{textAlign: "center"}}>Team Stats</h2>
        {/* <p>{this.props.names}</p> */}
        <div class = "row">
        
        <div class="card" style= {{width: "400px", height:"400px"}}>
          <div class="card-body">
            <h4 class="card-title">Team 1</h4>  
          </div>
        </div>
        <table class="table table-striped table-bordered fixed" style = {{width: "500px", margin: "auto"}}>
          <col width="100px" />
          <col width="100px" />
          <tbody>
            <tr>
              <td>Team</td>
              <td></td>
            </tr>
            <tr>
              <td>League</td>
              <td></td>
            </tr>
            <tr>
              <td>FGM</td>
              <td></td>    
            </tr>
            <tr>
              <td>FG3</td>
              <td></td>
            </tr>
            <tr>
              <td>FGA</td>
              <td></td>
            </tr>
            <tr>
              <td>TO</td>
              <td></td>    
            </tr>
            <tr>
              <td>FTA</td>
              <td></td>
            </tr>
            <tr>
              <td>FT</td>
              <td></td>
            </tr>
            <tr>
              <td>ORebs</td>
              <td></td>    
            </tr>
            <tr>
              <td>DRebs</td>
              <td></td>
            </tr>
            
          </tbody>
        </table>


      </div>
    </div>
    );
  }
}

export default connect(null, actions)(TeamStats);

