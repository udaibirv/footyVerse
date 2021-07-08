import React from 'react';

export default class SpainTopScorers extends React.Component {
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

  getTopScorer2016() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/spain-top-scorers/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        this.setState({ scorer: table, season: '16/17' });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2017() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/spain-top-scorers/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        this.setState({ scorer: table, season: '17/18' });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2018() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/spain-top-scorers/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        this.setState({ scorer: table, season: '18/19' });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2019() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/spain-top-scorers/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        this.setState({ scorer: table, season: '19/20' });

      })
      .catch(error => console.error('error', error));
  }

  getTopScorer2020() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/spain-top-scorers/2020', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        this.setState({ scorer: table, season: '20/21' });

      })
      .catch(error => console.error('error', error));

  }

  render() {
    const { scorer, season } = this.state;

    return (
      <div className="container-fluid england-container">
        <div className="row">
          <a href='#league-page' className="text-secondary anchor">
            &lt; Back To League Page
          </a>
        </div>
        <div className="row">
          <div className="col-sm">
            <button className="spain-button sixteen btn btn-sm" onClick={this.getTopScorer2016}>16/17</button>
            <button className="spain-button seventeen btn btn-sm" onClick={this.getTopScorer2017}>17/18</button>
            <button className="spain-button eighteen btn btn-sm" onClick={this.getTopScorer2018}>18/19</button>
            <button className="spain-button nineteen btn btn-sm" onClick={this.getTopScorer2019}>19/20</button>
            <button className="spain-button twenty btn btn-sm" onClick={this.getTopScorer2020}>20/21</button>

          </div>

        </div>
        <div className="image-container text-center">
          <img className="league-image" src="https://iscreativestudio.com/wp-content/uploads/2016/08/logotipos5.jpg"></img>
        </div>
        <div className="table-responsive">
          <h5 className="spain-header">{season} Top Scorers</h5>
          <table className="table table-bordered table-sm spain-table">
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
                        <div>
                          {info.player.name}
                        </div>
                        <img className="team-logo" src={info.player.photo} />

                      </td>

                      <td>
                        <div>
                          {info.statistics.[0].team.name}
                        </div>
                        <img className="team-logo" src={info.statistics.[0].team.logo} />

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
