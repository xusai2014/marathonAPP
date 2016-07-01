import { Meteor } from 'meteor/meteor';
const DDPCon = DDP.connect("http://localhost:3000/");


//DDP连接订阅Articles 存储本地
Articles  = new Meteor.Collection("Articles",{connection:DDPCon});
//ArticlesLocal = new Meteor.Collection("Articlesll");

Groups  = new Meteor.Collection("groups",{connection:DDPCon});
//GroupsLocal = new Meteor.Collection("groups");


Meteor.startup(function(){
  if(Meteor.isClient){
    DDPCon.subscribe('articles',function(){
      console.log("Subscribe Artilces successfully!!!");
    });
  
    const userId = Meteor.userId() ? Meteor.userId():"";
    DDPCon.subscribe('groupsMarathon',userId,function(){
     console.log("Subscribe Groups successfully!!!");
    });
  }
}); 