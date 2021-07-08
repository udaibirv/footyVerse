import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    event.preventDefault();
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data });
        console.log('data : ', data);
        window.location.hash('#league');
      });
  }

  render() {
    return (

      <div className="bg-image-login">
        <div className="container-fluid auth-container">
          <div className="row form-row justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center text-center">
            <form className="auth-form">

                <h3 className="auth-header text-center">Welcome to FootyVerse</h3>
                <h6 className="auth-header text-center">Please Create an Account to Enter</h6>
                <a className="link"href="#login">Already have an account?</a>
                <div className="auth-form-group">
                  <div className="label-div">
                  <label className="auth-username" htmlFor="username">
                    Username
                  </label>
                  </div>
                  <input required id="username" type="text" name="username" onChange={this.handleChange}/>
                  </div>
                <div className="auth-form-group">
                  <div className="label-div">
                  <label className="auth-password">
                    Password
                  </label>
                  </div>
                  <input required id="password" type="password" name="password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn auth-button">
                  Sign Up!
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
