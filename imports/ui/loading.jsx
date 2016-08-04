import React,{Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class Loading extends Component {
  render(){
    return (<div> <CircularProgress /> </div>);
  }
}