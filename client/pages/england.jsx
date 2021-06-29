import React from 'react';
export default class England extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      england: []
    };
    this.getEnglandInfo2016 = this.getEnglandInfo2016.bind(this);
    this.getEnglandInfo2017 = this.getEnglandInfo2017.bind(this);
    this.getEnglandInfo2018 = this.getEnglandInfo2018.bind(this);
    this.getEnglandInfo2019 = this.getEnglandInfo2019.bind(this);
    this.getEnglandInfo = this.getEnglandInfo.bind(this);

  }

  componentDidMount() {
    this.getEnglandInfo();

  }

  getEnglandInfo2016() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ england: club })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getEnglandInfo2017() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england/2017', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ england: club })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getEnglandInfo2018() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england/2018', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ england: club })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  getEnglandInfo2019() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england/2019', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            this.setState({ england: club })
          );
        });

      })
      .catch(error => console.error('error', error));

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

      })
      .catch(error => console.error('error', error));

  }

  render() {
    const { england } = this.state;
    let className = '';
    return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <button onClick={this.getEnglandInfo2016}>16/17</button>
            <button onClick={this.getEnglandInfo2017}>17/18</button>
            <button onClick={this.getEnglandInfo2018}>18/19</button>
            <button onClick={this.getEnglandInfo2019}>19/20</button>
            <button onClick={this.getEnglandInfo}>20/21</button>

          </div>

        </div>
      <div className="image-container text-center">
        <img className="league-image" src="https://www.egypttoday.com/siteimages/Larg/202012300620332033.jpg"></img>
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
                      <td className={className}>
                        <img className="team-logo" src={info.team.logo}/>
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
