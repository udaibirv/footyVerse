import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(){
    event.preventDefault()
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({user: data});
        console.log("data : ", data);
        window.location.hash('#league');
      })
  }



  render(){
    return (

      <div className=" bg-image-login">
        <div className="container-fluid">
          <div className="row form-row justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center text-center">
            <form className="auth-form">
              <div className="card text-center card-color">
                <h4 className="auth-header text-center">Create an Account</h4>
                <a href="#login">Already have an account?</a>
                <div className="auth-form-group mb-4">
                  <label className="auth-username" htmlFor="username">
                    Username
                  </label>
                  <input required id="username" type="text" name="username" onChange={this.handleChange}/>
                  </div>
                <div className="auth-form-group">
                  <label className="auth-password">
                    Password
                  </label>
                  <input required id="password" type="password" name="password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn auth-button">
                  Sign Up!
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
