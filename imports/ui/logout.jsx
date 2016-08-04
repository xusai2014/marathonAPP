import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Logout extends Component{
  render(){
    return (
        <button ref='logout' onClick={this.logout.bind(this)}></button>
    );
  }

  logout(event){
    let self = this;
    Meteor.logout(function(err) {
      let error  = err;
      self.rootURL()
    });

  }
  rootURL(){
    /**redirect to the root url**/
    FlowRouter.go('/');
  }
}
