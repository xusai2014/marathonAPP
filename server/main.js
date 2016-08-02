 import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){

  /***Set up the connection of accounts***/
  __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = Meteor.settings.public.remoteConnection;
  
  
 }); 