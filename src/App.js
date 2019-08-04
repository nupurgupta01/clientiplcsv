import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">

        <h2>IPL Datasets</h2>
        <Header />
        <p className="App-intro">{this.state.apiResponse}</p>

      </div>
    );
  }
}

class Header extends Component {

  render() {
    
    var navlist= Array(8).fill(0).map((i,index)=>index+1)
    return (
      <div class="navbar">

        <div class="dropdown">
          <button class="dropbtn">Bowler Economy
       <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
          
        {
          navlist.map((value,index)=>{
           return <Link key={index+1} to={"/bowling/"+value}>Season {value}</Link>
          
            
        })}
          

          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Batsman Economy
      <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
          {
            navlist.map((value,index)=>{
             return <Link key={index+1} to={"/batsman/"+value}>Season {value}</Link>
            
              
          })}
          </div>
        </div>
      </div>


    )
  }
}
export default App;
