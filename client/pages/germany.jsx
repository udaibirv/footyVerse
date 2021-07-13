import React from 'react';

export default class Germany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      germany: [],
      season: ''
    };

    this.getGermanyInfo2016 = this.getGermanyInfo2016.bind(this);
    this.getGermanyInfo2017 = this.getGermanyInfo2017.bind(this);
    this.getGermanyInfo2018 = this.getGermanyInfo2018.bind(this);
    this.getGermanyInfo2019 = this.getGermanyInfo2019.bind(this);
    this.getGermanyInfo2020 = this.getGermanyInfo2020.bind(this);
  }

  componentDidMount() {
    this.getGermanyInfo2020();
  }

  getGermanyInfo2016() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/germany/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ germany: club, season: '16/17' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getGermanyInfo2017() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/germany/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ germany: club, season: '17/18' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getGermanyInfo2018() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/germany/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ germany: club, season: '18/19' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getGermanyInfo2019() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/germany/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ germany: club, season: '19/20' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getGermanyInfo2020() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/germany/2020', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ germany: club, season: '20/21' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  render() {
    const { germany, season } = this.state;
    let className = '';
    return (
      <div className="container-fluid">
        <div className="row">
          <a href='#league-page' className="text-secondary anchor">
            &lt; Back To League Page
          </a>
          <a href='#german-scorers' className="text-secondary anchor">
            Top Scorers &#62;
          </a>
        </div>
        <div className="row">
          <div className="col-sm">
            <button className="germany-button btn btn-sm" onClick={this.getGermanyInfo2016}>16/17</button>
            <button className="germany-button btn btn-sm" onClick={this.getGermanyInfo2017}>17/18</button>
            <button className="germany-button btn btn-sm" onClick={this.getGermanyInfo2018}>18/19</button>
            <button className="germany-button btn btn-sm" onClick={this.getGermanyInfo2019}>19/20</button>
            <button className="germany-button btn btn-sm" onClick={this.getGermanyInfo2020}>20/21</button>
          </div>
        </div>
        <div className="image-container text-center">
          <img className="league-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png"></img>
        </div>
        <div className="table-responsive">
          <h5 className="table-header german-header">{season} season</h5>
          <table className="table table-bordered table-sm german-table">
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
                germany.map((info, j) => {
                  if (info.rank === 1) {
                    className = 'table-success';
                  } else if (info.rank >= 2 && info.rank < 5) {
                    className = 'table-primary';
                  } else if (info.rank >= 16) {
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
                        <div>
                          {info.team.name}
                        </div>
                        <img className="team-logo" src={info.team.logo} />
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
