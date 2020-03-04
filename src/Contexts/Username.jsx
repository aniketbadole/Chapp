import React, { Component, createContext } from "react";
export const UsernameContext = createContext();

class UsernameContextProvider extends Component {
  state = {
    username: ""
  };

  changeUser = username => {
    this.setState({ username: username });
  };
  render() {
    return (
      <UsernameContext.Provider
        value={{ ...this.state, changeUser: this.changeUser }}
      >
        {this.props.children}
      </UsernameContext.Provider>
    );
  }
}

export default UsernameContextProvider;
