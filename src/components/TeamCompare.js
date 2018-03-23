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
                  <h4>Team: {this.state.stats.team}</h4>
                  <p>
                    Division: {this.state.stats.division} League:{" "}
                    {this.state.stats.league}
                  </p>
                  
                </div>
              ) : null
          ) : null}

          <h1 style={{ margin: "auto", fontSize: "300%" }}>VS</h1>
          {this.state ? (
              this.state.stats2 ? (
                <div style = {{marginLeft: "auto"}}>
                  <h4>Team: {this.state.stats2.team}</h4>
                  <p>
                    Division: {this.state.stats2.division} League:{" "}
                    {this.state.stats2.league}
                  </p>
                  
                </div>
              ) : null
          ) : null}
        </div>
      </div>
    );
  }
}

export default TeamCompare;
