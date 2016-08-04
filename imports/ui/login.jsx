import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import LoginFormValidation from '../validation.js'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {orange500, blue500} from 'material-ui/styles/colors';
/**
*Login component , display login form and judge login status
*****/


 class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: ""
    }
  }

  render(){
    
    return (
        <form onSubmit={this.authentication.bind(this)}>
          <span ref="errInfo">{this.state.error}</span>
          <br />
          <TextField hintText="Username Field"  
            floatingLabelText="Username" id="username"
          ref="username"  onClick={this.changeHandle.bind(this)}/><br />
          <TextField hintText="Password Field"  
             floatingLabelText="Password" id="password"
            ref="userpwd" type="password"  /><br />
          <FlatButton label="login" onClick={this.authentication.bind(this)}/>
           <FlatButton label="signup" onClick={this.signup.bind(this)}/>

        </form>
    );
  }
  changeHandle(event){
    event.preventDefault();
    this.setState({
      error:""
    });

  }
  signup(){
    FlowRouter.go('/signup');
  }
  
  authentication(event){

    event.preventDefault();
    const self  = this;
    const username = document.getElementById('username').value.trim();
    const userpwd = document.getElementById('password').value.trim();
    //const errAera = ReactDOM.findDOMNode(this.refs.errInfo).value.trim();
    let errInfo = username.indexOf('@') === -1 ? LoginFormValidation.username(username) : LoginFormValidation.email(username);
    //let validatedPassword = LoginFormValidation.password(userpwd, {validationLevel: "exists"});
    //errAera = errInfo ? errInfo.err : "";
    if(errInfo.error){
      self.setState({
        error: errInfo.reason
      });
      return;
    }
    
    Meteor.loginWithPassword({username: username}, userpwd,function(err){
      err && self.setState({
        error: err.reason
      });
    });

    const token = Accounts._storedLoginToken()
    console.log({token});
    Accounts.loginWithToken(token, (e) => {
      if(e){
        return;
      }
    });
  }
}

Login.propTypes = {
  errMsg: PropTypes.string
}

export default createContainer(()=>{
  return {
   
  }
},Login);