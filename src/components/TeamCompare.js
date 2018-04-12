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
    this.setState({ team: event.target.value }, () => {
      this.updateDisplay();
    });
  };

  teamSelected2 = event => {
    this.setState({ team2: event.target.value }, () => {
      this.updateDisplay2();
    });
  };

  updateDisplay = () => {
    axios.get("http://54.147.204.57:5000/team/" + this.state.team).then(res => {
      this.setState({ stats: res.data });
    });
  };

  updateDisplay2 = () => {
    axios.get("http://54.147.204.57:5000/team/" + this.state.team2).then(res => {
      this.setState({ stats2: res.data });
    });
  };

  teamCompare = event => {
    axios.get("http://54.147.204.57:5000/compare/" + this.state.team + "/" + this.state.team2
    + "/" + this.state.stats.league).then(res => {
      this.setState({ comparison: res.data });
    });
  };

  
  render() {
    
    return (
      <div>
        <h2>Team Comparison</h2>
        
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select League
          <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Men's Basketball</a></li>
            <li><a href="#">Women's Basketball</a></li>
          </ul>
        </div> 
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
                    Division: {this.state.stats.division}                    
                  </p>
                  
                </div>
              ) : null
          ) : null}

          
          {this.state ? (
              this.state.stats2 ? (
                <div style = {{marginLeft: "auto"}}>
                  <h4>Team: {this.state.stats2.team}</h4>
                  <p>
                    Division: {this.state.stats2.division}                    
                  </p>                  
                  
                </div>
              ) : null
          ) : null}
        </div>
        {this.state ? (
              this.state.stats2 ? (
                  this.state.stats ? (
                        <div>
                          <button type="button" class="btn btn-primary"style = {{marginLeft: "490px", marginTop: "20px"}}
                          onClick={this.teamCompare}>
                            See this matchup
                          </button>
                          

                        </div>
                        
                  ) : null
                  
              ) : null
          ) : null}

        {this.state ? (
            this.state.comparison ? (
                <p> 
                  {this.state.comparison}
                </p>
            ) : null

        ) : null}
      </div>
    );
  }
}

export default TeamCompare;
