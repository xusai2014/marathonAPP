
import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker'

import { AccountsClient } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import Loading from './loading.jsx';
import AppDrawer from './drawer.jsx';
import Avatar from 'material-ui/Avatar';

class Personal extends Component{
  
  render(){
    const x  = this.props.userInfo;
    console.log("this.props.readyStatus"+this.props.readyStatus);
      return(

        <div>
        <AppDrawer />
        <List>
          <ListItem disabled={true}  leftAvatar={<Avatar src="" />}
            primaryText={<span>{  Meteor.user().username }</span>}
          />
        </List>
        <h2>Groups</h2>
        {
         
          this.props.readyStatus ?
            <div>
              <ul>
                {
                  this.props.groups.length > 0?
                  this.props.groups.map(function(group){
                      return <li key={group.id} ><a  href={'/groups/'+group._id}>{group.groupName}</a></li>
                   })
                 : 
                  <div>There are no groups, please join a group</div>
                }
                </ul>
            </div>
          :
            <div><Loading /></div>
        }
       
        </div>
      );
  }
}

Personal.propTypes = {
  readyStatus: PropTypes.bool,
  userInfo:PropTypes.object,
  groups:PropTypes.array
}

export default createContainer(()=>{
  let articles = null;
  let id  = Meteor.userId();
  let sub = DDPCon.subscribe('groupsMarathon',id);
  let sub1 = DDPCon.subscribe('accountMarathon',"Tgj6Cpp59EfFDNaWr");
  return {
    readyStatus: sub1.ready(),
    userInfo:CCAccounts.findOne({userId:id}),
    groups:Groups.find({memberIds: id}).fetch()
  }              
},Personal);

