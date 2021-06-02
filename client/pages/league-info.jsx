
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
    this.getFranceInfo = this.getFranceInfo.bind(this);
    this.getSpainInfo = this.getSpainInfo.bind(this);
    this.getItalyInfo = this.getItalyInfo.bind(this);
  }

  componentDidMount(){
    this.getEnglandInfo();
    this.getGermanyInfo();
    this.getFranceInfo();
    this.getSpainInfo();
    this.getItalyInfo();
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

    fetch('/api/leauge-info/germany', requestOptions)
      .then(response => response.json())
      .then(result => {
        const germanFlag = result.response[0].league.logo;
        this.setState({germany: germanFlag});
      })
      .catch(error => console.log('error', error));
  }

  getFranceInfo(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/france', requestOptions)
      .then(response => response.json())
      .then(result => {
        const franceFlag = result.response[0].league.logo;
        this.setState({ france: franceFlag });
      })
      .catch(error => console.log('error', error));
  }

  getSpainInfo(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/spain', requestOptions)
      .then(response => response.json())
      .then(result => {
        const spainFlag = result.response[0].league.logo;
        this.setState({ spain: spainFlag });
      })
      .catch(error => console.log('error', error));
  }

  getItalyInfo(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/italy', requestOptions)
      .then(response => response.json())
      .then(result => {
        const italyFlag = result.response[0].league.logo;
        this.setState({ italy: italyFlag });
      })
      .catch(error => console.log('error', error));
  }



  render(){
    const {england, germany, france, spain, italy} = this.state;
    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12 col-md-6 col-lg-4">
            <a>
              <img src={england}></img>
            </a>
            <p>The English Premier Leauge is considered one of the most competitve leagues in the world. <br></br> With the largest contracts for televison rights in the world,
              a majority of the clubs in England's top flight have the financial ability to bring in quality players. <br></br>
              The most sucessfull team in the Premier Leauge is Manchester United, who dominated for the better part of 2 decades. <br></br>
              However, in recent years the West London club Chelsea and the other Manchester Club Manchester City have taken 10 Premier Leauge titles between them.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a>
              <img src={germany}></img>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a>
              <img src={france}></img>
            </a>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-6 col-lg-4">
            <a>
              <img src={spain}></img>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a>
              <img src={italy}></img>
            </a>
          </div>
        </div>
      </div>

    )
  }

  }
