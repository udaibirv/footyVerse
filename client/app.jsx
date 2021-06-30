import React from 'react';
import AuthForm from './pages/auth-form';
import Home from './pages/home';
import parseRoute from '../parse-route';
import Login from './pages/login';
import LeagueInfo from './pages/league-info';
import England from './pages/england';
import France from './pages/france';
import Germany from './pages/germany';
import Spain from './pages/spain';
import Italy from './pages/italy';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };

  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Italy />;
    }
    if (route.path === 'login') {
      return <Login/>;
    }
  }

  render() {
    return (
      this.renderPage()
    );

  }
}
