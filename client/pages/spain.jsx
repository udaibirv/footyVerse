import React from 'react';

export default class Spain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spain: [],
      season: ''
    };

    this.getSpainInfo2016 = this.getSpainInfo2016.bind(this);
    this.getSpainInfo2017 = this.getSpainInfo2017.bind(this);
    this.getSpainInfo2018 = this.getSpainInfo2018.bind(this);
    this.getSpainInfo2019 = this.getSpainInfo2019.bind(this);
    this.getSpainInfo = this.getSpainInfo.bind(this);
  }

  componentDidMount() {
    this.getSpainInfo();
  }

  getSpainInfo2016() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/spain/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ spain: club, season: '16/17' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getSpainInfo2017() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/spain/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ spain: club, season: '17/18' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getSpainInfo2018() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/spain/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ spain: club, season: '18/19' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getSpainInfo2019() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/spain/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ spain: club, season: '19/20' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getSpainInfo() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/spain', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ spain: club, season: '20/21' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  render() {
    const { spain, season } = this.state;
    let className = '';
    return (
      <div className="container-fluid">
        <div className="row">
          <a href='#' className="text-secondary anchor">
            &lt; Back To League Page
          </a>
        </div>
        <div className="row">
          <div className="col-sm">
            <button onClick={this.getSpainInfo2016}>16/17</button>
            <button onClick={this.getSpainInfo2017}>17/18</button>
            <button onClick={this.getSpainInfo2018}>18/19</button>
            <button onClick={this.getSpainInfo2019}>19/20</button>
            <button onClick={this.getSpainInfo}>20/21</button>

          </div>

        </div>
        <div className="image-container text-center">
          <img className="league-image" src="https://iscreativestudio.com/wp-content/uploads/2016/08/logotipos5.jpg"></img>
        </div>
        <div className="table-responsive table-responsive-md">
          <h5 className="table-header">{season} season</h5>
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Club</th>
                <th scope="col">Win</th>
                <th scope="col">Loss</th>
                <th scope="col">Draw</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {
                spain.map((info, j) => {
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
                      <td className={className}>
                        <img className="team-logo" src={info.team.logo} />
                        {info.team.name}
                      </td>
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
      </div>
    );
  }

}
