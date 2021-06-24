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
    let className = '';
    return (
    <div className="table-responsive">
        <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Name</th>
            <th scope="col">Win</th>
            <th scope="col">Loss</th>
            <th scope="col">Draw</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {
            england.map((info, j) => {
              if (info.rank === 1) {
                className = 'table-success';
              } else if (info.rank >= 2 && info.rank < 5) {
                className = 'table-primary';
              } else if (info.rank >= 18) {
                className = 'table-danger';
              } else {
                className = 'table-default';
              }
              return (
                <tr scope="row" key={j}>
                  <td className={className}>
                    {info.rank}

                    </td>
                  <td className={className}> {info.team.name}</td>
                  <td className={className}>{info.all.win}</td>
                  <td className={className}>{info.all.lose}</td>
                  <td className={className}>{info.all.draw}</td>
                  <td className={className}>{info.points}</td>
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
