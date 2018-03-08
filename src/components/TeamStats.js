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
    this.setState({ team: event.target.value });
    axios.get("http://54.147.204.57:5000/team/" + this.state.team).then(res => {
      this.setState({ stats: res.data });
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
            <p>{JSON.stringify(this.state.stats)}</p>
          ) : null
        ) : null}
      </div>
    );
  }
}

export default TeamStats;
