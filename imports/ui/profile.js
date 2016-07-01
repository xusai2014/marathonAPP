
import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';


import { AccountsClient } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

class Personal extends Component{
  render(){
    const x  = this.props.userInfo;
    let groups = this.props.groups;
    return(
      <div>
      <ul>
        <li id="">{x.username}</li>
        <li id="">{x._id}</li>
      </ul>
      <h2>Groups</h2>
      <ul>
        { 
          this.props.groups.map(function(group){
            return <li key = {group.groupName}  ><a href={"/groups/"+group._id} >{group.groupName}</a></li>;
          }) 
        }
      </ul>
      </div>
    );
  }
  
}


Personal.propTypes = {
  articles:PropTypes.array,
  userInfo:PropTypes.object,
  groups:PropTypes.array
}

export default createContainer(()=>{
  let articles = null;
  let groups = null;
  let id  = Meteor.userId()
  articles = Articles.find().fetch();
  groups  = Groups.find({memberIds: id}).fetch();
  return {
    articles:articles,
    userInfo:Meteor.user(),
    groups:groups
  }              
},Personal);

