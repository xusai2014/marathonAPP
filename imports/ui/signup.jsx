import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import LoginFormValidation from '../validation.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ItemDrawer from './itemDrawer.jsx';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


import AppBar from 'material-ui/AppBar';

import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back.js';


class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      error:"",
      errusername:"",
      erremail:"",
      errpwd:"",
      errconfirm:""
    }
  }

  render(){
    
    return (
      <MuiThemeProvider>
        <div>
       <IconButton onClick={this.backHistory.bind(this)}><NavigationArrowBack /></IconButton>
          
    
        <form onSubmit={this.signup.bind(this)}>
          <span ref="errInfo">{this.state.error}</span>
          <br />
          <TextField hintText="Username Field"  
            floatingLabelText="Username" id="username"
            errorText = {this.state.errusername}
          ref="username"  onClick={this.changeHandle.bind(this)}/><br />
          <TextField hintText="email Field"  
            floatingLabelText="email" id="email" type="email"
            errorText = {this.state.erremail}
          ref="username"  onClick={this.changeHandle.bind(this)}/><br />
          <TextField hintText="Password Field"  
             floatingLabelText="Password" id="password"
             errorText = {this.state.errpwd} onClick={this.changeHandle.bind(this)}
            ref="userpwd" type="password"  /><br />
          <TextField hintText="Password Field"  
            errorText = {this.state.errconfirm} onClick={this.changeHandle.bind(this)}

             floatingLabelText="Password" id="confirmpassword"
            ref="userpwd" type="password"  /><br />
           <FlatButton label="signup" onClick={this.signup.bind(this)}/>

        </form>
        </div>
        </MuiThemeProvider>
    );
  }
  changeHandle(event){
    event.preventDefault();
    this.setState({
      error:"",
      errusername:"",
      erremail:"",
      errpwd:"",
      errconfirm:""
    });

  }
  signup(event){
  

    event.preventDefault();
    const self  = this;
    const username = document.getElementById('username').value.trim();
    const userpwd = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmpassword = document.getElementById('confirmpassword').value.trim();
    //const errAera = ReactDOM.findDOMNode(this.refs.errInfo).value.trim();
    let errusername = LoginFormValidation.username(username)
     let erremail = LoginFormValidation.email(email)
    let errpwd =  LoginFormValidation.password(userpwd);
    let errconfirm = userpwd !== confirmpassword ? "Please confirm the password" :'';
    //let validatedPassword = LoginFormValidation.password(userpwd, {validationLevel: "exists"});
    //errAera = errInfo ? errInfo.err : "";
    if(errusername || erremail || errpwd || errconfirm){
      self.setState({
        errusername: errusername.reason ? errusername.reason : "",
        erremail: erremail.reason ? erremail.reason : "",
        errpwd: errpwd.reason ? errpwd.reason : "",
        errconfirm: errconfirm ? errconfirm : ""
      });
      return;
    }
    let newUserData = {
      username: username,
      email: email,
      password: userpwd
    };

    Accounts.createUser(newUserData, function (error) {
      if (error) {
        // Show some error message
      self.setState({
        error:error.reason
      })
      } else {
        FlowRouter.go('/');
      }
    });

    
  }
  backHistory(){
    window.history.back();
  }
}

Signup.propTypes = {
  errMsg: PropTypes.string
}

export default createContainer(()=>{
  return {
   
  }
},Signup);