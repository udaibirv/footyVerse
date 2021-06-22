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
        table.map((club, index) => {
          return (
            this.setState({ england: club[index] })
          );
        });

        console.log(this.state);
      })
      .catch(error => console.log('error', error));

  }

  render() {
    return (
      <h1>hello</h1>
    );
    // const { england } = this.state;

    // const data = england.map((info, j) => {
    //   return (
    //     <div key={j}>
    //       <h1>info.team.name</h1>
    //     </div>
    //   );
    // });
    // return (
    //   <h1>Hello</h1>
    //   // england.map((club, index) => {
    //   //   return (
    //   //     <div key={index}>
    //   //       <h1>{club[index].team.name}</h1>
    //   //       {club.map((info, j) => {
    //   //         return (
    //   //       <div key={j}>
    //   //         <h2 key={j}>{info.team.name}</h2>
    //   //           <p>{info.rank}</p>
    //   //       </div>
    //   //         );
    //   //       })}
    //   //     </div>
    //   //   );
    //   // })
    // );
  }
}
