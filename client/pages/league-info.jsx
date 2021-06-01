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
  }

  componentDidMount(){
    this.getEnglandInfo();
  }


  getEnglandInfo(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info', requestOptions)
      .then(response => response.json())
      .then(result => {
        const flag = result.response[0].league.logo;
        this.setState({england: flag});
      })
      .catch(error => console.log('error', error));



  }

  render(){
    const {england} = this.state;
    return (
      <a>
        <img src={england}></img>
      </a>
    )
  }

  }
