import React, { Component } from 'react';

export default class England extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      england: []
    }
    this.getEnglandInfo = this.getEnglandInfo.bind(this);

  }


  componentDidMount(){
  this.getEnglandInfo();

  }



  getEnglandInfo() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        this.setState({england: table});

        console.log(table);
      })
      .catch(error => console.log('error', error));

  }

render(){
  const { england } = this.state;
  console.log('state :', england);
  return (
    <div className="col-12 col-md-6 col-lg-4">
      {england.map((club, index) => {
        return (
          <div key={club[index]}>
            <h1>{club[index].team.name}</h1>
          </div>

        )
      })}
    </div>


  );


}
}
