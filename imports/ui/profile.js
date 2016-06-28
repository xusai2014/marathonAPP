
import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';


import { AccountsClient } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

import DDPcon from '../api/DDP.js';
class Personal extends Component{
  render(){
    const x  = this.props.userInfo;    
    return(
      <ul>
        <li id="">{x.username}</li>
        <li id="">{x._id}</li>
      </ul>
    );
  }
}

Personal.propTypes = {
  articles:PropTypes.array,
  userInfo:PropTypes.object
}

export default createContainer(()=>{
  const handle =  Meteor.subscribe('articlesAll');
  let articles = null;
  if(handle.ready()){
    articles = ArticlesLocal.find().fetch();
  }
  return {
    articles:articles,
    userInfo:Meteor.user(),
  }              
},Personal);

