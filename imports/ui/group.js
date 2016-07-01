import React,{Component,PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
class Group extends Component{
  render(){
    const group = this.props.group
    return(

        <div>
            <ul><li>{group.groupName}</li></ul>
            <button onClick={this.applyDevice.bind(this)}>Join</button>
        </div>
      )
  }
  applyDevice(){
    
  }
}

Group.propTypes = {
  group: PropTypes.object
}

export default createContainer(({id})=>{
  console.log("__________"+(typeof id))
  const group  = Groups.findOne({_id: id});
  return {
    group:group,
  }
},Group)