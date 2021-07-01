import React from 'react';

export default class EnglandTopScorers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scorer: []
    };

    this.getTopScorer2016 = this.getTopScorer2016.bind(this);
  }

  componentDidMount() {
    this.getTopScorer2016();
  }

  getTopScorer2016() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/england-top-scorers/2016', requestOptions)
      .then(response => response.json())
      .then(result => {

        const table = result.response;
        table.map((club, index) => {
          return (
            this.setState({ scorer: club })
          );
        });

      })
      .catch(error => console.error('error', error));

  }

  render() {
    const { scorer } = this.state;
    return (
      scorer.map((player, j) => {
        return (
          <h1 key={j}>player.name</h1>
        );
      })
    );
  }
}
