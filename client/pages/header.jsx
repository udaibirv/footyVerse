import React from 'react';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.handleSignOut = this.handleSignOut.bind(this);

  }

  handleSignOut(event) {
    window.localStorage.removeItem('token');
    this.setState({ user: null });
    window.location.hash = '';
  }

  render() {
    return (
      <img className="sign-out-image" src="https://www.iconpacks.net/icons/1/free-red-card-icon-460-thumb.png"onClick={this.handleSignOut} />
    );
  }
}
