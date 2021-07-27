import React from 'react';

export default class Italy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      italy: [],
      season: ''
    };
    this.getItalyInfo2016 = this.getItalyInfo2016.bind(this);
    this.getItalyInfo2017 = this.getItalyInfo2017.bind(this);
    this.getItalyInfo2018 = this.getItalyInfo2018.bind(this);
    this.getItalyInfo2019 = this.getItalyInfo2019.bind(this);
    this.getItalyInfo2020 = this.getItalyInfo2020.bind(this);

  }

  componentDidMount() {
    this.getItalyInfo2020();

  }

  getItalyInfo2016() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/italy/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ italy: club, season: '16/17' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getItalyInfo2017() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/italy/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ italy: club, season: '17/18' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getItalyInfo2018() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/italy/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ italy: club, season: '18/19' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getItalyInfo2019() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/italy/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ italy: club, season: '19/20' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getItalyInfo2020() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/italy/2020', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ italy: club, season: '20/21' })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  render() {
    const { italy, season } = this.state;
    let className = '';
    return (
      <div className="container-fluid">
        <div className="row">
          <a href='#league-page' className="text-secondary anchor">
            &lt; Back To League Page
          </a>
          <a href='#italy-scorers' className="text-secondary anchor">
            Top Scorers &#62;
          </a>
        </div>
        <div className="row">
          <div className="col-sm">
            <button className="italy-button btn btn-sm" onClick={this.getItalyInfo2016}>16/17</button>
            <button className="italy-button btn btn-sm" onClick={this.getItalyInfo2017}>17/18</button>
            <button className="italy-button btn btn-sm" onClick={this.getItalyInfo2018}>18/19</button>
            <button className="italy-button btn btn-sm" onClick={this.getItalyInfo2019}>19/20</button>
            <button className="italy-button btn btn-sm" onClick={this.getItalyInfo2020}>20/21</button>
          </div>
        </div>
        <div className="image-container text-center">
          <img className="league-image" src="https://www.soccerbible.com/media/93701/1-serie-a-logo-new.jpg"></img>
        </div>
        <div className="table-responsive">
          <h5 className="italy-header">{season} season</h5>
          <table className="table table-bordered table-sm italy-table">
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
                italy.map((info, j) => {
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
