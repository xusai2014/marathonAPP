import React,{Component,PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Loading from './loading.jsx';
import List from './createList.jsx';
import Apply from './applyList.jsx';
import ItemDrawer from './itemDrawer.jsx';
class Group extends Component{
  constructor(props){
    super(props);
    this.state = {
      apply: false
    }
  }
  render(){
    return (
      <div>
      <ItemDrawer />
      <div>
      {
        this.props.readyStatus ?
        <div>
          {
            this.props.group ?
              <div>
                  <ul><li>{this.props.group.groupName}</li></ul>
                  {
                    this.props.list ?
                    <Apply {...this.props}/>
                    :
                    <div>
                       <button onClick={this.applyDevice.bind(this)}>Join</button>
                        {
                          this.state.apply && <List />
                        }
                    </div>
                  }
                  

                 
              </div>
            :
              <div>Please check the url</div>
          }
        </div>
       :
       <Loading />
      }
      </div>
      </div>
    );
   
  }
  applyDevice(){
    this.setState({
      apply:true
    }); 
  }
}

Group.propTypes = {
  readyStatus: PropTypes.bool,
  group: PropTypes.object,
  list:PropTypes.object
}

export default createContainer(({id})=>{
  const sub = DDPCon.subscribe('groupMarathon',id);
  const sub1 = Meteor.subscribe('applyList',Meteor.userId());
  return {
    readyStatus: sub.ready() && sub1.ready(),
    group: Groups.findOne({_id: id}),
    list: ApplyList.findOne({ownerId:Meteor.userId()})
  }
},Group)