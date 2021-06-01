import { response } from "express";
import React from "react";

export default class LeagueInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      england : '',
      germany: '',
      france: '',
      spain: '',
      italy: ''
    }

    this.getEnglandInfo = this.getEnglandInfo.bind(this);
    this.getGermanyInfo = this.getGermanyInfo.bind(this);
  }

  componentDidMount(){
    this.getEnglandInfo();
  }


  getEnglandInfo(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england', requestOptions)
      .then(response => response.json())
      .then(result => {
        const flag = result.response[0].league.logo;
        this.setState({england: flag});
      })
      .catch(error => console.log('error', error));

  }

  getGermanyInfo(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/league-info/germany', requestOptions)
      .then(response => response.json())
      .then(result => {
        const germanFlag = result.response[0].league.logo;
        this.setState({germany: germanFlag});
      })
      .catch(error => console.log('error', error));
  }



  render(){
    const {state} = this.state;
    return (
      <div className="container">
        <a>
          <img src={state.england}></img>
        </a>

        <a>
          <img src={state.germany}></img>
        </a>
      </div>

    )
  }

  }
