import { Meteor } from 'meteor/meteor';
const DDPCon = DDP.connect("http://localhost:4000/");
Articles  = new Meteor.Collection("Articles",{connection:DDPCon});
ArticlesLocal = new Meteor.Collection("Articles");
Meteor.startup(function(){
  
    DDPCon.subscribe('articles',function(){
      Articles.find().observeChanges({
        added: function(id,doc){
            ArticlesLocal.insert(doc);
        }
      });
    });
  if(Meteor.isServer){
    Meteor.publish('articlesAll',function(){
      return ArticlesLocal.find();
    })
  }
  
 
}); 