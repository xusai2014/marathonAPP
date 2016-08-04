
import React from 'react';
import { Meteor } from 'meteor/meteor';
import {mount} from 'react-mounter';
import { Tracker } from 'meteor/tracker'

import AppContainer from '../imports/ui/App.jsx';
import PersonalContainer from '../imports/ui/profile.jsx';
import GroupContainer from '../imports/ui/group.jsx';
import SignupContainer from '../imports/ui/signup.jsx';
import NotFound from '../imports/ui/NotFound.jsx';

FlowRouter.route('/', {
   
    action: function() {
       mount(AppContainer,{content: <PersonalContainer />});
    }
});

FlowRouter.route('/groups/:id', {
    
    action: function(params) {
      const id = params.id;
      mount(AppContainer,{content: <GroupContainer id={id} />});
    }
});

FlowRouter.route('/groups/:id/create/:userId', {
    
    action: function(params) {
      const id = params.id;
      mount(AppContainer,{content: <GroupContainer id={id} />});
    }
});

FlowRouter.route('/signup', {
    
    action: function(params) {
      
      mount(SignupContainer);
    }
});

FlowRouter.notFound = {
   
    action: function() {
      mount(AppContainer,{content: <NotFound />});
    }
};

