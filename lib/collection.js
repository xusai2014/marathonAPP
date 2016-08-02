Schema = {};
/**
*Define the  roles  as below:
*    organizer, volunteer , competitor
*Every account will bind only one of APPRoles
**/
APPRoles =  new Meteor.Collection('userRoles');
Schema.ManagersSchema = new SimpleSchema({
  userId:{  
    type: String,
    autoValue: function(){
      if(this.isInsert){
        return JSON.stringify(Meteor.userId());
      }
    },
    denyUpdate:true
  },
  roles:{
    type:String,
    allowedValues:['organizer','volunteer','competitor']
  }
});

APPRoles.attachSchema(Schema.ManagersSchema);
APPRoles.allow({
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

/**
*Define the  competitions 
* status: whether the competition is over or not
* medal: award the team
* scarCode: 二维码 
* 
**/
Competitions = new Meteor.Collection('competition')
Schema.CompetitionsSchema = new SimpleSchema({
  groupId: {
    type : String,
  },
  status: {
    type: Boolean
  },
  descriptions: {
    type: String,
    optional:true,
  },
  createdAt:{
    type: Date,
    autoValue: function(){
      if(this.isInsert){
        return new Date();
      }
    }
  },
  beginAt:{
    type: Date,
    optional:true,
  },
  endAt:{
    type: Date,
    optional:true,
  },
  medal:{
    type: String,
    optional:true,
  },
  scarCode: {
    type: String,
    optional:true,
  }
});
Competitions.attachSchema(Schema.CompetitionsSchema);
Competitions.allow({
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
/**
* Define the  device 
**/
Devices =  new Meteor.Collection('device');
Schema.DevicesSchema = new SimpleSchema({
  deviceId:{
    type: String,
    autoValue: function(){
      if(this.isInsert){
        return Random.id()
      }
    }
  },
  descriptions: {
    type: String,
    optional:true,
  },
  type:{
    type: String,
  },
  wikiUrl: {
    type: String,
    optional:true,
  }
});
Devices.attachSchema(Schema.DevicesSchema);
Devices.allow({
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

/**
*定义比赛团队的设备申请表
* 
**/
ApplyList =  new Meteor.Collection('applyList');
Schema.ApplyListSchema = new SimpleSchema({
  teamId: {
    type: String
  },
  device: {
    type: [Object],
    optional: true
  },
  "device.$":{
    type: Object
  },
  "device.$.device":{
    type: Schema.DevicesSchema
  },
  "device.$.num":{
    type: Number
  }

});
ApplyList.attachSchema(Schema.ApplyListSchema);
ApplyList.allow({
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
/**
*定义比赛团队
* 
**/
Team = new Meteor.Collection('team');
Schema.TeamShcema = new SimpleSchema({
  id:{
    type: String,
    autoValue: function(){
      if(this.isInsert){
        return Random.id();
      }
    }
  },
  users: {
    type:[String],
    optional:true
  },
  descriptions:{
    type:String,
    optional: true
  },
  applyList: {
    type: Schema.ApplyListSchema,
    optional:true
  }
});
Team.attachSchema(Schema.TeamShcema);
Team.allow({
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
