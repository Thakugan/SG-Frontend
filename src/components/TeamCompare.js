import React, { Component } from "react";
import axios from "axios";
import PieChart from 'react-minimal-pie-chart';

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
      //console.log(this.state.league);
      if (this.state.league === "MBB"){
        axios.get("http://54.147.204.57:5000/MBB").then(res => {
          this.setState({ names: res.data });    
          this.setState({ comparison: null});
          this.setState({ percentageOne: ""});
          this.setState({ percentageTwo: ""});
          this.setState({ widthOne: "100px"});
          this.setState({ widthTwo: "100px"});
          this.setState({ sameTeams: false});
          this.setState({ team1Missing: false});
          this.setState({ team2Missing: false});
        });
      } else {
        axios.get("http://54.147.204.57:5000/WBB").then(res => {
          this.setState({ names: res.data }); 
          this.setState({ comparison: null });
          this.setState({ percentageOne: ""});
          this.setState({ percentageTwo: ""});
          this.setState({ widthOne: "100px"});
          this.setState({ widthTwo: "100px"});
          this.setState({ sameTeams: false});
          this.setState({ team1Missing: false});
          this.setState({ team2Missing: false});
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
      this.setState({ percentageOne: ""});
      this.setState({ percentageTwo: ""});
      this.setState({ widthOne: "100px"});
      this.setState({ widthTwo: "100px"});
      this.setState({ comparison: null});
      this.setState({ sameTeams: false});
      this.setState({ team1Missing: false});
      this.setState({ team2Missing: false});
    });
  };

  updateDisplay2 = () => {
    axios.get("http://54.147.204.57:5000/team/" + this.state.league + "/" + this.state.team2).then(res => {
      this.setState({ stats2: res.data });
      this.setState({ percentageOne: ""});
      this.setState({ percentageTwo: ""});
      this.setState({ widthOne: "100px"});
      this.setState({ widthTwo: "100px"});
      this.setState({ comparison: null});
      this.setState({ sameTeams: false});
      this.setState({ team1Missing: false});
      this.setState({ team2Missing: false});
    });
  };

  teamCompare = event => {
    //fails if two of the same team selected or either team is missing stats
    if (this.state.team === this.state.team2 ||
      (!this.state.stats.ORebs || !this.state.stats.DRebs || !this.state.stats.FG3
        || !this.state.stats.FTA || !this.state.stats.FGA || !this.state.stats.TO
        || !this.state.stats.FT || !this.state.stats.WL || !this.state.stats.FGM) ||
      (!this.state.stats2.ORebs || !this.state.stats2.DRebs || !this.state.stats2.FG3
        || !this.state.stats2.FTA || !this.state.stats2.FGA || !this.state.stats2.TO
        || !this.state.stats2.FT || !this.state.stats2.WL || !this.state.stats2.FGM)){

      if (this.state.team === this.state.team2)
        this.setState({ sameTeams: true}); 

      if (!this.state.stats.ORebs || !this.state.stats.DRebs || !this.state.stats.FG3
      || !this.state.stats.FTA || !this.state.stats.FGA || !this.state.stats.TO
      || !this.state.stats.FT || !this.state.stats.WL || !this.state.stats.FGM)
        this.setState({ team1Missing: true});

      if (!this.state.stats2.ORebs || !this.state.stats2.DRebs || !this.state.stats2.FG3
      || !this.state.stats2.FTA || !this.state.stats2.FGA || !this.state.stats2.TO
      || !this.state.stats2.FT || !this.state.stats2.WL || !this.state.stats2.FGM)
        this.setState({ team2Missing: true});
               
    } else { //else compare can be done
      this.setState({ sameTeams: false});
      this.setState({ team1Missing: false});
      this.setState({ team2Missing: false});

      axios.get("http://54.147.204.57:5000/compare/" + this.state.team + "/" + this.state.team2
      + "/" + this.state.league).then(res => {
        this.setState({ comparison: res.data });
        var numbers = this.state.comparison.split(" ");
        
        this.setState({ percentageOne: +numbers[0]});
        this.setState({ percentageTwo: +numbers[1]});
        this.setState({ widthOne: this.state.percentageOne * 10 + "px"});
        this.setState({ widthTwo: this.state.percentageTwo * 10 + "px"});
      });
    }
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
                
                <div className="form-group" style = {{marginLeft: "424px",marginTop:"1px"}}>           
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
                <div style = {{marginLeft: "15px", width:"300px"}}>
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
            this.state.stats ? (
              this.state.stats2 ? (
                <div>
                <h2 style={{marginLeft:"50px", color:"orange",
                fontSize:"200%", float:"left",width:"50px"}}>{this.state.percentageOne}</h2>
                <h2 style = {{float:"left",width:"50px",color:"orange"}}>%</h2>
                <h2 style={{marginLeft:"250px", color:"purple",
                fontSize:"200%", float:"left",width:"50px"}}>{this.state.percentageTwo}</h2>
                <h2 style = {{float:"left", width:"50px",color:"purple"}}>%</h2>
                <PieChart style={{width: "200px",height:"200px", marginLeft: "165px",marginTop:"10px"
              }}
               
                  data={[
                    { value: this.state.percentageOne, key: 1, color: 'orange' },
                    { value: this.state.percentageTwo, key: 2, color: 'purple' },
                  ]}
                  startAngle = {90}
                  />
                  </div>
              ): null
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

        {this.state.sameTeams ? (
        <div class="alert alert-danger" style = {{width: "50%", margin:"auto"}}>
          Please select different teams.
        </div>
        ) : null }

        {this.state.team1Missing ? (
        <div class="alert alert-danger" style = {{width: "50%", margin:"auto",marginTop:"5px"}}>
          It appears that {this.state.team} has one or more empty stats. Both teams must have 
          all stats available to see a matchup. Please select a different team.
        </div>
        ) : null }

        {this.state.team2Missing ? (
        <div class="alert alert-danger" style = {{width: "50%", margin:"auto",marginTop:"5px"}}>
          It appears that {this.state.team2} has one or more empty stats. Both teams must have 
          all stats available to see a matchup. Please select a different team.
        </div>
        ) : null }

        {this.state ? (
              this.state.stats2 ? (
                  this.state.stats ? (
                    <div>  

                    
                    <button type="button" class="btn btn-dark"style = {{marginLeft: "490px",marginTop:"50px"}}
                    onClick={this.teamCompare}>
                      See this matchup
                    </button>

                  </div> 
                      
                  ) : null
                  
              ) : null
          ) : null}

        

        
        
        
        
        
      </div>
    );
  }
}

export default TeamCompare;
