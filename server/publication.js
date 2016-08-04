/**Publish the  data from local **/


Meteor.publish('ManagerRole',function(id){
  return Managers.findOne({id:id});
})

Meteor.publish('deviceList',function(){
  return DevicesList.find();
})

Meteor.publish('applyList',function(id){
  return ApplyList.find({ownerId:id});
})
