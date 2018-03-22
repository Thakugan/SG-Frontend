import React, { Component } from "react";
import axios from "axios";

class TeamCompare extends Component {
  
  constructor(props){
      super(props);
      this.state = {
        names: []
      }    
      
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

  teamSelected2 = event => {
    this.setState({ team2: event.target.value });
    axios.get("http://54.147.204.57:5000/team/" + this.state.team2).then(res => {
      this.setState({ stats2: res.data });
    });
  };

  
  render() {
    
    return (
      <div>
        <h2>Team Comparison</h2>
        
        <form class = "form-inline" style = {{ marginLeft: "15px", marginTop: "10px"}}>
          <div class = "row">
            <div className="form-group">           
                <label htmlFor="team" />
                <select
                  className="form-control"
                  id="team"
                  onChange={this.teamSelected}
                >
                  <option>Select First Team</option>/>
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
            
            <div className="form-group" style = {{marginLeft: "424px"}}>           
                <label htmlFor="team" />
                <select
                  className="form-control"
                  id="team"
                  onChange={this.teamSelected2}                
                >
                  <option>Select Second Team</option>/>
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
          </div>
        </form>
          <div class = "row">
            {this.state ? (
              this.state.stats ? (
                <div style = {{marginLeft: "15px"}}>
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
          {this.state ? (
              this.state.stats2 ? (
                <div style = {{marginLeft: "auto"}}>
                  <p>Team: {this.state.stats2.team}</p>
                  <p>
                    Division: {this.state.stats2.division} League:{" "}
                    {this.state.stats2.league}
                  </p>
                  <p>ORebs: {this.state.stats2.ORebs}</p>
                  <p>DRebs: {this.state.stats2.DRebs}</p>
                  <p>FG3: {this.state.stats2.FG3}</p>
                  <p>FTA: {this.state.stats2.FTA}</p>
                  <p>FGA: {this.state.stats2.FGA}</p>
                  <p>TO: {this.state.stats2.TO}</p>
                  <p>FT: {this.state.stats2.FT}</p>
                  <p>WL: {this.state.stats2.WL}</p>
                  <p>FGM: {this.state.stats2.FGM}</p>
                </div>
              ) : null
          ) : null}
        </div>
      </div>
    );
  }
}

export default TeamCompare;
