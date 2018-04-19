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

  teamsLeague = event => {
    if (event.target.value === "Men's Basketball")
      this.setState({league: "MBB"}, () => {this.setLeague(); });
    else
      this.setState({league: "WBB"}, () => {this.setLeague(); });   
  };

  setLeague = () => {
      console.log(this.state.league);
      if (this.state.league === "MBB"){
        axios.get("http://54.147.204.57:5000/MBB").then(res => {
          this.setState({ names: res.data });    
          this.setState({ comparison: null});
        });
      } else {
        axios.get("http://54.147.204.57:5000/WBB").then(res => {
          this.setState({ names: res.data }); 
          this.setState({ comparison: null });
        });
      }
        
  };

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
    axios.get("http://54.147.204.57:5000/team/" + this.state.league + "/" + this.state.team).then(res => {
      this.setState({ stats: res.data });
      this.setState({ percentageOne: 10});
      this.setState({ percentageTwo: 10});
      this.setState({ widthOne: this.state.percentageOne * 10 + "px"});
      this.setState({ widthTwo: this.state.percentageTwo * 10 + "px"});
      this.setState({ comparison: null});
    });
  };

  updateDisplay2 = () => {
    axios.get("http://54.147.204.57:5000/team/" + this.state.league + "/" + this.state.team2).then(res => {
      this.setState({ stats2: res.data });
      this.setState({ percentageOne: 10});
      this.setState({ percentageTwo: 10});
      this.setState({ widthOne: this.state.percentageOne * 10 + "px"});
      this.setState({ widthTwo: this.state.percentageTwo * 10 + "px"});
      this.setState({ comparison: null});
    });
  };

  teamCompare = event => {
    axios.get("http://54.147.204.57:5000/compare/" + this.state.team + "/" + this.state.team2
    + "/" + this.state.league).then(res => {
      this.setState({ comparison: res.data });
      var numbers = this.state.comparison.split(" ");
      
      this.setState({ percentageOne: parseInt(numbers[0])});
      this.setState({ percentageTwo: parseInt(numbers[1])});
      this.setState({ widthOne: this.state.percentageOne * 10 + "px"});
      this.setState({ widthTwo: this.state.percentageTwo * 10 + "px"});
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
                id="league"
                onChange={this.teamsLeague}
              >
                <option selected="true" disabled="disabled">Select Men or Women</option>
                <option>Men's Basketball</option>
                <option>Women's Basketball</option>
              </select>
            </div>
          </div>

          
          {this.state ? (
            this.state.league ? (
              <div class = "row" style= {{marginTop: "20px"}}>
                <div className="form-group">           
                    <label htmlFor="team" />
                    <select
                      className="form-control"
                      id="team"
                      onChange={this.teamSelected}
                    >
                      <option selected="true" disabled="disabled">Select First Team</option>/>
                      {this.state
                        ? this.state.names.map(function(name) {
                            return (
                              <option key={name.team} value={name.team}>
                                {name.team}
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
                      <option selected="true" disabled="disabled">Select Second Team</option>/>
                      {this.state
                        ? this.state.names.map(function(name) {
                            return (
                              <option key={name.team} value={name.team}>
                                {name.team}
                              </option>
                            );
                          })
                        : null}
                    </select>           
                </div>            
              </div>
            ) : null
        ) : null}      
          
          
        </form>
          <div class = "row">
            {this.state ? (
              this.state.stats ? (
                <div style = {{marginLeft: "15px"}}>
                  <h4>Team: {this.state.stats.team}</h4>
                  <p>
                    Division: {this.state.stats.division}                    
                  </p>
                  <p>
                    League: {this.state.stats.league}                    
                  </p>  
                  <p>
                    FG3: {this.state.stats.FG3}                    
                  </p>
                  <p>
                    TO: {this.state.stats.TO}                    
                  </p> 
                  <p>
                    WL: {this.state.stats.WL}                    
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
                  <p>
                    League: {this.state.stats2.league}                    
                  </p>  
                  <p>
                    FG3: {this.state.stats2.FG3}                    
                  </p>
                  <p>
                    TO: {this.state.stats2.TO}                    
                  </p> 
                  <p>
                    WL: {this.state.stats2.WL}                    
                  </p>                  
                  
                </div>
              ) : null
          ) : null}
        </div>
        {this.state ? (
            this.state.comparison ? (                
              <div>                
                <div style={{marginLeft: "60px",marginTop:"60px"}}>
                  <div style = {{ height:"50px",width:"50px",textAlign:"center",float:"left"}}>
                  {this.state.percentageOne}%
                  </div>
                  <div style = {{ height:"50px",width:"50px",textAlign:"center",float:"left",marginLeft:"900px"}}>
                  {this.state.percentageTwo}%
                  </div>
                  
                </div>
              </div> 
            ) : null

        ) : null}

        {this.state ? (
              this.state.stats2 ? (
                  this.state.stats ? (
                      <div>  
                        <button type="button" class="btn btn-dark"style = {{marginLeft: "490px", marginTop: "20px"}}
                        onClick={this.teamCompare}>
                          See this matchup
                        </button>
                        
                        <div style={{marginLeft: "60px",marginTop:"60px"}}>
                          <div style = {{background:"blue", height:"50px",width:this.state.widthOne, 
                          float:'left',textAlign:"center", fontSize:"75%",
                          webkitTransitionProperty: "width",webkitTransitionDuration: "1s"}}>
                          {this.state.stats.team}
                          </div>
                          <div style = {{background:"green", height:"50px",width:this.state.widthTwo,
                          float:'left',textAlign:'center',fontSize:"75%",
                          webkitTransitionProperty: "width",webkitTransitionDuration: "1s",
                          }}>
                          {this.state.stats2.team}
                          </div>
                        </div>
                      </div>  
                  ) : null
                  
              ) : null
          ) : null}

        

        
        
        
        
        
      </div>
    );
  }
}

export default TeamCompare;
