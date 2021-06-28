import React from 'react';
export default class France extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      france: []
    };
    this.getFranceInfo = this.getFranceInfo.bind(this);
  }

  componentDidMount() {
    this.getFranceInfo();
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
            this.setState({ france: club })
          );
        });

      })
      .catch(error => console.error('error', error));
  }

  render() {
    const { france } = this.state;
    let className = '';
    return (
      <div className="container-fluid">
        <div className="image-container text-center">
          <img className="league-image" src="https://4.bp.blogspot.com/-4LwsXxqR5wY/Xu9eHQlhwuI/AAAAAAACdf8/6uIxrhfUHnYpXzfqMwwkq--mOq7WxlNgQCNcBGAsYHQ/s550/ligue-1-logo-%25284%2529.png"></img>
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
