import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

export default class England extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      england: []
    };
    this.getEnglandInfo = this.getEnglandInfo.bind(this);

  }

  componentDidMount() {
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
        this.setState({ england: table });

        console.log(table);
      })
      .catch(error => console.log('error', error));

  }

  render() {
    const { england } = this.state;
    return (
      <h1>Hello</h1>
      // england.map((club, index) => {
      //   return (
      //     <div key={index}>
      //       <h1>{club[index].team.name}</h1>
      //       {club.map((info, j) => {
      //         return (
      //       <div key={j}>
      //         <h2 key={j}>{info.team.name}</h2>
      //           <p>{info.rank}</p>
      //       </div>
      //         );
      //       })}
      //     </div>
      //   );
      // })
    );
  }
}
