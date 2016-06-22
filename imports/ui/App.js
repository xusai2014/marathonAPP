import React, { Component} from 'react';
import ReactDOM from 'react-dom';


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
    
   Meteor.call('authentication',username,userpwd);

  }
}