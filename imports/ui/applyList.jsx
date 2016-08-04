import React,{PropTypes} from "react";
import { createContainer } from 'meteor/react-meteor-data';

export default class Apply extends React.Component{

  render(){
    let self = this;
    return (
            <div>
              <span>name:</span>
              <span>{self.props.list.name}</span>

              <span>school:</span>
              <span>{self.props.list.school}</span>
              <ul>
              {
                _.map(self.props.list.lists,function(v,k){
                  return
                  <li>{k}
                     <span  onClick={self.handleReduce.bind(self,k,v)}>-    </span>

                          {v}
                          <span  onClick={self.handleAdd.bind(self,k,v)}>       +</span>
                  </li>
                   
                }) 
              }
              </ul>
              </div>
          );
  }
  handleReduce (k,v){
    let id = Meteor.userId();
    ApplyList.update(id,{
      
    })
    
  }
  handleAdd (k,v){
    
  }
}
