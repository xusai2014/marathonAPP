import React, { Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Logout from './logout.jsx';

export default class AppDrawer extends Component{
   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render(){
    return(

        <div>
         <Drawer open={this.state.open} docked={false}
          onRequestChange={(open) => this.setState({open})}
         >
            <MenuItem onClick={this.goProfile.bind(this)}>Profile</MenuItem>
            <MenuItem onClick={this.goGames.bind(this)}>Games</MenuItem>
          </Drawer>
        <AppBar  title="Marathon" iconElementRight={<Logout />}
              onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}
        />
      </div>
      )
  }

  goProfile(){
    FlowRouter.go('/');
    this.setState({open: !this.state.open});
  }

  goGames(){
    FlowRouter.go('/games');
  }

  toggleMenu(){
    this.setState({open: !this.state.open});
  }
}