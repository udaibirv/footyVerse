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
        this.setState({ england: table });

        console.log(this.state.england);
      })
      .catch(error => console.log('error', error));

  }

  render() {
    const { england } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>

              {england.map((info, j) => {
                return (
                  info.map((club, x) => {
                    return (
                      <th key={x}>
                        <td>
                          {club.rank}
                        </td>
                      </th>
                    );
                  })
                );
              })
            }

          </tr>
        </tbody>
      </table>

    // england.map((club, index) => {
    //   return (
    //   <div key={index}>
    //     {club.map((info, j) => {
    //       return (
    //     <div key={info[j]}>
    //         <table className="table">
    //           <thead>

    //               <th scope="row">Position</th>
    //               {/* <th scope="col">Team</th>
    //               <th scope="col">Played</th>
    //               <th scope="col">Win</th>
    //               <th scope="col">Loss</th>
    //               <th scope="col">Draw</th>
    //               <th scope="col">GF</th>
    //               <th scope="col">GA</th>
    //               <th scope="col">Points</th> */}

    //           </thead>
    //           <tbody>

    //               <td scope="row">{info.rank}</td>
    //               {/* <td scope="row">{info.team.name}</td>
    //               <td scope="row">{info.all.played}</td>
    //               <td scope="row">{info.all.win}</td>
    //               <td scope="row">{info.all.lose}</td>
    //               <td scope="row">{info.all.draw}</td>
    //               <td scope="row">{info.all.goals.for}</td>
    //               <td scope="row">{info.all.goals.against}</td>
    //               <td scope="row">{info.points}</td> */}

    //           </tbody>
    //         </table>
    //     </div>
    //       );
    //     })}
    //   </div>
    //   );
    // })
    );
  }
}
