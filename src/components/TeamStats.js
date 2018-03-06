import React, { Component } from "react";
import * as actions from "../actions";

class TeamStats extends Component {
  render() {
    return (
      <div>
        <h2>Team Stats</h2>
        <p>Pick a team: </p>
        <div class="container row">
          <table class="table table-striped table-bordered fixed">
            <col width="100px" />
            <col width="100px" />
            <tbody>
              <tr>
                <td>Team</td>
                <td />
              </tr>
              <tr>
                <td>League</td>
                <td />
              </tr>
              <tr>
                <td>FGM</td>
                <td />
              </tr>
              <tr>
                <td>FG3</td>
                <td />
              </tr>
              <tr>
                <td>FGA</td>
                <td />
              </tr>
              <tr>
                <td>TO</td>
                <td />
              </tr>
              <tr>
                <td>FTA</td>
                <td />
              </tr>
              <tr>
                <td>FT</td>
                <td />
              </tr>
              <tr>
                <td>ORebs</td>
                <td />
              </tr>
              <tr>
                <td>DRebs</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TeamStats;
