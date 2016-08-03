
import React from 'react';
import {mount} from 'react-mounter';

import AppContainer from '../imports/ui/App.jsx';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
Meteor.startup(()=>{
  // render(<AppContainer />,document.getElementById('container'))
  injectTapEventPlugin();
});
