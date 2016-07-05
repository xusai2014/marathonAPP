 import { Meteor } from 'meteor/meteor';
// import DDPClient from 'ddp';
// const DDPCon = DDP.connect("http://localhost:4000/");
// Articles  = new Meteor.Collection("Articles",{connection:DDPCon});
// ArticlesLocal = new Meteor.Collection("Articles");
Meteor.startup(function(){
  __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL="http://localhost:3000/"//Test url
  //__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL="https://www.microduino.cn/"//live
  // BrowserPolicy.content.allowConnectOrigin("https://www.microduino.cn");
  // BrowserPolicy.content.allowFrameOrigin("https://www.microduino.cn");
  // BrowserPolicy.content.allowOriginForAll("https://www.microduino.cn");

  // BrowserPolicy.content.allowConnectOrigin("www.microduino.cn");
  // BrowserPolicy.content.allowFrameOrigin("www.microduino.cn");
  // BrowserPolicy.content.allowOriginForAll("www.microduino.cn");
  // BrowserPolicy.content.allowEval();
  // BrowserPolicy.framing.disallow();
  
  // DDPCon.subscribe('articles',function(){
  //   Articles.find().observeChanges({
  //     added: function(id,doc){
  //         ArticlesLocal.insert(doc);
  //     }
  //   });
  // });
  // Meteor.publish('articlesAll',function(){
  //   return ArticlesLocal.find();
  // })
 }); 

// var ddpclient = null;
// Meteor.startup(() => {
//   // code to run on server at startup
//    ddpclient = new DDPClient({
//       // All properties optional, defaults shown
//       host : "www.microduino.cn",
//       port : 8000,
//       ssl  : true,
//       autoReconnect : true,
//       autoReconnectTimer : 500,
//       maintainCollections : true,
//       ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available
//       // uses the SockJs protocol to create the connection
//       // this still uses websockets, but allows to get the benefits
//       // from projects like meteorhacks:cluster
//       // (for load balancing and service discovery)
//       // do not use `path` option when you are using useSockJs
//       //useSockJs: true,
//       // Use a full url instead of a set of `host`, `port` and `ssl`
//       // do not set `useSockJs` option if `url` is used
//       url: 'wss://www.microduino.cn/websocket'
//     });
//     ddpclient.connect(function(error, wasReconnect) {
//       // If autoReconnect is true, this callback will be invoked each time
//       // a server connection is re-established
//       if (error) {
//         console.log('DDP connection error!');
//         return;
//       }

//       if (wasReconnect) {
//         console.log('Reestablishment of a connection.');
//       }

//       console.log('connected!');

//       setTimeout(function () {
//         /*
//          * Call a Meteor Method
//          */
       
//       }, 3000);
//     });
  
// });

// Meteor.methods({
//   'authentication':function(username,pwd){
//     if(ddpclient){
//        ddpclient.call(
//           'login',             // name of Meteor Method being called
//           [ { user : { email : username }, password : pwd }],            // parameters to send to Meteor Method
//           function (err, result) {   // callback which returns the method call results
//             console.log('called function, result: ' + JSON.stringify(result));
//             if(result){
//               ddpclient.subscribe('Accouts',[]);
//             }
//           });
//     }

//   }
// });