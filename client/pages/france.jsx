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
    const className = '';
    return (
      <h1>Hello</h1>
    );
  }

}
