import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      username: '',
      password: ''

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

  handleSubmit(event) {
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
        this.setState({ data });
        window.location.hash = '#league-page';
      });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (

      <div className="bg-image-login">
        <div className="container-fluid auth-container">
          <div className="row form-row justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center text-center">
              <h2 className="auth-header welcome-message text-center">Welcome to FootyVerse</h2>
              <a className="link " href="#login">
                <button type="button" className="btn btn-sm btn-primary ">Already Have an Account?</button>
              </a>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-form-group">
                  <div className="label-div">
                  <label className="auth-username" htmlFor="username">
                    Username
                  </label>
                  </div>
                  <input required id="username" type="text" name="username" onChange={handleChange}/>
                  </div>
                <div className="auth-form-group">
                  <div className="label-div">
                  <label className="auth-password">
                    Password
                  </label>
                  </div>
                  <input required id="password" type="password" name="password" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary auth-button">
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
