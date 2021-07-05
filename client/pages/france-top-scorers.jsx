import React from 'react';

export default class FranceTopScorers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scorer: [],
      season: ''
    };

    this.getTopScorer2016 = this.getTopScorer2016.bind(this);
    this.getTopScorer2017 = this.getTopScorer2017.bind(this);
    this.getTopScorer2018 = this.getTopScorer2018.bind(this);
    this.getTopScorer2019 = this.getTopScorer2019.bind(this);
    this.getTopScorer2020 = this.getTopScorer2020.bind(this);
  }

  componentDidMount() {
    this.getTopScorer2020();
  }

  getTopScorer2016(event) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/france-top-scorers/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        table.map((club, index) => {
          return (
            this.setState({ scorer: table, season: '16/17' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2017(event) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/france-top-scorers/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        table.map((club, index) => {
          return (
            this.setState({ scorer: table, season: '17/18' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2018(event) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/france-top-scorers/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        table.map((club, index) => {
          return (
            this.setState({ scorer: table, season: '18/19' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2019(event) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/france-top-scorers/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        table.map((club, index) => {
          return (
            this.setState({ scorer: table, season: '19/20' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2020(event) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/france-top-scorers/2020', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        table.map((club, index) => {
          return (
            this.setState({ scorer: table, season: '20/21' })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  render() {
    const { scorer, season } = this.state;
    return (
      <div className="container-fluid england-container">
        <div className="row">
          <a href='#' className="text-secondary anchor">
            &lt; Back To League Page
          </a>
        </div>
        <div className="row">
          <div className="col-sm">
            <button className="france-button btn btn-sm" onClick={this.getTopScorer2016}>16/17</button>
            <button className="france-button btn btn-sm" onClick={this.getTopScorer2017}>17/18</button>
            <button className="france-button btn btn-sm" onClick={this.getTopScorer2018}>18/19</button>
            <button className="france-button btn btn-sm" onClick={this.getTopScorer2019}>19/20</button>
            <button className="france-button btn btn-sm" onClick={this.getTopScorer2020}>20/21</button>

          </div>

        </div>
        <div className="image-container text-center">
          <img className="league-image" src="https://4.bp.blogspot.com/-4LwsXxqR5wY/Xu9eHQlhwuI/AAAAAAACdf8/6uIxrhfUHnYpXzfqMwwkq--mOq7WxlNgQCNcBGAsYHQ/s550/ligue-1-logo-%25284%2529.png"></img>
        </div>
        <div className="table-responsive">
          <h5 className="france-header">{season} Top Scorers</h5>
          <table className="table table-bordered table-sm germany-table">
            <thead>
              <tr>
                <th scope="col">Player</th>
                <th scope="col">Club</th>
                <th scope="col">Apps</th>
                <th scope="col">Goals</th>
              </tr>
            </thead>
            <tbody>
              {
                scorer.map((info, j) => {
                  return (
                    <tr scope="row" key={j}>
                      <td>
                        <img className="team-logo" src={info.player.photo} />
                        {info.player.name}
                      </td>

                      <td>
                        <img className="team-logo" src={info.statistics.[0].team.logo} />
                        {info.statistics.[0].team.name}
                      </td>

                      <td>
                        {info.statistics.[0].games.appearences}
                      </td>

                      <td>
                        {info.statistics.[0].goals.total}
                      </td>

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
