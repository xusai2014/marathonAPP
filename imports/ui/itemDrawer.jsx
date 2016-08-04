import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back.js';

import Logout from './logout.jsx';

export default class ItemDrawer extends Component{
   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render(){
    return(

        <div>
        <AppBar  title="Marathon" iconElementRight={<Logout />}
          iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
          onClick={this.backHistory.bind(this)}
        />
      </div>
      )
  }


  backHistory(){
    window.history.back();
  }
}