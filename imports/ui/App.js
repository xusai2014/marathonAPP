import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { AccountsClient } from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';

import Personal from './profile.js';
import Login from './login.js';
import Logout from './logout.js';
 class App extends Component {
  render() {
    if(this.props.user){
      return (
        <div>
        <header><h1>Marathon</h1></header>
        <Logout />
        <main>{this.props.content}</main>
        <footer>From Jerry</footer>
        </div>
      );
    } else{
      return (
        <Login />
      );
    }
  }
}

App.propTypes={
  user:PropTypes.object,
  content:PropTypes.object
};

export default createContainer(({content}) =>{
  return {
    user:Meteor.user(),
    content:content
  }
},App);
