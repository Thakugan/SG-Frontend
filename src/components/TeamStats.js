import React, { Component } from "react";

class TeamStats extends Component {
  teamNames() {}

  render() {
    return (
      <div>
        <h2>Team Stats</h2>
        <div class="dropdown">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            Pick a team
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Team 1</a>
            <a class="dropdown-item" href="#">Team 2</a>
            <a class="dropdown-item" href="#">Team 3</a>
          </div>
        </div> 

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
                <td>Division</td>
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
              <tr>
                <td>WL</td>
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
