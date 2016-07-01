
import React from 'react';
import {mount} from 'react-mounter';

import AppContainer from '../imports/ui/App.js';
import PersonalContainer from '../imports/ui/profile.js';
import GroupContainer from '../imports/ui/group.js';


FlowRouter.route('/', {
    subscriptions: function(params, queryParams) {
        this.register('users', Accounts.connection.subscribe('users'));
    },
    action: function() {

       mount(AppContainer,{content: <PersonalContainer />});
    }
});

FlowRouter.route('/groups/:id', {
    subscriptions: function(params, queryParams) {
      
    },
    action: function(params) {
      const id = params.id;
      mount(AppContainer,{content: <GroupContainer id={id} />});
    }
});

FlowRouter.route('/groups/:id/create/:userId', {
    subscriptions: function(params, queryParams) {
      
    },
    action: function(params) {
      const id = params.id;
      mount(AppContainer,{content: <GroupContainer id={id} />});
    }
});

