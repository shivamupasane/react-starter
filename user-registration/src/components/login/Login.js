import React, { Component } from 'react'
import './Login.css'
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleUserInput(event) {
        const {name, value}= event.target;
        this.setState({[name]: value});
      }
     
      handleSubmit(event) {
        event.preventDefault();
      }
  render() {
    return (
      <div className="container-fluid">
      <div className="d-flex justify-content-center">
      <div className="col-lg-3 col-md-6">			
          <div className="card login-card mt-5">
            <div className="card-header">
              <h3 className="card-title">Sign in</h3>
           </div>
            <div className="card-body">
              <form acceptCharset="UTF-8" role="form" onSubmit = {this.handleSubmit}>
                      <fieldset>
                  <div className="form-group mb-3">
                  <input type="text" className="form-control" placeholder="Username" name="username" required  id="username" value={this.state.username} onChange={this.handleUserInput} />
                </div>
                <div className="form-group mb-3">
                <input type="password" id="password" className="form-control" placeholder="Password" required  name="password" value={this.state.password} onChange={this.handleUserInput} />
                </div>
                <input type="submit" className="btn btn-lg btn-success btn-block w-100"  value="Login" />			    		
              </fieldset>
                </form>
            </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default Login