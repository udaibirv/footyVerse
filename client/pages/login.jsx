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
        window.location.hash('#league-page');
      })
      .catch(err => {
        console.error(err);
        alert('Invalid login, please try again');
      });
  }

  render() {
    return (

      <div className="bg-image-login ">
        <div className="container-fluid">
          <div className="row form-row justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center text-center">
              <h2 className="login-message sign-in text-center">Please Sign In</h2>
              <a className="link login-link " href="#">Create an Account!</a>
              <form className="auth-form login-form">
                  <div className="auth-form-group mb-4">
                    <div className="label-div">
                      <label className="auth-username" htmlFor="username">
                      Username
                      </label>
                    </div>
                    <input required id="username" type="text" name="username" onChange={this.handleChange} />
                  </div>
                  <div className="auth-form-group">
                    <div className="label-div">
                    <label className="auth-password">
                      Password
                  </label>
                  </div>
                    <input required id="password" type="password" name="password" onChange={this.handleChange} />
                  </div>
                  <button onClick={this.handleSignIn} type="submit" className="btn btn-primary auth-button">
                    Enter!
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }

}
