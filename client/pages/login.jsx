import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSignIn() {
    event.preventDefault();
    fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        console.log('login-data: ', data);
      })
      .catch(err => {
        console.error(err);
        alert('Invalid login, please try again');
      });
  }

  render() {
    return (

      <div className="bg-image-login">
        <div className="container-fluid">
          <div className="row form-row justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center text-center">
              <form className="auth-form">
                <div className="card text-center">
                  <h4 className="auth-header text-center">Sign In</h4>
                  <div className="auth-form-group mb-4">
                    <label className="auth-username" htmlFor="username">
                      Username
                  </label>
                    <input required id="username" type="text" name="username" onChange={this.handleChange} />
                  </div>
                  <div className="auth-form-group">
                    <label className="auth-password">
                      Password
                  </label>
                    <input required id="password" type="password" name="password" onChange={this.handleChange} />
                  </div>
                  <button type="submit" className="btn auth-button">
                    Enter
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }

}
