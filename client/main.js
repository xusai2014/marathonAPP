
import React from 'react';
import {mount} from 'react-mounter';

import App from '../imports/ui/App.js';
import PersonalContainer from '../imports/ui/profile.js';

Meteor.startup(()=>{
  mount(App,{content: <PersonalContainer />});
});
