import { Meteor } from 'meteor/meteor';
DDPCon = DDP.connect(Meteor.settings.public.remoteConnection);


//DDP连接订阅Articles 存储本地
Articles  = new Meteor.Collection("Articles",{connection:DDPCon});
//ArticlesLocal = new Meteor.Collection("Articlesll");

Groups  = new Meteor.Collection("groups",{connection:DDPCon});
//GroupsLocal = new Meteor.Collection("groups");


Meteor.startup(function(){
  if(Meteor.isClient){
   //DDPCon.subscribe('groupsMarathon',function(){});
  }
}); 


