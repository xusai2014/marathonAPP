import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import { AccountsClient } from 'meteor/accounts-base'

export default class App extends Component {
  render() {
    return (
        <form onSubmit={this.authentication.bind(this)}>
          <input ref="username" type="text"/>
          <input ref="userpwd" type="password"/>
          <button id="login"></button>
        </form>
      );
  }
  authentication(event){
    event.preventDefault();
    const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    const userpwd = ReactDOM.findDOMNode(this.refs.userpwd).value.trim();

    
    Meteor.loginWithPassword({username: username}, userpwd);

    const token = Accounts._storedLoginToken()
    console.log({token});
    Accounts.loginWithToken(token, (e) => {
      console.log(Accounts.user());
    });
  }
}