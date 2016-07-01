Managers =  new Meteor.Collection('userRoles');
ManagersSchema = new SimpleSchema({
  id:{  
    type: String,
    // autoValue: function(){
    //   if(this.isInsert){
    //     return Meteor.userId();
    //   }
    // },
    // denyUpdate:true
  },
  roles:{
    type:String,
  }
});

Managers.attachSchema(ManagersSchema);

Managers.allow({
  insert: function (userId, doc) {
    // Free-for-all!
    return false;
  },
  update: function (userId, doc, fields, modifier) {
    // Free-for-all!
    return false;
  },
  remove: function (userId, doc) {
    // Free-for-all!
    return false;
  }
});