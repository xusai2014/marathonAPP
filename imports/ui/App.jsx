import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { AccountsClient } from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';

//import lightBaseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme ';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

import Personal from './profile.jsx';
import Login from './login.jsx';

 class App extends Component {
  
  render() {
      return (
            <MuiThemeProvider>
              <div>
                {
                  this.props.user ? 
                    <div>
                      <main>{this.props.content}</main>
                      <footer>From Jerry</footer>
                    </div>
                   :
                    <Login />
                }
              </div>
            </MuiThemeProvider>
      );
    
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
