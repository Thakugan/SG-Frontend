import React, { Component } from "react";
import axios from "axios";

class TeamStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    axios.get("http://54.147.204.57:5000/names").then(res => {
      this.setState({ names: res.data });
    });
  }

  teamSelected = event => {
    console.log("Team selected: " + event.target.value);
    this.setState({ team: event.target.value }, () => {
      this.updateDisplay();
    });
  };

  updateDisplay = () => {
    console.log(this.state.team);
    axios.get("http://54.147.204.57:5000/team/" + this.state.team).then(res => {
      this.setState({ stats: res.data });
      console.log(this.state.stats);
    });
  };

  render() {
    return (
      <div>
        <h2>Team Stats</h2>
        <form style={{ width: "50%" }}>
          <div className="form-group">
            <label htmlFor="team" />
            <select
              className="form-control"
              id="team"
              onChange={this.teamSelected}
            >
              <option>Select a Team</option>/>
              {this.state
                ? this.state.names.map(function(name) {
                    return (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
        </form>

        {this.state ? (
          this.state.stats ? (
            <div>
              <p>Team: {this.state.stats.team}</p>
              <p>
                Division: {this.state.stats.division} League:{" "}
                {this.state.stats.league}
              </p>
              <p>ORebs: {this.state.stats.ORebs}</p>
              <p>DRebs: {this.state.stats.DRebs}</p>
              <p>FG3: {this.state.stats.FG3}</p>
              <p>FTA: {this.state.stats.FTA}</p>
              <p>FGA: {this.state.stats.FGA}</p>
              <p>TO: {this.state.stats.TO}</p>
              <p>FT: {this.state.stats.FT}</p>
              <p>WL: {this.state.stats.WL}</p>
              <p>FGM: {this.state.stats.FGM}</p>
            </div>
          ) : null
        ) : null}
      </div>
    );
  }
}

export default TeamStats;