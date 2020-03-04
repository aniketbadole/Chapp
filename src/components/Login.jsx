import React, { Component } from "react";
import { UsernameContext } from "../Contexts/Username";
import { navigate } from "@reach/router";

class Login extends Component {
  static contextType = UsernameContext;
  state = {
    username: ""
  };
  render() {
    return (
      <div className="Login-form">
        <h2>Login Page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          molestiae sapiente, sequi porro repudiandae fuga, facere consectetur
          odit fugiat earum excepturi iure et necessitatibus natus corrupti
          tempore sint quod eaque?
        </p>
        <form onSubmit={this.handleSubmit} className="Login-form-elements">
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <button>Login</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { changeUser } = this.context;
    const { username } = this.state;
    changeUser(username);
    navigate('/chat')
  };
}

export default Login;
