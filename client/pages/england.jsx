import { info } from 'loglevel';
import React, { useState, useEffect } from 'react';
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
            this.setState({ england: club })
          );
        });

        console.log(this.state.england);
      })
      .catch(error => console.log('error', error));

  }

  render() {
    const { england } = this.state;
    return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Name</th>
            <th scope="col">Played</th>
            <th scope="col">Win</th>
            <th scope="col">Loss</th>
            <th scope="col">Draw</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {
            england.map((info, j) => {
              return (
                <tr scope="row" key={j}>
                  <td>{info.rank}</td>
                  <td> {info.team.name}</td>
                  <td>{info.all.played}</td>
                  <td>{info.all.win}</td>
                  <td>{info.all.lose}</td>
                  <td>{info.all.draw}</td>
                  <td>{info.all.goals.for}</td>
                  <td>{info.all.goals.against}</td>
                  <td>{info.points}</td>
                </tr>
              );
            })
          }

        </tbody>
      </table>
    </div>
    );
  }
}
