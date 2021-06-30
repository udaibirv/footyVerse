import React from 'react';
export default class France extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      france: [],
      season: ''
    };
    this.getFranceInfo2016 = this.getFranceInfo2016.bind(this);
    this.getFranceInfo2017 = this.getFranceInfo2017.bind(this);
    this.getFranceInfo2018 = this.getFranceInfo2018.bind(this);
    this.getFranceInfo2019 = this.getFranceInfo2019.bind(this);
    this.getFranceInfo = this.getFranceInfo.bind(this);

  }

  componentDidMount() {
    this.getFranceInfo();
    this.getFranceInfo2016();
  }

  getFranceInfo2016(event) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/france/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ france: club, season: '16/17' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getFranceInfo2017() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/france/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ france: club, season: '17/18' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getFranceInfo2018() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/france/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ france: club, season: '18/19' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getFranceInfo2019() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/france/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ france: club, season: '19/20' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getFranceInfo() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/france', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ france: club, season: '20/21' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  render() {
    const { france, season } = this.state;

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
            <button className="btn-info" onClick={this.getFranceInfo2016}>16/17</button>
            <button className="btn-info" onClick={this.getFranceInfo2017}>17/18</button>
            <button className="btn-info" onClick={this.getFranceInfo2018}>18/19</button>
            <button className="btn-info" onClick={this.getFranceInfo2019}>19/20</button>
            <button className="btn-info" onClick={this.getFranceInfo}>20/21</button>

          </div>

        </div>

        <div className="image-container text-center">
          <img className="league-image" src="https://4.bp.blogspot.com/-4LwsXxqR5wY/Xu9eHQlhwuI/AAAAAAACdf8/6uIxrhfUHnYpXzfqMwwkq--mOq7WxlNgQCNcBGAsYHQ/s550/ligue-1-logo-%25284%2529.png"></img>
        </div>

        <div className="table-responsive">
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
                france.map((info, j) => {
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
