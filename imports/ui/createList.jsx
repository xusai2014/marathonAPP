import React,{PropTypes} from "react";
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Loading from './loading.jsx';

 class DeviceList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      list:{
        ownerId:Meteor.userId(),
        name:'',
        school:'',
        lists:{}
      }
    }
  }
  render(){
    /**<li key> is to solve some warnings **/
    let self = this;
    return (<div>
          {
          this.props.readyStatus ?
          <div>
          <span>name</span><input ref="name"/>
          <span>school</span><input ref="school"/>
          <ul>
          {
            
            this.props.devices.map(function(device){
                return <li key={device._id}>{device.name} 
                          <span  onClick={self.handleReduce.bind(self,device.name)}>-    </span>
                          {self.state.list.lists[device.name] ? self.state.list.lists[device.name]: 0 }
                          <span  onClick={self.handleAdd.bind(self,device.name)}>       +</span>
                        </li>
              })
            }
          </ul>
          <button onClick={this.commitList.bind(this)}>申请</button>
          </div>
          :
          <Loading />
        }
        </div>);
  }
  handleReduce (name){
    if(this.state.list.lists[name] > 0 ){
      this.state.list.lists[name] = this.state.list.lists[name]-1;
    }
    this.forceUpdate();
  }
  handleAdd (name){
    if(this.state.list.lists[name] ){
      this.state.list.lists[name] = this.state.list.lists[name]+1;
    } else {
      this.state.list.lists[name] = 1;
    }
    this.forceUpdate();
  }
  commitList(){
    this.state.list.name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    this.state.list.school = ReactDOM.findDOMNode(this.refs.school).value.trim();
    this.forceUpdate();
    ApplyList.insert(this.state.list);
  }

  
}

DeviceList.propTypes ={
  readyStatus:PropTypes.bool,
  devices:PropTypes.array,
}

export default createContainer(()=>{
  const sub = Meteor.subscribe('deviceList');
  const devices = DevicesList.find().fetch();
  return {
    readyStatus: sub.ready(),
    devices: devices,
  }
},DeviceList)