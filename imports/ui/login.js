
import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component{
  render(){
    //this.rootURL();
    return (
        <form onSubmit={this.authentication.bind(this)}>
          <input ref="username" type="text"/>
          <input ref="userpwd" type="password"/>
          <button id="login"></button>
        </form>
    );
  }
  // rootURL(){
  //   redirect to the root url
  //   FlowRouter.go('/');
  // }
  authentication(event){
    event.preventDefault();
    const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    const userpwd = ReactDOM.findDOMNode(this.refs.userpwd).value.trim();
    Meteor.loginWithPassword({username: username}, userpwd);

    const token = Accounts._storedLoginToken()
    console.log({token});
    Accounts.loginWithToken(token, (e) => {
      console.log(Accounts.user());
      this.render();
    });
  }
}
