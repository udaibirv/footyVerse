import React from 'react';

export default class Germany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      germany: []
    };

    this.getGermanyInfo2016 = this.getGermanyInfo2016.bind(this);
    this.getGermanyInfo2017 = this.getGermanyInfo2017.bind(this);
    this.getGermanyInfo2018 = this.getGermanyInfo2018.bind(this);
    this.getGermanyInfo2019 = this.getGermanyInfo2019.bind(this);
    this.getGermanyInfo2020 = this.getGermanyInfo2020.bind(this);
  }

  componentDidMount() {
    // this.getGermanyInfo2016();
    // this.getGermanyInfo2017();
    // this.getGermanyInfo2018();
    // this.getGermanyInfo2019();
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
            this.setState({ germany: club })
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
            this.setState({ germany: club })
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
            this.setState({ germany: club })
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
            this.setState({ germany: club })
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
            this.setState({ germany: club })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  render() {
    const { germany } = this.state;
    let className = '';
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <button onClick={this.getGermanyInfo2016}>16/17</button>
            <button onClick={this.getGermanyInfo2017}>17/18</button>
            <button onClick={this.getGermanyInfo2018}>18/19</button>
            <button onClick={this.getGermanyInfo2019}>19/20</button>
            <button onClick={this.getGermanyInfo2020}>20/21</button>

          </div>

        </div>
        <div className="image-container text-center">
          <img className="league-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png"></img>
        </div>
        <div className="table-responsive">
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
